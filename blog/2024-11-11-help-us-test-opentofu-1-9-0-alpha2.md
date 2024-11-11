---
title: Help us test OpenTofu 1.9.0-alpha2
slug: help-us-test-opentofu-1-8-0-alpha2
image: /img/blog/help-us-test-opentofu-1-8-0-alpha2.png
---

Hello everyone! As we have taken on one of the most difficult tasks since the inception of OpenTofu, it's been a while since we last released a feature version. Today, we are very proud to ask for your help in testing OpenTofu 1.9.0-alpha2, coming with a much-requested feature: provider iteration using `for_each`.

We have done everything we could to make sure that the new alpha release doesn't break anything, and we need your help to get this release tested. If you have a **non-production** setup that you would be willing to test any of the new features on, please give it a try and give us [feedback using a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose), even if it's just telling us that everything went well.

This blog post will go over how to download the new preview release and detail how each of the new features works.

:::warning

Do not test this release on a production project! It is not a stable release!

:::

## Downloading the alpha release

The alpha release is available exclusively from the [GitHub Releases page](https://github.com/opentofu/opentofu/releases/tag/v1.9.0-alpha2). Please select the appropriate file for your platform. Here are some quick links:

| Platform/Device                                                                 | Download link                                                                                                                                       |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Desktop Windows computer**<br />(64-bit)                                      | [tofu_1.9.0-alpha2_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.9.0-alpha2/tofu_1.9.0-alpha2_windows_amd64.zip)     |
| **MacOS**<br />(Macbook M1 or higher; ARM64)                                    | [tofu_1.9.0-alpha2_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.9.0-alpha2/tofu_1.9.0-alpha2_darwin_arm64.tar.gz) |
| **MacOS**<br />(Macbook pre-M1; AMD64)                                          | [tofu_1.9.0-alpha2_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.9.0-alpha2/tofu_1.9.0-alpha2_darwin_amd64.tar.gz) |
| **Intel/AMD Linux computer or server**<br />(AMD64)                             | [tofu_1.9.0-alpha2_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.9.0-alpha2/tofu_1.9.0-alpha2_linux_amd64.tar.gz)   |
| **ARM-based Linux computer<br />or<br />Raspberry Pi 3 or higher**<br />(ARM64) | [tofu_1.9.0-alpha2_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.9.0-alpha2/tofu_1.9.0-alpha2_linux_arm64.tar.gz)   |

For the releases above, please unpack the archive and you should find the `tofu` binary inside. You can also use the [standalone installer](https://opentofu.org/docs/intro/install/standalone/) to download the release with signature verification.

## Provider `for_each`

Imagine you have to deploy an infrastructure that involves multiple availability zones using your cloud provider. In order to minimize code duplication, you created a module that you can use for each availability zone. However, your main module still looks like this:

```hcl2
provider "aws" {
  alias  = "useast"
  region = "us-east-1"
}

provider "aws" {
  alias  = "uswest"
  region = "us-west-1"
}

module "deploy-useast" {
  source    = "./deploy"
  providers = {
    aws = aws.useast
  }
}

module "deploy-uswest" {
  source    = "./deploy"
  providers = {
    aws = aws.uswest
  }
}
```

Starting OpenTofu 1.9, you can now use a `for_each` instead:

```hcl2
variable "azs" {
  type = set(string)
}

provider "aws" {
  alias    = "somealias"
  region   = each.value
  for_each = var.azs
}

module "deploy" {
  source    = "./deploy"
  providers = {
    aws = aws.somealias[each.key]
  }
  for_each = var.azs
}
```

As you can see, you can pass in the set of regions using a variable and then call the module as many times as you need it.

However, there are some important considerations to remember when using `for_each` in this manner:

1. If you have an already-deployed infrastructure, don't simply remove a provider from the list as this will make it impossible for OpenTofu to destroy the infrastructure in this region. Instead, you will need to implement removing that infrastructure first and then remove the provider from the list.
2. Currently, each provider used in a `for_each` **must** have an alias. Providers without aliases are not supported for now due to internal technical reasons.
3. There is currently no way to pass a set of providers to a module, you can only pass individual providers.

We are actively working on resolving these limitations and future OpenTofu versions will see this capability improved.

## Exclude on plan and apply

This flag is small but powerful: similar to `-target`, you can now tell OpenTofu to ignore a certain resource when applying your configuration.

For example:

```hcl2
tofu plan -exclude=kubernetes_manifest.crds
```

In this case, OpenTofu will ignore `kubernetes_manifest.crds` during planning.

## Providing feedback

Thank you for taking the time to test this preview release. If you have any feedback, please use [a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose) or chat with us on the [OpenTofu Slack](https://opentofu.org/slack/).
