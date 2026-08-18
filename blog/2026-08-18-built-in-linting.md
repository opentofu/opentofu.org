---
title: "Experimenting with Built-in Linting"
slug: built-in-linting
description: OpenTofu v1.13 begins our exploration of linting as a built-in feature.
---

Since early in the life of the OpenTofu project a number of community members have asked for OpenTofu to support linting as a built-in feature. Although we always liked the idea of that in principle, we were concerned that the full scope of what people seem to mean by "linting" is a huge project of similar scope to OpenTofu's core functionality, including support for user-defined lint rules, linting plugins, etc.

However, at this point [the feature request for linting](https://github.com/opentofu/opentofu/issues/2213) is the most highly-voted issue in our GitHub repository, and so during the v1.13 development period we've begun investigating what it might look like to integrate linting as a built-in part of the OpenTofu workflow. This article describes what we've investigated so far, and what directions we're planning to explore next.

## Core-only Rules in OpenTofu v1.13

OpenTofu v1.13 includes some early experimental support for linting with a small set of built-in rules, activated by using the `-lint=...` option with either the `tofu validate`, `tofu plan`, or `tofu apply` command:

```shell
tofu plan -lint=all
```

We've integrated linting into the existing commands rather than adding a separate `tofu lint` command for a few different reasons:

1. A separate linting implementation would need to do almost all of the same work that `tofu validate` does anyway: loading configuration, gathering provider schemas, evaluating expressions in a suitable order, etc.

    It also doesn't make sense to perform linting on a configuration that's invalid, so a separate lint command would've ended up being a superset of `tofu validate` anyway.

2. The OpenTofu execution model involves "unknown values" which act as placeholders for information that can't be determined until a later phase. Just as the normal `tofu validate` fails to report certain problems because they involve information not known until plan or apply, this is also true for any linting rule that relies on the results of expression evaluation instead of just on static syntax.

    By activating linting in all three phases, OpenTofu will make a best effort to check as much as possible during validation in your pre-merge checks but then potentially return additional warnings once more known values are available in the plan and apply phases, extending OpenTofu's existing model of returning warnings as errors in the earliest phase possible.

3. The boundary between "linting" and "policy" has always been quite fuzzy, with different teams enforcing the same rules in different ways and sometimes even describing essentially the same rules _twice_ so that they can be checked both during linting and after planning.

    By integrating these features directly into the plan and apply workflow we hope that in the long run it'll be possible to use the same rulesets for both pre-merge linting _and_ for post-plan policy checks, instead of the operator needing to decide ahead of time what counts as a pre-merge lint failure and what counts as a post-plan policy failure.

Each linting rule has an associated rule identifier. The initial implementation includes only a small set of built-in rules whose identifiers all have the prefix `core:`, including:

| Rule ID | Description |
|--|--|
| `core:no-type-variable` | Detects any input variable that doesn't have a `type` argument in its declaration. |
| `core:count-instead-enabled` | Detects situations where `count` is used in a situation where `enabled` could be used instead. |
| `core:unused-variable` | Detects any input variables that are declared but not used in any expression. |
| `core:unused-local` | Detects any local values that are declared but not used in any expression. |

You can specify specific lint rule ids as a comma-separated list in the `-lint=...` option, instead of using `-all`. The rules also belong to groups that you can enable or disable together, such as `core:confusing` for usage patterns that are likely to be confusing to future readers of the module. Use the `!` prefix to exclude specific rules or rule groups. For example, to enable all except the `core:unused-variable` rule:

```shell
tofu plan -lint=all,!core:unused-variable
```

Enabling linting using a command line option is just our initial approach prioritizing ease of testing while this remains experimental. In later phases we expect to support configuration of linting in configuration files, especially once it becomes possible to define custom rules.

If you try this feature out during the v1.13 series, please let us know about your experience in **(TODO: Link to GitHub discussion here)**.

## Future: Custom Lint Rules

Built-in rules can only get us so far. Organizations also want to write their own rules that are tailored to how _they in particular_ use OpenTofu, regardless of what anyone else is doing with it.

Ideally we'd like to offer a lightweight configuration-based solution similar to our existing precondition, postcondition, and validation features so that folks can write and distribute linting rules without depending on another general-purpose programming language, though of course the feasibility of that depends on exactly what sorts of rules organizations would like to enforce using this mechanism.

We'd also like to support reusable libraries of linting rules that can be used across all configurations in an organization, or even published as open source projects for many organizations to use. This implies needing some mechanism for automatically testing libraries of lint rules so that maintainers can reduce the risk of accidental regressions under maintenence.

We're still very early in our research and design efforts for this, and if you're interested in linting or policy checks then we'd love to hear from you about exactly what rules you'd like to enforce, and whether/how you are already enforcing those with third-party solutions either as a pre-merge lint check or as a post-plan policy check. If you have some use-cases to share, please post them in **(TODO: Link to GitHub discussion here)**.

## Future: Provider-defined Lint Rules

A middle-ground between built-in rules and custom rules is predefined rules that are implemented as part of a provider plugin. If a provider development team is aware of a common mistake that users of the provider make that has significant consequences for uptime or security, it would be ideal for a provider to have built-in support for detecting that potential problem and reporting it as part of the linting result instead of each user of the provider having to discover that potential pitfall separately.

This particular capability is the hardest for us to implement right now because OpenTofu exclusively uses the Terraform provider protocol for interacting with plugins, and that protocol is not designed with third-party extensions in mind. This joins the growing set of possible justifications for introducing a new OpenTofu-specific provider protocol alongside our support for Terraform's, but we're not planning to pursue that for the moment.

If you are a provider developer that has some ideas for potential uses of provider-defined linting rules and an interest in implementing them in our your provider, please let us know in **(TODO: Link to GitHub discussion here)**.
