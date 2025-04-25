---
title: Help us test OpenTofu 1.10.0-alpha2
slug: help-us-test-opentofu-1-10-0-alpha2
image: /img/blog/help-us-test-opentofu-1-10-0-alpha1.png
---

Hello, OpenTofu community! We're thrilled to announce the second alpha release of OpenTofu 1.10.0! We have been hard at work adding new features, fixing bugs, and iterating with community feedback. This alpha delivers several long awaited features that we know you have been rooting for.

Your involvement is crucial as we refine these features. If you have a **non-production** environment where you could test any of these new capabilities, we'd be grateful for your help. Even if everything works perfectly (which we hope it does!), your [feedback via GitHub issues](https://github.com/opentofu/opentofu/issues/new/choose) is invaluable to ensuring 1.10.0 becomes the rock-solid release our community deserves.

:::warning

Do not test this release on a production project! It is not a stable release!

:::

## Downloading the alpha release

The alpha release is available exclusively from the [GitHub Releases page](https://github.com/opentofu/opentofu/releases/tag/v1.10.0-alpha2). Please select the appropriate file for your platform. Here are some quick links:

| Platform/Device                                                                 | Download link                                                                                                                                          |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Desktop Windows computer**<br />(64-bit)                                      | [tofu_1.10.0-alpha2_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha2/tofu_1.10.0-alpha2_windows_amd64.zip)     |
| **MacOS**<br />(Macbook M1 or higher; ARM64)                                    | [tofu_1.10.0-alpha2_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha2/tofu_1.10.0-alpha2_darwin_arm64.tar.gz) |
| **MacOS**<br />(Macbook pre-M1; AMD64)                                          | [tofu_1.10.0-alpha2_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha2/tofu_1.10.0-alpha2_darwin_amd64.tar.gz) |
| **Intel/AMD Linux computer or server**<br />(AMD64)                             | [tofu_1.10.0-alpha2_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha2/tofu_1.10.0-alpha2_linux_amd64.tar.gz)   |
| **ARM-based Linux computer<br />or<br />Raspberry Pi 3 or higher**<br />(ARM64) | [tofu_1.10.0-alpha2_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-alpha2/tofu_1.10.0-alpha2_linux_arm64.tar.gz)   |

After downloading one of the releases above, unpack the archive to find your `tofu` binary. For those who prefer verified downloads, you can also use the [standalone installer](https://opentofu.org/docs/intro/install/standalone/) with signature verification.

## The Building Blocks of 1.10.0

If you're just joining us for alpha 2, OpenTofu 1.10.0 is bringing several groundbreaking features to the table:

### OCI Registry Integration

OpenTofu now seamlessly integrates with OCI registries for both provider distribution and module installation (new for alpha 2). This is a game-changer for private, air-gapped environments and teams looking for more flexible ways to distribute their infrastructure components.

Configure provider installation from OCI Registries with a `oci_mirror` block:

```hcl
provider_installation {
  oci_mirror {
    repository_template = "example.com/opentofu-providers/${namespace}/${type}"
    include             = ["registry.opentofu.org/*/*"]
  }
}
```

Or install modules directly using the new `oci:` source scheme:

```hcl
module "vpc" {
  source = "oci://example.com/modules/vpc/aws"
}
```

For more information, see our [alpha 1 blog post](https://opentofu.org/blog/help-us-test-opentofu-1-10-0-alpha1/#provider-distribution-through-oci-registries) for provider instructions and [our latest docs](https://opentofu.org/docs/main/cli/oci_registries/module-package/) for module instructions.

### Simplified State Management with Native S3 Locking

Why use two services when one will do? The `s3` backend now supports native locking without requiring DynamoDB, streamlining your state management in AWS environments with the simple addition of `use_lockfile`:

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

### Peek Behind the Curtain with OpenTelemetry Tracing

Ever wondered what's happening under the hood during those long provider installations? Alpha 2 introduces experimental OpenTelemetry (OTel) tracing that gives you unprecedented visibility into OpenTofu's operations.

:::note
Although this builds on a project named Open*Telemetry*, we are adding this support explicitly for you to trace *your application* using *your tooling* on *your infrastructure*. To be absolutely clear: we are *not* adding telemetry that will phone home to us or anyone else.
:::

Getting started with tracing takes two steps. First, launch a tracing backend like Jaeger:

```bash
docker run -d --rm --name jaeger \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  -p 5778:5778 \
  -p 9411:9411 \
  jaegertracing/jaeger:2.5.0
```

Then tell OpenTofu to use it with these environment variables:

```bash
# Required variables
export OTEL_TRACES_EXPORTER=otlp
export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317
export OTEL_EXPORTER_OTLP_INSECURE=true
```

Now you can watch your OpenTofu operations unfold in real-time through the Jaeger UI at http://localhost:16686. Currently, tracing describes:

- Provider installation and downloads
- Lock file operations

This is just the beginning – future releases will expand tracing to cover even more of your OpenTofu workflow. Let us know what areas you want more insight into!

### Deprecation for module variables and outputs

It is now possible to communicate variables and outputs deprecation via `deprecated` attribute! Module
authors are able to mark variable or output as deprecated and provide a suggestion on how to migrate 
away. Module callers will receive a warning if their configuration is affected. Here is an example of 
configuration:

```hcl
variable "examle" {
  type       = string
  deprecated = "'examle' variable must no longer be used due to a typo, use 'example' instead"
}

output "examle" {
  value      = "someval"
  deprecated = "'examle' output must no longer be used due to a typo, use 'example' instead"
}
```

### Global Provider Cache Locking

The [Global Provider Plugin Cache](https://opentofu.org/docs/cli/config/config-file/#provider-plugin-cache) allows OpenTofu to download providers into a shared cache directory. Prior to this release, it was not safe to use this with multiple instances of OpenTofu running in parallel as they could clobber each other. We now have added support for filesystem level locking to this cache!

```sh
export TF_PLUGIN_CACHE_DIR=/storage/tofu/cache
```

This now means the global provider plugin cache is safe for tofu to use concurrently:
* With your CI system that runs dozens of `tofu init`s in parallel
* With your orchestration tool that runs multiple pipelines at the same time
* With all of your Terragrunt projects and stacks


### Multi-Project PostgreSQL State Management

The `pg` backend gets a significant upgrade with the ability to specify custom table and index names, unlocking multi-project state management within a single database schema:

```hcl
terraform {
  backend "pg" {
    conn_str    = "postgres://user:pass@db.example.com/database"
    schema_name = "opentofu"
    table_name  = "project_a_state"  # Default is "terraform_state"
    index_name  = "project_a_index"  # Default is "terraform_state_idx"
  }
}
```

We've also solved an issue that could cause state corruption when sharing a database between different OpenTofu versions, making your state storage more robust than ever.

### Resource Migration with `moved`

The `moved` block now supports migration between entirely different resource types:

```hcl
moved {
    from=gpg_key.this
    to=gpg_key_pair.this
}
```

### Fine-Grained Resource Removal with `removed`

The `removed` block now supports `lifecycle` and `provisioner` configurations:

```hcl
removed {
  from = aws_instance.example

  lifecycle {
    destroy = true  # Destroys the resource (default is false which just forgets it)
  }

  # Provisioners will run before destruction when destroy = true
  provisioner "local-exec" {
    when    = destroy
    command = "echo 'Cleaning up before destroying resource'"
  }
}
```

### Streamlined Resource Planning

The new `-target-file` and `-exclude-file` options transform how you manage complex deployments, allowing you to maintain consistent target and exclusion patterns across your team:

```bash
# Target specific resources listed in targets.txt
tofu plan -target-file=targets.txt

# Exclude specific resources listed in excludes.txt
tofu apply -exclude-file=excludes.txt
```

No more copy-pasting long resource addresses – just reference your carefully maintained resource lists.

### Flexible State Encryption with External Key Providers

Security-conscious teams will appreciate the new external key providers for state encryption, bringing unprecedented flexibility to your secret management approach:

```hcl
terraform {
  encryption {
    key_provider "external" "password_manager" {
      command = ["./state_encryption_key.sh", "some_parameter"]
    }
  }
}
```

The PBKDF2 key provider now supports chaining, allowing you to compose multiple key providers:

```hcl
terraform {
  encryption {
    key_provider "external" "password_manager" {
      command = ["./get_password.sh", "some_parameter"]
    }
    key_provider "pbkdf2" "passphrase" {
      chain = key_provider.external.password_manager
    }
  }
}
```


### And That's Not All

Alpha 2 packs numerous other quality-of-life improvements:

- The `element` function now accepts negative indices, with `-1` selecting the last element
- Test `run` outputs can now be referenced in test `provider` blocks
- Force-unlock capability now extends to the HTTP backend
- Plan outputs now show forgotten resources count, improving visibility into state changes

## Before You Upgrade

As with any significant release, there are some key compatibility points to consider:

- On Linux, OpenTofu now requires kernel version 3.2 or later
- On macOS, OpenTofu now requires macOS 11 Big Sur or later
- OpenTofu 1.10 with the `pg` backend should not be used alongside older versions
- The `ghcr.io/opentofu/opentofu` image is no longer supported as a base image
- On Windows, symbolic links and junctions are now handled differently

For complete details, please review the [full changelog](https://github.com/opentofu/opentofu/blob/v1-10-0-alpha2/CHANGELOG.md).

## Join the Testing Effort

OpenTofu 1.10.0 is shaping up to be a landmark release, and your input can help make it truly exceptional. Whether you're intrigued by the OCI registry integration, excited about native S3 locking, or curious about OpenTelemetry tracing, we'd love your feedback.

Share your testing experiences through [GitHub issues](https://github.com/opentofu/opentofu/issues/new/choose) or join the conversation in the [OpenTofu Slack](https://opentofu.org/slack/). Every bit of feedback brings us closer to a rock-solid 1.10.0 release.

Thank you!
