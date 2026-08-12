---
title: OpenTofu v1.13.0-beta1 is now available
slug: help-us-test-opentofu-1-13-0-beta1
---

# OpenTofu 1.13.0-beta1 is Now Available

We've now published the first beta release of OpenTofu v1.13.0.

We intentionally shortened the development period for v1.13.0 so that we're now more closely aligned with [the Go release cycle](https://go.dev/wiki/Go-Release-Cycle), which means that we maximize the length of time this series can remain under security support: this series will be supported until August 2027.

That means that this is a relatively light release in terms of new features, but there's still some interesting new functionality to be tested during the prerelease period.

:::warning
Do not use OpenTofu prereleases in production environments!
:::

## Download and Installation

Download the appropriate package for your platform:

| Platform              | Release Package                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS (Apple Silicon) | [tofu_1.13.0-beta1_darwin_arm64.zip](https://github.com/opentofu/opentofu/releases/download/v1.13.0-beta1/tofu_1.13.0-beta1_darwin_arm64.zip)       |
| Linux (AMD64)         | [tofu_1.13.0-beta1_linux_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.13.0-beta1/tofu_1.13.0-beta1_linux_amd64.zip)         |
| Linux (ARM64)         | [tofu_1.13.0-beta1_linux_arm64.zip](https://github.com/opentofu/opentofu/releases/download/v1.13.0-beta1/tofu_1.13.0-beta1_linux_arm64.zip)         |
| Windows (AMD64)       | [tofu_1.13.0-beta1_windows_amd64.zip](https://github.com/opentofu/opentofu/releases/download/v1.13.0-beta1/tofu_1.13.0-beta1_windows_amd64.zip)     |
| Windows (ARM64)       | [tofu_1.13.0-beta1_windows_arm64.zip](https://github.com/opentofu/opentofu/releases/download/v1.13.0-beta1/tofu_1.13.0-beta1_windows_arm64.zip)     |

We also provide packages for some other platforms on a best-effort basis. For more information, refer to [the full set of release packages](https://github.com/opentofu/opentofu/releases/tag/v1.13.0-beta1).

After downloading, extract the archive to find the `tofu` executable.

## What's New in OpenTofu 1.13

The following sections describe some highlights of this release. For the full set of changes in this release, refer to [the OpenTofu v1.13 changelog](https://github.com/opentofu/opentofu/blob/v1.13/CHANGELOG.md).

### Initial built-in linting support

A large set of community members asked for OpenTofu to incorporate linting as a built-in feature, instead of relying on third party tools like `tflint`.

That is a very large project of similar complexity to OpenTofu's primary functionality and so we can't complete it during a single release period, but v1.13 introduces some internal models and mechanisms for linting along with a small number of built-in linting rules related to OpenTofu language faetures.

The initial form of the linting behavior is implemented as a command line option to `tofu plan` and `tofu apply`, which tells OpenTofu that you'd like it to return additional warnings for lint rules that the configuration is violating. The most straightforward way to use it is to enable _all_ lint rules, like this:

```
tofu apply -lint=all
```

This initial release supports only a small number of lint rules related to OpenTofu's own language, which all belong to the `core:` namespace. Instead of enabling all of the lint rules at once, you can specify a list of specific lint rules or groups of lint rules to enable:

```
tofu apply -lint=core:confusing
tofu apply -lint=core:no-type-variable,core:count-instead-enabled
```

We understand that most folks who requested built-in linting support were interested primarily in externally-implemented linting rules rather than built-in ones. In future releases we intend to allow extending the ruleset with rules using different prefixes, but for this release our focus was just on the basic plumbing to make OpenTofu aware of linting at all. We are also considering alternative ways to specify which lint rules you'd like to activate, such as placing them in a configuration file rather than having to specify them directly on the command line for every run. This initial work is focused mainly on extending OpenTofu to be able to support linting _at all_, but this is far from the end of work on this feature.

### Windows on ARM64 is now an officially-supported platform

We will now provide pre-built packages for Windows on ARM64. Observant readers may have already noticed the new link to a beta1 package for that platform in the table above!

Please note that provider plugins for OpenTofu are also distributed as native executables for different platforms, and provider developers decide independently which platforms they intend to support and so not all versions of all available providers are available for this platform. The newest releases for the main providers that are built and published by the OpenTofu project have support for the `windows_arm64` platform, but you may find you need to upgrade to a newer provider version in order to use OpenTofu on this new platform.

### Experimental "Symbol Libraries" feature

For a long time authors have been yearning for ways to define reusable functions and type aliases to reduce repetition between different modules. Some authors resorted to writing modules that declare only input variables, local values, and output values as a way to factor out some shared logic, and that does work but the result is inconvenient to use since OpenTofu's module call syntax was not really designed with that use in mind.

We're currently considering adding a new concept called "symbol libraries", which can be distributed and installed in all the same ways as modules but which consist of reusable functions, types, and values instead of reusable resource declarations. This feature is not yet ready for production use in OpenTofu v1.13, but we're including an early experimental version of it in the hope that folks will try it and share feedback about how well it works for their specific use-cases.

This is too large a feature to briefly summarize here in this blog post, but you can learn more about it in the separate post [Symbol Libraries Experiment](./2026-08-19-symbol-libraries-experiment.md).

## Join the Testing Effort

Your testing and feedback are crucial to ensuring that these new capabilities work correctly across different environments and use cases.

If you have a **non-production** environment where you could test any of the new features or bugfixes then we'd appreciate your help. Even if everything works as you expected, please [share your testing experiences](https://github.com/orgs/opentofu/discussions/4461) or join the conversation in [#opentofu in the CNCF Slack workspace](https://opentofu.org/slack/).

Thank you for supporting the OpenTofu project!
