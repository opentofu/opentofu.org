---
title: Help us test OpenTofu 1.10.0-alpha1
slug: help-us-test-opentofu-1-10-0-alpha1
image: /img/blog/help-us-test-opentofu-1-10-0-alpha1.png
---

Hello, OpenTofu community! Today we are proud to announce the first preprelease version of 1.10.0 version. The new version comes with a few highly anticipated features: provider distribution through OCI registries, native state locking support for `s3` backend and many more! We are kindly asking for your help in testing OpenTofu 1.10.0-alpha1.

We have done everything we could to make sure that the new alpha release doesn't break anything, and we need your help to get this release tested. If you have a **non-production** setup that you would be willing to test any of the new features on, please give it a try and give us [feedback using a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose), even if it's just telling us that everything went well.

This blog post will go over how to download the new preview release and detail how each of the new features works.

:::warning

Do not test this release on a production project! It is not a stable release!

:::

## Downloading the alpha release

The alpha release is available exclusively from the [GitHub Releases page](https://github.com/opentofu/opentofu/releases/tag/v1.10.0-alpha1). Please select the appropriate file for your platform. Here are some quick links:

| Platform/Device                                                                 | Download link                                                                                                                                       |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Desktop Windows computer**<br />(64-bit)                                      | [tofu_1.10.0-alpha1_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha1/tofu_1.10.0-alpha1_windows_amd64.zip)     |
| **MacOS**<br />(Macbook M1 or higher; ARM64)                                    | [tofu_1.10.0-alpha1_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha1/tofu_1.10.0-alpha1_darwin_arm64.tar.gz) |
| **MacOS**<br />(Macbook pre-M1; AMD64)                                          | [tofu_1.10.0-alpha1_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha1/tofu_1.10.0-alpha1_darwin_amd64.tar.gz) |
| **Intel/AMD Linux computer or server**<br />(AMD64)                             | [tofu_1.10.0-alpha1_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha1/tofu_1.10.0-alpha1_linux_amd64.tar.gz)   |
| **ARM-based Linux computer<br />or<br />Raspberry Pi 3 or higher**<br />(ARM64) | [tofu_1.10.0-alpha1_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha1/tofu_1.10.0-alpha1_linux_arm64.tar.gz)   |

For the releases above, please unpack the archive and you should find the `tofu` binary inside. You can also use the [standalone installer](https://opentofu.org/docs/intro/install/standalone/) to download the release with signature verification.

## Provider distribution through OCI registries

One of OpenTofu's top-voted issues is to support distribution of providers and modules through OCI registries. This release brings the first part of it - now you can use OCI registries to install a copy of a provider through a special "provider mirror" location.

Creating a local mirror of some or all of the providers you use can reduce data transfer costs and can help with running OpenTofu in "air-gapped" environments that cannot access any services over the public internet.

Alternative provider installation methods are configured as part of [the OpenTofu CLI Configuration](https://opentofu.org/docs/main/cli/config/config-file/). You can configure installation from OCI Registries using an `oci_mirror` block as part of your [Explicit Installation Method Configuration](https://opentofu.org/docs/main/cli/config/config-file/#explicit-installation-method-configuration):

```hcl
provider_installation {
  oci_mirror {
    repository_template = "example.com/opentofu-providers/${namespace}/${type}"
    include             = ["registry.opentofu.org/*/*"]
  }
}
```

The above example specifies that any provider that belongs to the primary OpenTofu Registry should instead be installed from a repository in an OCI registry, constructing the repository address dynamically using the components of the provider source address.

For more information, please refer to [the documentation](https://opentofu.org/docs/main/cli/oci_registries/provider-mirror/). Also, you can check out our progress via the [Provider and module packages from OCI registries RFC Tracker](https://github.com/opentofu/opentofu/issues/2540).

## Native locking support for `s3` backend

Now, OpenTofu can leverage native `s3` conditional writes to eliminate the need of DynamoDB to handle locks. This allows you to rely on a single cloud service to handle both storage and locking of the state file. Please, keep in mind, not all of the s3-compatible storage support this feature yet.

We introduced a new `use_lockfile` field, which makes OpenTofu create a separate lock file in the same bucket:

```hcl
terraform {
  backend "s3" {
    bucket = "tofu-state-backend"
    key = "statefile"
    region = "us-east-1"
    use_lockfile = true
  }
}
```

For more information, please refer to [the documentation of the s3 backend](https://opentofu.org/docs/main/language/settings/backends/s3/#s3-state-locking).

## What else?

This release brings a lot more other enhancements such as:

* External programs as key providers for state encryption;
* The `element` function now accepts negative indices;
* `moved` now supports moving between different types;
* Multiple enhancements for `tofu test`;
* Count of forgotten resources in plan and apply outputs;
* and much more!

You can find [the detailed changelog here](https://github.com/opentofu/opentofu/blob/57376f6ec64da8adaa271c1610396fbb86ada549/CHANGELOG.md).

## Providing feedback

Thank you for taking the time to test this preview release. If you have any feedback, please use [a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose) or chat with us on the [OpenTofu Slack](https://opentofu.org/slack/).
