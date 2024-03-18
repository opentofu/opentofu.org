---
title: Help us test OpenTofu 1.7.0-alpha1
slug: help-us-test-opentofu-1-7-0-alpha1
image: /img/blog/help-us-test-opentofu-1-7-0-alpha1.png
---

Hey there, OpenTofu community! Over the last few months we've been hard at work to bring new features, such as the **state encryption** and the **removed block**, as well as compatibility improvements to you. A few days ago we released the first preview version of these improvements as [OpenTofu 1.7.0-alpha1](https://github.com/opentofu/opentofu/releases/tag/v1.7.0-alpha1).

We have done everything we could to make sure that the new alpha release doesn't break anything, and we need your help to get this release tested. If you have a **non-production** setup that you would be willing to test any of the new features on, please give it a try and give us [feedback using this form](https://github.com/opentofu/opentofu/issues/new?assignees=&labels=preview-release-feedback&projects=&template=1_7_0_alpha1_feedback.yml), even if it's just telling us that everything went well.

This blog post will go over how to download the new preview release and detail how each of the new features works.

:::warning

Do not test this release on a production project! It is not a stable release!

:::


## Downloading the alpha release

The alpha release is available exclusively from the [GitHub Releases page](https://github.com/opentofu/opentofu/releases/tag/v1.7.0-alpha1). Please select the appropriate file for your platform. Here are some quick links:

| Platform/Device                                                                 | Download link                                                                                                                                       |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Desktop Windows computer**<br />(64-bit)                                      | [tofu_1.7.0-alpha1_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.7.0-alpha1/tofu_1.7.0-alpha1_windows_amd64.zip)     |
| **MacOS**<br />(Macbook M1 or higher; ARM64)                                    | [tofu_1.7.0-alpha1_darwin_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.7.0-alpha1/tofu_1.7.0-alpha1_darwin_arm64.tar.gz) |
| **MacOS**<br />(Macbook pre-M1 or lower; AMD64)                                 | [tofu_1.7.0-alpha1_darwin_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.7.0-alpha1/tofu_1.7.0-alpha1_darwin_amd64.tar.gz) |
| **Intel/AMD Linux computer or server**<br />(AMD64)                             | [tofu_1.7.0-alpha1_linux_amd64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.7.0-alpha1/tofu_1.7.0-alpha1_linux_amd64.tar.gz)   |
| **ARM-based Linux computer<br />or<br />Raspberry Pi 3 or higher**<br />(ARM64) | [tofu_1.7.0-alpha1_linux_arm64.tar.gz](https://github.com/opentofu/opentofu/releases/download/v1.7.0-alpha1/tofu_1.7.0-alpha1_linux_arm64.tar.gz)   |

For the releases above, please unpack the archive and you should find the `tofu` binary inside. You can also use the [standalone installer](https://opentofu.org/docs/intro/install/standalone/) to download the release with signature verification.

## State encryption

State encryption is one of the flagship features of this release. We have prepared a [full documentation](https://1-7-0-alpha1.opentofu.pages.dev/docs/language/state/encryption/) for this feature.

To test this feature, please make a backup of your state file and then add the following configuration:

```hcl
terraform {
  encryption {
    key_provider "pbkdf2" "my_passphrase" {
      passphrase = "" # Enter a passphrase here
    }

    method "aes_gcm" "my_method" {
      keys = key_provider.pbkdf2.my_passphrase
    }

    state {
      method = method.aes_gcm.my_method
      fallback{} # Remove after the migration is complete.
    }
  }
}
```

You can migrate from an encrypted state file to an unencrypted one like this:

```hcl
terraform {
  encryption {
    key_provider "pbkdf2" "my_passphrase" {
      passphrase = "" # Enter a passphrase here
    }

    method "aes_gcm" "my_method" {
      keys = key_provider.pbkdf2.my_passphrase
    }

    state {
      # Leave this block empty apart from the fallback block.
      fallback{
        method = method.aes_gcm.my_method
      }
    }
  }
}
```

:::note
The OpenTofu core developers would like to thank Stephan Bartels (Interhyp) and Alex Scheel for their extensive work on this feature.
:::

## Removed block

The removed block lets you remove a resource from the state file but keep it on the infrastructure. We have prepared a [full documentation](https://1-7-0-alpha1.opentofu.pages.dev/docs/language/resources/syntax/#removing-resources) for this feature. You can test it by creating a resource first:

```hcl
resource "local_file" "test" {
  content = "Hello world!"
  filename = "test.txt"
}
```

After applying, you can replace the resource with a removed block:

```hcl
removed {
  from = local_file.test
}
```

After the next apply, you will see that the local_file.test resource no longer exists in your state file, but the `test.txt` file should still exist on your disk. You can now remove the `removed` block safely.

## Built-in function changes

This release also contains several new functions and changes to existing functions:

- New function: [templatestring](https://1-7-0-alpha1.opentofu.pages.dev/docs/language/functions/templatestring/)
- New function: [base64gunzip](https://1-7-0-alpha1.opentofu.pages.dev/docs/language/functions/base64gunzip/)
- New function: [cidrcontains](https://1-7-0-alpha1.opentofu.pages.dev/docs/language/functions/cidrcontains/)
- New function: [urldecode](https://1-7-0-alpha1.opentofu.pages.dev/docs/language/functions/urldecode/)
- New function: [issensitive](https://1-7-0-alpha1.opentofu.pages.dev/docs/language/functions/issensitive/)
- [nonsensitive](https://1-7-0-alpha1.opentofu.pages.dev/docs/language/functions/nonsensitive/) no longer returns an error when the applied values are not sensitive.
- [templatefile](https://1-7-0-alpha1.opentofu.pages.dev/docs/language/functions/templatefile/) now supports recursion up to a depth of 1024.

## CLI changes

There are also several changes to the CLI:

- `tofu plan` now has a `-concise` flag to shorten the plan output.
- `tofu console` now works on Solaris and AIX.
- The CLI now supports the XDG directory specification.
- Aliases for `state list` &rarr; `state ls`, `state mv` &rarr; `state move`, `state rm` &rarr; `state remove`.

## Providing feedback

Thank you for taking the time to test this preview release. If you have any feedback, please use [this feedback form](https://github.com/opentofu/opentofu/issues/new?assignees=&labels=preview-release-feedback&projects=&template=1_7_0_alpha1_feedback.yml) or chat with us on the [OpenTofu Slack](https://opentofu.org/slack/).