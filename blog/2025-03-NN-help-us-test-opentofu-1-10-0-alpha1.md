---
title: Help us test OpenTofu 1.10.0-alpha1
slug: help-us-test-opentofu-1.10.0-alpha1
image: /img/blog/help-us-test-opentofu-1.10.0-alpha1.png
---

Hello everyone! TODO Here's our quick summary of what changed and a call to test! 

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

## OCI Registry Mirror


## S3 Backend Locking


## Providing feedback

Thank you for taking the time to test this preview release. If you have any feedback, please use [a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose) or chat with us on the [OpenTofu Slack](https://opentofu.org/slack/).
