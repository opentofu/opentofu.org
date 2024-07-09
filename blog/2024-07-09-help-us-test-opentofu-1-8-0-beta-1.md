---
title: Help us test OpenTofu 1.8.0-beta1
slug: help-us-test-opentofu-1-8-0-beta1
image: /img/blog/help-us-test-opentofu-1-8-0-alpha1.png
---

Hey there, OpenTofu community! We've been working hard to refine the [1.8.0-alpha1](/blog/help-us-test-opentofu-1-8-0-alpha1/) with your feedback! A few rough edges have been polished and a few new features have been added.

If you have a **non-production** setup that you would be willing to test any of the new features on, please give it a try and give us [feedback using a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose), even if it's just telling us that everything went well.

This blog post will go over how to download the new preview release and expand on the features presented in the [1.8.0-alpha1 blog post](/blog/help-us-test-opentofu-1-8-0-alpha1/).

:::warning

Do not test this release on a production project! It is not a stable release!

:::


## Downloading the beta release

The beta release is available exclusively from the [GitHub Releases page](https://github.com/opentofu/opentofu/releases/tag/v1.8.0-beta1). Please select the appropriate file for your platform. Here are some quick links:

| Platform/Device                                                                 | Download link                                                                                                                                       |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Desktop Windows computer**<br />(64-bit)                                      | [tofu_1.8.0-beta1_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.8.0-beta1/tofu_1.8.0-beta1_windows_amd64.zip)     |
| **MacOS**<br />(Macbook M1 or higher; ARM64)                                    | [tofu_1.8.0-beta1_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.8.0-beta1/tofu_1.8.0-beta1_darwin_arm64.tar.gz) |
| **MacOS**<br />(Macbook pre-M1; AMD64)                                          | [tofu_1.8.0-beta1_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.8.0-beta1/tofu_1.8.0-beta1_darwin_amd64.tar.gz) |
| **Intel/AMD Linux computer or server**<br />(AMD64)                             | [tofu_1.8.0-beta1_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.8.0-beta1/tofu_1.8.0-beta1_linux_amd64.tar.gz)   |
| **ARM-based Linux computer<br />or<br />Raspberry Pi 3 or higher**<br />(ARM64) | [tofu_1.8.0-beta1_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.8.0-beta1/tofu_1.8.0-beta1_linux_arm64.tar.gz)   |

For the releases above, please unpack the archive and you should find the `tofu` binary inside. You can also use the [standalone installer](https://opentofu.org/docs/intro/install/standalone/) to download the release with signature verification.


## Static Variable Planing
Static variables are now handled correctly when embedded in plan files. This was [reported as a bug](https://github.com/opentofu/opentofu/issues/1768) found in 1.8.0-alpha1.
```bash
tofu plan -out=tofu.tfstate -var="param=value"
# Variables are correctly read from the given plan and should not be specified via CLI
tofu show tofu.tfstate
tofu apply tofu.tfstate
```

## Provider mocking in `tofu test`
Building on the existing ability to override specific data sources, resources, and module calls, `tofu test` now supports mocking entire provider definitions. This new feature allows you to automatically generate mock values for resources and data sources on a per-provider basis. As an example, consider the following code that spins up an m6i.2xlarge instance on AWS:
```hcl
provider "aws" {
    region = "us-east-1"
}

data "aws_ami" "ubuntu" {
    most_recent = true
    filter {
      name   = "name"
      values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-24.04-amd64-server-*"]
    }
    owners = ["099720109477"]
}

resource "aws_instance" "web" {
    ami           = data.aws_ami.ubuntu.id
    instance_type = "m6i.2xlarge"
}
```

Instead of querying the AMI ID and spinning up the instance, we can write test code as follows:
```hcl
// This block will prevent OpenTofu from configuring aws provider.
// All provider's resources and data sources will be mocked.
mock_provider "aws" {
  mock_data "aws_ami" {
    defaults = {
      id = "ami-12345"
    }
  }
}

run "test" {
  assert {
    condition     = aws_instance.web.ami == "ami-12345"
    error_message = "Incorrect AMI ID passed to aws_instance.web: ${aws_instance.web.ami}"
  }
}
```

While this will not fully test the entire provisioning, it will highlight errors that may be caused by incorrectly connecting resources together without the need for an actual AWS account.


## Improved provider error messages
Also included in the beta is [improvements in error messages produced by misconfigured providers](https://github.com/opentofu/opentofu/issues/1484). Some defaulted providers which require configuration blocks were able to generate error messages like:
```
╷
│ Error: Insufficient features blocks
│ 
│   on <empty> line 0:
│   (source code not available)
│ 
│ At least 1 "features" blocks are required.
╵
```
This error message will now include information about which provider is encountering the specific missing-block validation issue to help the user track it down.


## Providing feedback

Thank you for taking the time to test this preview release. If you have any feedback, please use [a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose) or chat with us on the [OpenTofu Slack](https://opentofu.org/slack/).

