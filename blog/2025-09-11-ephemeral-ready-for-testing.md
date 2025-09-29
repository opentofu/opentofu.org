---
title: Ephemeral Support in OpenTofu
slug: ephemeral-ready-for-testing
---

We are excited to announce the availability of Ephemeral and Write-Only features in the latest nightly builds of OpenTofu!

This is a [highly requested feature](https://github.com/opentofu/opentofu/issues/1996) that we have been hard at work on for a while now. All the necessary components have now been merged and are available in the nightly builds of OpenTofu and will be available in the upcoming 1.11 release.

:::warning

Do not test this release on a production project! It is not a stable release!

:::

## Downloading the nightly builds

The nightly builds are available exclusively from the [OpenTofu Nightly Repository](https://nightlies.opentofu.org/nightlies/). Please choose the select the appropriate file for your platform.

## Ephemeral Overview

A long-standing issue with OpenTofu and its predecessor has been the storage of sensitive data within the state. Prior to Ephemeral, this data contained everything that OpenTofu knows about the resources it manages. This includes sensitive values, keys, and other secrets that could lead to security incidents if leaked. The introduction of Ephemeral and Write-Only allows for careful configuration to prevent storing this secret data, ensuring that these values only exist within the duration of a single execution of the `tofu` binary. It also allows for transient resources, such as network tunnels, to be made available during specific portions of the OpenTofu Plan/Apply flow.

### Prior Solutions

As many seasoned OpenTofu and Terraform authors know, values and attributes can be marked as [Sensitive](/docs/language/functions/sensitive/) to prevent them from being displayed in the CLI. This helps prevent accidental exposure of secrets through CI/CD logs and other mechanisms. It still however stores the plain text data in the state.

To remedy this, OpenTofu introduced [State and Plan Encryption](/docs/language/state/encryption/). This feature allows you to carefully protect your plan and state data, as well as ensuring that they have not been tampered with in transport. Although the values are still stored within the state and plan, this adds an additional level of security to make it much more difficult for attackers to gain access. It protects the entire state and plan, regardless of how individual resources are configured or marked. Therefore it is still recommended to use state and plan encryption, even after adopting Ephemeral concepts into your workflow.

### Ephemeral Resources

[Ephemeral Resources](/docs/main/language/ephemerality/ephemeral-resources/) are entities that only exist during the execution of a single command. They are opened at the beginning of an OpenTofu operation to get their ephemeral value and closed at the end of the operation. These resources can represent anything from keys in a Key Management System to a SSH proxy that is established when the resource is opened.

The attributes of Ephemeral Resources are marked as `ephemeral` and as such can only be used in [very specific contexts](/docs/main/language/ephemerality/ephemeral-resources/).

### Write-Only Attributes

[Write-Only](/docs/main/language/ephemerality/write-only-attributes/) attributes are a special case that has been added to Managed Resources to allow passing ephemeral data into non-ephemeral resources. These attributes can be set in configuration, but their values will never be stored in state or even available as an attribute to be accessed in other portions of the configuration.

This is geared toward sending ephemeral data, such as passwords and keys, into resources which use and/or manage this data outside of OpenTofu.


### Further Reading

This blog post barely scratches the surface of what is now possible with Ephemeral and Write-Only.  Peruse our latest docs for a more [complete overview and in-depth examples](/docs/main/language/ephemerality/)!

## Providing feedback

Thank you for taking the time to test this preview release. If you have any feedback, please use [a GitHub issue](https://github.com/opentofu/opentofu/issues/new/choose) or chat with us on the [OpenTofu Slack](https://opentofu.org/slack/).
