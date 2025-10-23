---
title: Help us test OpenTofu 1.11.0-beta1
slug: help-us-test-opentofu-1-11-0-beta1
---

## OpenTofu 1.11.0-beta1 is Now Available

We're excited to announce the beta release of OpenTofu 1.11.0! This release brings two highly anticipated features to beta: **Ephemeral Resources** for handling confidential data without persisting it to state, and the **enabled meta-argument** for conditional resource provisioning.

If you've been following along, you may have seen our [announcement about ephemeral support](/blog/ephemeral-ready-for-testing/) when these features became available in nightly builds. This beta release marks the first official preview of these capabilities, along with stabilized module deprecation features and important performance improvements.

:::warning
Do not test this release on production projects! This is not a stable release.
:::

## Download and Installation

The beta release is available from the [GitHub Releases page](https://github.com/opentofu/opentofu/releases/tag/v1.11.0-beta1). Select the appropriate file for your platform:

| Platform              | Download link                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows (64-bit)      | [tofu_1.11.0-beta1_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.11.0-beta1/tofu_1.11.0-beta1_windows_amd64.zip)     |
| macOS (Apple Silicon) | [tofu_1.11.0-beta1_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.11.0-beta1/tofu_1.11.0-beta1_darwin_arm64.tar.gz) |
| macOS (Intel)         | [tofu_1.11.0-beta1_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.11.0-beta1/tofu_1.11.0-beta1_darwin_amd64.tar.gz) |
| Linux (AMD64)         | [tofu_1.11.0-beta1_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.11.0-beta1/tofu_1.11.0-beta1_linux_amd64.tar.gz)   |
| Linux (ARM64)         | [tofu_1.11.0-beta1_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.11.0-beta1/tofu_1.11.0-beta1_linux_arm64.tar.gz)   |

After downloading, unpack the archive to find your `tofu` binary. For verified downloads, you can also use the [standalone installer](https://opentofu.org/docs/intro/install/standalone/) with signature verification.

## What's New in 1.11.0-beta1

### Ephemeral Resources / Write-Only Attributes - Beta Release

Ephemeral resources allow you to work with confidential data, temporary credentials, and transient infrastructure without persisting them to your state.

A long-standing challenge with infrastructure-as-code has been the storage of confidential data within state. This includes passwords, API keys, certificates, and other secrets that could lead to security incidents if leaked. Ephemeral resources solve this problem by ensuring these values only exist during the execution of a single OpenTofu command.

#### Key Benefits

- **Enhanced Security**: Confidential values never touch your state files
- **Transient Resources**: Create temporary network tunnels, SSH proxies, or time-limited credentials
- **Cleaner State Management**: Reduce the amount of confidential data requiring encryption and protection

#### How It Works

Ephemeral resources are opened at the beginning of an OpenTofu operation, used during execution, and closed when no longer needed. No ephemeral values are ever stored in your state.

Here's a simple example that also uses write-only attributes; These allow you to pass ephemeral data into regular resources without storing that information in your state:

```hcl
# Use AWS SecretsManager to generate a random password
ephemeral "aws_secretsmanager_random_password" "password" {

}

resource "kubernetes_secret_v1" "credentials" {
  metadata = {
    name = "admin"
    namespace = "my-app"
  }
  data_wo = {
    username = "admin"
    password = ephemeral.aws_secretsmanager_random_password.password.random_password
  }

  data_wo_revision = 1
  type = "kubernetes.io/basic-auth"
}
```

In this case, we're using the `aws_secretsmanager_random_password` ephemeral resource to generate a random password and store it in a kubernetes secret.

The value of this password will never be stored in the plan or the state by OpenTofu. Because OpenTofu does not store the value in the state the resource will only update it's password value when the revision number is incremented.

You can find more in our documentation for [Ephemerality](/docs/main/language/ephemerality/ephemeral-resources/) or [Write-Only Attributes](/docs/main/language/ephemerality/write-only-attributes/)

### The `enabled` Meta-Argument

The new `enabled` meta-argument provides a cleaner alternative to `count` and `for_each` for scenarios where you need to conditionally create a single resource or module instance. This addresses one of the most common patterns in infrastructure code: "create this resource only if a certain condition is true."

#### Why `enabled`?

Previously, you'd use `count = var.create_instance ? 1 : 0`, which works but has downsides:

- Creates arrays even for single resources (requiring `[0]` indexing)
- Less readable and intuitive than a simple boolean flag
- Can be confusing for module consumers

The `enabled` meta-argument solves this elegantly:

```hcl
resource "aws_instance" "web" {
  ami           = "ami-12345"
  instance_type = "t3.micro"

  lifecycle {
    enabled = var.create_instance  # Simple boolean condition
  }
}
```

#### Module Example

This is especially useful in modules where you want to make resources optional:

```hcl
variable "enable_monitoring" {
  type    = bool
  default = true
}

resource "aws_cloudwatch_metric_alarm" "high_cpu" {
  alarm_name          = "high-cpu-usage"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"

  lifecycle {
    enabled = var.enable_monitoring
  }
}
```

#### Nested in Lifecycle Block

The `enabled` argument is nested inside the `lifecycle` block rather than at the resource level. This design choice prevents conflicts with existing input variables or resource arguments that might already be named `enabled`.

For more information, refer to the enabled meta-argument documentation [here](/docs/main/language/meta-arguments/enabled/).

## Additional Features and Improvements

### Module Variable and Output Deprecation - Now Stable

The ability to mark module variables and outputs as deprecated, which was experimental in OpenTofu 1.10, is now stable! Module authors can guide users away from legacy interfaces while maintaining backward compatibility.

Mark variables as deprecated:

```hcl
variable "legacy_input" {
  type       = string
  default    = "default-value"
  deprecated = "This variable is deprecated. Please use 'new_input' instead. This will be removed in v2.0 of this module."
}
```

Mark outputs as deprecated:

```hcl
output "old_endpoint" {
  value      = aws_instance.main.public_ip
  deprecated = "This output is deprecated. Use 'instance_endpoint' instead. This will be removed in v2.0 of this module."
}
```

Users will see clear warnings when using deprecated variables or outputs, helping them prepare for future module updates.

For more information, see [marking variable as deprecated](/docs/main/language/values/variables/#marking-variable-as-deprecated) and [marking output as deprecated](/docs/main/language/values/outputs/#deprecated--marking-output-as-deprecated)

### Performance Improvements

This release includes significant performance optimizations for large-scale deployments:

- **Improved RAM and CPU efficiency** for configurations that contain thousands of resource instances
- Improved handling of complex dependency graphs
- Optimized memory usage during plan and apply operations

### Enhanced S3 Backend

<!-- Note for reviewer, I really liked this feature and think its cool to showcase maybe. Do you agree? -->

The S3 backend now supports **object tagging** your backend, allowing you to add custom tags to your state files for better organization and cost tracking:

```hcl
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "production/terraform.tfstate"
    region = "us-east-1"

    state_tags = {
      Environment = "production"
      Team        = "platform"
    }

    lock_tags = {
      Environment = "production"
      Team        = "platform"
    }
  }
}
```

### Feedback Request: Experimental Encryption Features

OpenTofu introduced experimental support for external encryption methods and key providers in previous releases. These features allow you to integrate with external key management systems and custom encryption workflows.

**We need your feedback!** We're planning to stabilize these features and would love to hear about your experiences:

- Are the `external` method and `external` key_provider meeting your needs?
- What use cases are you solving with these features?
- What improvements would make them more useful?
- Are there any issues or limitations you've encountered?

If you're using or considering using state encryption with external key management, please share your feedback through [this GitHub Discussion](https://github.com/orgs/opentofu/discussions/3416)

Your input will directly influence whether these features move to stable in OpenTofu 1.12 or need more development time.

## Compatibility Notes

Before upgrading, please note these important compatibility points and breaking changes:

### System Requirements

- **macOS**: OpenTofu on macOS now requires **macOS 12 Monterey or later**

### Breaking Changes

- **Azure Backend (`azurerm`)**:

  - The `endpoint` and `ARM_ENDPOINT` configuration options are no longer supported
  - The `msi_endpoint` and `ARM_MSI_ENDPOINT` options are no longer supported
  - The `environment` and `metadata_host` arguments are now mutually exclusive

- **issensitive() Function**: Now correctly returns unknown results when evaluating unknown values. Code that previously relied on the incorrect behavior may need updates.

- **Testing with Mocks**: Mock values generated during testing now strictly adhere to provider schemas. Test configurations with invalid mock values will need to be corrected.

- **S3 Module Installation**: When installing module packages from Amazon S3 buckets using S3 source addresses OpenTofu will use the same credentials as the AWS CLI and SDK.

- **TLS and SSH Security**:
  - SHA-1 signatures are no longer accepted for TLS or SSH connections
  - SSH certificates must comply with the `draft-miller-ssh-cert-03` specification

For complete details, review the [full changelog](https://github.com/opentofu/opentofu/blob/v1.11.0-beta1/CHANGELOG.md) (link to be added once branch is created).

## Join the Testing Effort

Your testing and feedback are crucial to ensuring that these new capabilities work flawlessly across different environments and use cases. We're especially interested in feedback on:

- **Ephemeral resources**: Does the security model work for your use cases? Are there providers or scenarios where you'd like to see support?
- **The `enabled` meta-argument**: Is this pattern more intuitive than `count`? Are there edge cases we should consider?
- **Encryption features**: Are the experimental external encryption features ready for stabilization?

If you have a **non-production** environment where you could test any of these capabilities, we'd appreciate your help. Even if everything works perfectly, please share your testing experiences through [this GitHub Discussion](https://github.com/orgs/opentofu/discussions/3419) or join the conversation in the [#opentofu channel in the CNCF slack workspace](https://opentofu.org/slack/).

Thank you for your continued support of the OpenTofu project!
