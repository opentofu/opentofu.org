---
title: Help us test OpenTofu 1.10.0-beta1
slug: help-us-test-opentofu-1-10-0-beta1
image: /img/blog/opentofu-1-7-0-beta1.png
---

## OpenTofu 1.10.0-beta1 is Now Available

We're excited to announce the beta release of OpenTofu 1.10.0! Thanks to your valuable feedback on our alpha releases, we've refined the features and fixed numerous bugs to bring you this more stable beta version.

:::warning
Do not test this release on production projects! This is not a stable release.
:::

This post focuses primarily on what's new and improved since the [1.10.0-alpha2 release](/blog/help-us-test-opentofu-1-10-0-alpha2/). If you're new to the 1.10.0 release cycle, we recommend checking out our previous posts about [alpha1](/blog/help-us-test-opentofu-1-10-0-alpha1/) and [alpha2](/blog/help-us-test-opentofu-1-10-0-alpha2/) to learn about major features like OCI Registry integration, native S3 locking, and OpenTelemetry tracing.

## Download and Installation

The beta release is available from the [GitHub Releases page](https://github.com/opentofu/opentofu/releases/tag/v1.10.0-beta1). Select the appropriate file for your platform:

| Platform              | Download link                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows (64-bit)      | [tofu_1.10.0-beta1_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_windows_amd64.zip)     |
| macOS (Apple Silicon) | [tofu_1.10.0-beta1_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_darwin_arm64.tar.gz) |
| macOS (Intel)         | [tofu_1.10.0-beta1_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_darwin_amd64.tar.gz) |
| Linux (AMD64)         | [tofu_1.10.0-beta1_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_linux_amd64.tar.gz)   |
| Linux (ARM64)         | [tofu_1.10.0-beta1_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_linux_arm64.tar.gz)   |

After downloading, unpack the archive to find your `tofu` binary. For verified downloads, you can also use the [standalone installer](https://opentofu.org/docs/intro/install/standalone/) with signature verification.

## What's New in 1.10.0-beta1

### OCI Registry Enhancements

Since alpha2, we've refined our OCI registry support with important improvements:

- Added support for OCI registries that don't report `artifactType` on layers
- Improved e2e test verification for provider installation from OCI mirrors
- Enhanced documentation for OCI registry-based provider mirrors
- Fixed issues with OCI providers in air-gapped environments

If you're using OCI registries for private provider distribution or in air-gapped environments, we'd especially appreciate your testing of these features.

### Global Provider Cache Lock Improvements

The shared provider cache (set via the `TF_PLUGIN_CACHE_DIR` environment variable) now includes filesystem-level locking, making it safe to use with concurrent OpenTofu operations. This is particularly valuable for:

- CI/CD systems that run multiple `tofu init` operations in parallel
- Orchestration tools that manage multiple OpenTofu pipelines simultaneously
- Large-scale Terragrunt setups with many projects

Since the alpha releases, we've fixed several edge cases and improved the reliability of this locking mechanism.

### Bug Fixes and Quality-of-Life Improvements

The beta release includes numerous bug fixes and quality-of-life improvements:

- Better error messages when using `null` in invalid positions in the `transpose` function
- Fixed loading of encryption key providers to better support `terraform_remote_state`
- Fixed handling of complex variable default values with incorrect types
- Fixed module downloads from GitHub branches containing slashes in the name
- Improved generation of OpenTofu configuration from `import` blocks with nested attributes
- Added warning when provider references are missing `required_providers` entries
- Fixed an issue where syntax errors in `required_providers` blocks could cause panics
- Improved the PostgreSQL backend to prevent state corruption with parallel runs

## Key Features Overview for New Testers

If this is your first look at OpenTofu 1.10.0, here's a concise overview of the major features in this release:

### OCI Registry Support

Full integration with OCI registries for both provider and module distribution, valuable for organizations with private infrastructure-as-code components, air-gapped environments, or enhanced security requirements.

```hcl
# Configure OCI registry mirrors in your CLI configuration:
provider_installation {
  oci_mirror {
    repository_template = "example.com/opentofu-providers/${namespace}/${type}"
    include             = ["registry.opentofu.org/*/*"]
  }
}

# Use OCI modules directly in your configuration:
module "vpc" {
  source = "oci://example.com/modules/vpc/aws"
}
```

### Native S3 Locking

Simplify your infrastructure by using S3's conditional writes capability for state locking, eliminating the need for a separate DynamoDB table.

```hcl
terraform {
  backend "s3" {
    bucket       = "tofu-state-backend"
    key          = "statefile"
    region       = "us-east-1"
    use_lockfile = true  # Enable native S3 locking
  }
}
```

### OpenTelemetry Tracing

Gain insights into OpenTofu operations with experimental OpenTelemetry tracing, completely local and under your control.

```bash
# Launch a tracing backend like Jaeger
docker run -d --name jaeger \
  -p 16686:16686 -p 4317:4317 \
  jaegertracing/jaeger:2.5.0

# Configure OpenTofu to use OpenTelemetry
export OTEL_TRACES_EXPORTER=otlp
export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317
export OTEL_EXPORTER_OTLP_INSECURE=true

# Run your operations and view traces at http://localhost:16686
tofu init
```

### Resource Management with Target Files

Manage complex deployments more easily with the new `-target-file` and `-exclude-file` options, allowing version-controlled resource targeting patterns.

```bash
# Create a targets.txt file
# Critical infrastructure components
module.networking.aws_vpc.main
module.networking.aws_subnet.public[*]
```

```bash
# Apply only those resources
tofu apply -target-file=targets.txt

# Similarly, create an excludes.txt file to skip certain resources
tofu plan -exclude-file=excludes.txt
```

### Other Major Features

#### External Key Providers for State Encryption

Configure external commands to retrieve encryption keys, enabling flexible state encryption with your preferred tools:

```hcl
terraform {
  encryption {
    key_provider "external" "password_manager" {
      command = ["./state_encryption_key.sh", "some_parameter"]
    }
  }
}

# You can also chain key providers together:
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

#### Enhanced PostgreSQL Backend

The PostgreSQL backend now supports custom table and index names for multi-project state management:

```hcl
terraform {
  backend "pg" {
    conn_str    = "postgres://user:pass@db.example.com/database"
    schema_name = "opentofu"
    table_name  = "project_a_state"
    index_name  = "project_a_index"
  }
}
```

#### Resource Type Migration

The `moved` block now supports migration between different resource types:

```hcl
moved {
  from = gpg_key.this
  to   = gpg_key_pair.this
}
```

#### Fine-Grained Resource Removal

The `removed` block now supports lifecycle and provisioner configurations:

```hcl
removed {
  from = aws_instance.legacy_server

  lifecycle {
    destroy = true  # Destroys the resource (default is false which just forgets it)
  }

  provisioner "local-exec" {
    when    = destroy
    command = "echo 'Cleaning up before destroying resource'"
  }
}
```

For more details, see our [alpha1](/blog/help-us-test-opentofu-1-10-0-alpha1/) and [alpha2](/blog/help-us-test-opentofu-1-10-0-alpha2/) blog posts.

## Compatibility Notes

Before upgrading, please note these key compatibility points:

- Linux: Requires kernel version 3.2 or later
- macOS: Requires macOS 11 Big Sur or later
- The `ghcr.io/opentofu/opentofu` image is no longer supported as a base image
- Windows: Symbolic links and junctions are now handled differently
- The PostgreSQL backend in OpenTofu 1.10 should not be used alongside older versions

For complete details, review the [full changelog](https://github.com/opentofu/opentofu/blob/main/CHANGELOG.md).

## Join the Testing Effort

Your testing and feedback are crucial to ensuring that all these new capabilities work flawlessly across different environments and use cases. If you have a **non-production** environment where you could test any of these capabilities, we'd appreciate your help.

Even if everything works perfectly, please share your testing experiences through [GitHub issues](https://github.com/opentofu/opentofu/issues/new/choose) or join the conversation in the [OpenTofu Slack](https://opentofu.org/slack/).

Thank you for your continued support of the OpenTofu project!
