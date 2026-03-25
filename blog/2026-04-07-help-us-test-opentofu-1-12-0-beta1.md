---
title: OpenTofu 1.12.0-beta1 is now available
slug: help-us-test-opentofu-1-12-0-beta1
---

# OpenTofu 1.12.0-beta1 is Now Available

We've now published the first beta release of OpenTofu 1.12.0. For this cycle we intentionally worked mainly on smaller enhancements and fixes, since it's otherwise easy for those to get left behind when we prioritize larger features. Nonetheless, there are some commonly-requested improvements here that we hope you'll enjoy.

:::warning
Do not use OpenTofu prereleases in production environments!
:::

## Download and Installation

Download the appropriate package for your platform:

| Platform              | Release Package                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS (Apple Silicon) | [tofu_1.12.0-beta1_darwin_arm64.zip](https://github.com/opentofu/opentofu/releases/download/v1.12.0-beta1/tofu_1.12.0-beta1_darwin_arm64.zip)       |
| Linux (AMD64)         | [tofu_1.12.0-beta1_linux_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.12.0-beta1/tofu_1.12.0-beta1_linux_amd64.zip)         |
| Linux (ARM64)         | [tofu_1.12.0-beta1_linux_arm64.zip](https://github.com/opentofu/opentofu/releases/download/v1.12.0-beta1/tofu_1.12.0-beta1_linux_arm64.zip)         |
| Windows (AMD64)       | [tofu_1.12.0-beta1_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.12.0-beta1/tofu_1.12.0-beta1_windows_amd64.zip)     |

We also provide packages for some other platforms on a best-effort basis. For more information, refer to [the full set of release packages](https://github.com/opentofu/opentofu/releases/tag/v1.12.0-beta1).

After downloading, extract the archive to find the `tofu` executable.

## What's New in OpenTofu 1.12

The following sections describe some highlights of this release. For the full set of changes in this release, refer to [the OpenTofu v1.12 changelog](https://github.com/opentofu/opentofu/blob/v1.12/CHANGELOG.md).

### `prevent_destroy` can now be set dynamically

The `prevent_destroy` argument for managed resources can now refer to input variables and other dynamic symbols, so for example you can write a module that refuses deletion of an important object by default but allow the caller to override that in development environments:

```hcl
variable "prevent_destroy_database" {
  type    = bool
  default = true
}

resource "example_database" "example" {
  # ...

  lifecycle {
    prevent_destroy = var.prevent_destroy_database
  }
}
```

A caller of the above module could explicitly set `prevent_destroy_database = false` to allow `tofu destroy` to work, but this would still cause an error by default to reduce the risk of mistakes.

### Import using "Resource Identity"

The latest versions of the provider plugin protocol introduce a new concept called "resource identity", which allows each resource type to have a schema for just a small amount of metadata that uniquely identifies an object in the remote system, as opposed to the main state data that includes all of the attributes you can normally interact with in OpenTofu modules.

OpenTofu v1.12 introduces our first major use of that new feature: _import_ using resource identity. Traditionally the `tofu import` command and `import` blocks required identifying the object to import with just a single string assigned to the `id` argument, which is okay for simple cases where the remote object _has_ a single string as its unique identifier but is challenging for resource types where the identifier is some sort of compound key, where previously each resource type needed its own special syntax for how to identify a remote object.

`import` blocks now support a new `identity` argument which module authors would use instead of `id` argument to describe what to import using an object that matches the resource type's resource identity schema.

For example, `aws_ssm_maintenance_window_target` from the `hashicorp/aws` provider has a resource identity schema that requires both `id` and `window_id` attributes to be specified, and so now you can write an `import` block like this:

```hcl
import {
  to = aws_ssm_maintenence_window_target.example
  identity = {
    window_id = "mw-EXAMPLE"
    id        = "20591c06-c386-41ac-928c-5cc32dd43cd9"
  }
}
```

For the simpler resource types whose import id format was previously just a simple identifier, their identity schema usually just includes a single required attribute whose name describes what kind of identifier is required. For example, in the `hashicorp/aws` provider it's common to use an `arn` attribute whose value is the fully-qualified [ARN](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) for the object.

A provider decides what schema to use for each of its resource types. To find out whether a resource type has been updated to support import by resource identity, and which attributes to use if so, refer to the documentation for the resource type you are interested in using the OpenTofu Registry. Most resource types continue to support the original style of import with just a single `id` string too, but that is technically optional and so over time providers may stop offering that for new resource types.

### Provider Installation Improvements

OpenTofu Registry now returns a full set of checksums when you install a provider, so that the dependency lock file will immediately have enough information to verify packages on all of the platforms the provider supports.

Although previous versions of OpenTofu were able to produce a working dependency lock file when using the default provider installation settings, many of the available customizations of the installation process caused problems related to checksums:

- The checksums returned by the registry could not be used to verify packages in [the optional global cache directory](https://opentofu.org/docs/cli/config/config-file/#provider-plugin-cache), so that cache was often ineffective at preventing OpenTofu from redownloading packages from the origin registry.

- The checksums returned by the registry could also not verify packages from [local filesystem mirror directories](https://opentofu.org/docs/cli/config/config-file/#implied-local-mirror-directories) or other [alternative installation methods](https://opentofu.org/docs/cli/config/config-file/#explicit-installation-method-configuration), which caused `tofu init` to fail when run on a platform other than the one that initially populated the lock file, unless teams remembered to explicitly run `tofu providers lock` to force adding additional checksums to the lock file.

- Even with the default settings, running `tofu init` on a different platform than where it was initially run would cause an additional checksum to be added to the lock file, which is confusing for anyone reviewing changes to the configuration and is particularly problematic for those who use `tofu init -lockfile=readonly` in their pipeline to ensure that only previously-reviewed providers can be selected.

To avoid these problems, the registry now returns checksums that are suitable for verifying both local and remote provider packages, and `tofu init` will add them all to the dependency lock file immediately if the downloaded package matches the reported checksums for the current platform.

In particular, most teams should no longer need to use `tofu providers lock` at all. We've retained it only for its originally-intended purpose: populating the lock file with correct checksums from the origin registry on a system where `tofu init` is configured to use an alternative installation source. As long as your CLI configuration allows `tofu init` to install packages directly from from OpenTofu Registry (which is the default), it will record the full set of checksums automatically.

The first time you run `tofu init` after upgrading, you are likely to find additional entries were added to the `hashes` argument in your dependency lock file, all of which should use the `h1:` prefix. This is the hashing scheme that previous versions of OpenTofu could only calculate locally, but OpenTofu v1.12 can now prepopulate all of these hashes at once on first install, in addition to the `zh:` hashes that were already included by previous versions of OpenTofu. If you already had a lock file entry for a provider that was populated from the registry by a previous version of OpenTofu then it should already have its full set of `zh:` checksums and so no new items should be added with that prefix.

Alongside the checksum-related changes, we've also made some performance improvements that should allow `tofu init` to complete faster for those who are installing many small providers.

### Simultaneous Human-readable and Machine-readable Command Output

Various OpenTofu commands allow specifying a `-json` option on the command line to select machine-readable output in JSON format, instead of the normal human-oriented output. However, in previous versions these two modes were mutually-exclusive: requesting machine-readable output disabled the human-oriented output.

OpenTofu v1.12 introduces the alternative `-json-into=FILE` option, which leaves the human-oriented output enabled on the "stdout" and "stderr" handles but also writes the machine-readable output to the specified file. We expect this would be useful for those running OpenTofu in pipelines where the human-facing output should appear in the main job output for operators to read, but the pipeline also needs access to some or all of that information for automation purposes. The specified path can either refer to a regular file or to a special object like a named pipe or "FIFO", in case your automation needs to react to streaming events concurrently while OpenTofu is still running.

We've also introduced the `-json` and `-json-into=FILE` options to many more commands in this release. For most of these the JSON output is currently just human-oriented messages wrapped up in JSON objects, but we're interested in extending these JSON objects with useful data based on your use-cases. If there's some specific automation or an alternative UI you'd like to build that would benefit from machine-readable information about what OpenTofu is working on, please open a feature request issue on GitHub and we'll consider it for a future release.

## Join the Testing Effort

Your testing and feedback are crucial to ensuring that these new capabilities work correctly across different environments and use cases.

If you have a **non-production** environment where you could test any of the new features or bugfixes then we'd appreciate your help. Even if everything works as you expected, please [share your testing experiences](https://github.com/orgs/opentofu/discussions/3939) or join the conversation in [#opentofu in the CNCF Slack workspace](https://opentofu.org/slack/).

Thank you for supporting the OpenTofu project!
