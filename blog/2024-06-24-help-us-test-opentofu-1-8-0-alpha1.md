---
title: Help us test OpenTofu 1.8.0-alpha1
slug: help-us-test-opentofu-1-8-0-alpha1
image: /img/blog/help-us-test-opentofu-1-8-0-alpha1.png
---

Hey there, OpenTofu community! Since the last OpenTofu release we've been hard at work bringing you a much-needed improvement to the .tf language: the ability to **use variables in backends, module sources, and the encryption configuration** (*early variable/locals evaluation*). This is currently the [top-voted issue on the OpenTofu GitHub](https://github.com/opentofu/opentofu/issues/1496) and has, in various forms, been requested for years with OpenTofu's predecessor.

Additionally, we are bringing you a feature that lets you use new OpenTofu features while still keeping compatibility with Terraform as well as the ability to override resources and data sources in `tofu test`. The release also includes a host of smaller improvements and bugfixes to various parts of OpenTofu [listed in the changelog](https://github.com/opentofu/opentofu/blob/main/CHANGELOG.md). 

Now we'd like to ask you for help: we have done everything we could to make sure that the new alpha release doesn't break anything, and we need your help to get this release tested. If you have a **non-production** setup that you would be willing to test any of the new features on, please give it a try and give us [feedback using a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose), even if it's just telling us that everything went well.

This blog post will go over how to download the new preview release and detail how each of the new features works.

:::warning

Do not test this release on a production project! It is not a stable release!

:::


## Downloading the alpha release

The alpha release is available exclusively from the [GitHub Releases page](https://github.com/opentofu/opentofu/releases/tag/v1.8.0-alpha1). Please select the appropriate file for your platform. Here are some quick links:

| Platform/Device                                                                 | Download link                                                                                                                                       |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Desktop Windows computer**<br />(64-bit)                                      | [tofu_1.8.0-alpha1_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.8.0-alpha1/tofu_1.8.0-alpha1_windows_amd64.zip)     |
| **MacOS**<br />(Macbook M1 or higher; ARM64)                                    | [tofu_1.8.0-alpha1_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.8.0-alpha1/tofu_1.8.0-alpha1_darwin_arm64.tar.gz) |
| **MacOS**<br />(Macbook pre-M1; AMD64)                                          | [tofu_1.8.0-alpha1_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.8.0-alpha1/tofu_1.8.0-alpha1_darwin_amd64.tar.gz) |
| **Intel/AMD Linux computer or server**<br />(AMD64)                             | [tofu_1.8.0-alpha1_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.8.0-alpha1/tofu_1.8.0-alpha1_linux_amd64.tar.gz)   |
| **ARM-based Linux computer<br />or<br />Raspberry Pi 3 or higher**<br />(ARM64) | [tofu_1.8.0-alpha1_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.8.0-alpha1/tofu_1.8.0-alpha1_linux_arm64.tar.gz)   |

For the releases above, please unpack the archive and you should find the `tofu` binary inside. You can also use the [standalone installer](https://opentofu.org/docs/intro/install/standalone/) to download the release with signature verification.

## Early variable/locals evaluation

This feature lets you use variables and locals for **backends**, **module sources** and **encryption configuration** as long as they are not dependent on resources, data sources or module outputs. This works even if a local is referencing a variable, for example. This is only the first in a series of improvements that will make the .tf code more flexible with more improvements coming in future releases.

The `tofu init` command will now consume your `.tfvars` file and let you specify variables using the `-var` and `-var-file` options. Please note that this alpha release will *not* prompt you for missing variables, which is a feature we will add later. Note, that `tofu init` will fail if it is missing variables needed for static evaluation.

For example, if you wanted to use the same configuration for your S3 backend and your AWS provider, you can now do this:

```hcl
variable "aws_region" {
  default = "us-east-1"
}

terraform {
  backend "s3" {
    region = var.aws_region
  }
}

provider "aws" {
  region = var.aws_region
}
```

You can also use this to manage module versions with both registry references and git URLs.

```hcl
locals {
  aws_module_version = "5.6.1"
}

module "ec2_instance" "webserver" {
  source  = "terraform-aws-modules/ec2-instance/aws"
  version = local.aws_module_version

  // Other ec2_instance options
}

module "ec2_instance" "db" {
  source  = "https://github.com/terraform-aws-modules/terraform-aws-ec2-instance?ref=v${local.aws_module_version}"

  // Other ec2_instance options
}
```

Finally, here's how you can set up encryption with a passphrase using a variable:

```hcl
variable "passphrase" {
  type = string
}

terraform {
  encryption {
    key_provider "pbkdf2" "my_passphrase" {
      passphrase = var.passphrase
    }

    method "aes_gcm" "my_method" {
      keys = key_provider.pbkdf2.my_passphrase
    }

    state {
      method = method.aes_gcm.my_method
    }
  }
}
```

## Override files for OpenTofu: keeping compatibility

Since we are now adding features to OpenTofu that are not present in Terraform, we want to give module authors the ability to write code for both OpenTofu and Terraform without needing to maintain two copies of their modules. You can now create files named `.tofu` that are exclusive to OpenTofu. If you create a file named `foo.tofu`, OpenTofu will ignore the similarly-named `foo.tf` file. You can use this functionality to put your Terraform-specific code in the `.tf` file and then override it for OpenTofu in the `.tofu` file.

## Resource overrides in `tofu test`

This version also brings an improvement for the `tofu test` command. You can now override resources, data sources and entire modules from your tests, allowing you to create similar behavior to mocks in traditional software testing. As an example, consider the following code that spins up an `m6i.2xlarge` instance on AWS:

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
provider "aws" {
  access_key = "foo"
  secret_key = "bar"

  skip_credentials_validation = true
  skip_region_validation      = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# This block disables refreshing the aws_ami.ubuntu data source
# and lets you manually specify the values:
override_data {
  target = data.aws_ami.ubuntu
  values = {
    id = "ami-12345"
  }
}

run "test" {
  # This block disables provisioning the aws_instance.web resource:
  override_resource {
    target = aws_instance.web
    values = {
      # You can add values here.
    }
  }

  assert {
    condition     = aws_instance.web.ami == "ami-12345"
    error_message = "Incorrect AMI ID passed to aws_instance.web: ${aws_instance.web.ami}"
  }
}
```

While this will not fully test the entire provisioning, it will highlight errors that may be caused by incorrectly connecting resources together without the need for an actual AWS account. Similarly, you can use `override_module` to override an entire module.

## Providing feedback

Thank you for taking the time to test this preview release. If you have any feedback, please use [a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose) or chat with us on the [OpenTofu Slack](https://opentofu.org/slack/).

