---
title: Help us test OpenTofu 1.10.0-beta1
slug: help-us-test-opentofu-1-10-0-beta1
image: /img/blog/opentofu-1-7-0-beta1.png
---

Hey there, OpenTofu community! We're excited to announce that we've reached the beta release stage for OpenTofu 1.10.0! Thanks to all your valuable feedback on our alpha releases, we've been able to refine these features and fix several bugs to bring you this more stable beta version.

If you have a **non-production** environment where you could test any of these new capabilities, we'd appreciate your help. Even if everything works perfectly (which we hope it does!), your [feedback via GitHub issues](https://github.com/opentofu/opentofu/issues/new/choose) is extremely valuable as we work toward the final release.

This blog post focuses primarily on what's new and improved since the [1.10.0-alpha2 release](/blog/help-us-test-opentofu-1-10-0-alpha2/). **If you haven't seen our alpha2 announcement yet, we recommend checking it out first** to learn about the major new features in OpenTofu 1.10.0, including OCI Registry integration, native S3 locking, OpenTelemetry tracing, and more.

:::warning

Do not test this release on a production project! It is not a stable release!

:::

## Downloading the beta release

The beta release is available exclusively from the [GitHub Releases page](https://github.com/opentofu/opentofu/releases/tag/v1.10.0-beta1). Please select the appropriate file for your platform. Here are some quick links:

| Platform/Device                                                                 | Download link                                                                                                                                       |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop Windows computer**<br />(64-bit)                                      | [tofu_1.10.0-beta1_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_windows_amd64.zip)     |
| **MacOS**<br />(Macbook M1 or higher; ARM64)                                    | [tofu_1.10.0-beta1_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_darwin_arm64.tar.gz) |
| **MacOS**<br />(Macbook pre-M1; AMD64)                                          | [tofu_1.10.0-beta1_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_darwin_amd64.tar.gz) |
| **Intel/AMD Linux computer or server**<br />(AMD64)                             | [tofu_1.10.0-beta1_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_linux_amd64.tar.gz)   |
| **ARM-based Linux computer<br />or<br />Raspberry Pi 3 or higher**<br />(ARM64) | [tofu_1.10.0-beta1_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.10.0-beta1/tofu_1.10.0-beta1_linux_arm64.tar.gz)   |

After downloading one of the releases above, unpack the archive to find your `tofu` binary. For those who prefer verified downloads, you can also use the [standalone installer](https://opentofu.org/docs/intro/install/standalone/) with signature verification.

## OCI Registry Enhancements

One of the major features of OpenTofu 1.10.0 is comprehensive OCI registry support for both provider and module distribution. Since alpha2, we've refined this support with several important improvements:

- Added support for OCI registries that don't report `artifactType` on layers
- Improved e2e test verification for provider installation from OCI mirrors
- Enhanced documentation for OCI registry-based provider mirrors
- Fixed issues with OCI providers in air-gapped environments

If you're using OCI registries for private provider distribution or in air-gapped environments, we'd especially appreciate your testing of these new features.

## Global Provider Cache Lock Improvements

The shared provider cache (set via the `TF_PLUGIN_CACHE_DIR` environment variable) now includes filesystem-level locking, making it safe to use with concurrent OpenTofu operations. This is particularly valuable for:

- CI/CD systems that run multiple `tofu init` operations in parallel
- Orchestration tools that manage multiple OpenTofu pipelines simultaneously
- Large-scale Terragrunt setups with many projects

Since the alpha releases, we've fixed several edge cases and improved the reliability of this locking mechanism.

## Security Enhancements

We've implemented several important security improvements for this beta release:

- Updated to Go 1.22.11 to address CVE-2024-45336 and CVE-2024-45341
- Fixed a potential information leak in the `base64gunzip` function when handling sensitive values
- Added security advisory policy for upstream dependencies
- Improved handling of encryption key providers for better `terraform_remote_state` support

## Bug Fixes and Quality-of-Life Improvements

The beta release includes numerous bug fixes and quality-of-life improvements:

- Better error messages when using `null` in invalid positions in the `transpose` function
- Fixed loading of encryption key providers to better support `terraform_remote_state`
- Fixed handling of complex variable default values with incorrect types
- Fixed module downloads from GitHub branches containing slashes in the name
- Improved generation of OpenTofu configuration from `import` blocks with nested attributes
- Added warning when provider references are missing `required_providers` entries
- Fixed an issue where syntax errors in `required_providers` blocks could cause panics
- Improved the PostgreSQL backend to prevent state corruption with parallel runs

## `-exclude-file` and `-target-file` Resource Management

New in this release is the ability to maintain lists of resources to target or exclude in separate files, making it easier to share consistent patterns across your team:

```bash
# Target specific resources listed in targets.txt
tofu plan -target-file=targets.txt

# Exclude specific resources listed in excludes.txt
tofu apply -exclude-file=excludes.txt
```

## Before You Upgrade

As with any significant release, there are some key compatibility points to consider:

- On Linux, OpenTofu now requires kernel version 3.2 or later
- On macOS, OpenTofu now requires macOS 11 Big Sur or later
- The `ghcr.io/opentofu/opentofu` image is no longer supported as a base image
- On Windows, symbolic links and junctions are now handled differently
- The PostgreSQL backend in OpenTofu 1.10 should not be used alongside older versions

For complete details, please review the [full changelog](https://github.com/opentofu/opentofu/blob/main/CHANGELOG.md).

## Join the Testing Effort

OpenTofu 1.10.0 is on track to be our most feature-rich release yet. Your testing and feedback are crucial to ensuring that all these new capabilities work flawlessly across different environments and use cases.

Share your testing experiences through [GitHub issues](https://github.com/opentofu/opentofu/issues/new/choose) or join the conversation in the [OpenTofu Slack](https://opentofu.org/slack/). Every piece of feedback helps us create a more stable and reliable final release.

Thank you for your continued support of the OpenTofu project!
