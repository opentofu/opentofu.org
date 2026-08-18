---
title: "A Vision for Built-in Linting"
slug: plans-for-linting
description: OpenTofu v1.13 began our exploration of linting as a built-in feature.
---

Since early in the life of the OpenTofu project various community members have asked for built-in linting support. Although we always liked the idea of that in principle, we were concerned that the full scope of what people seem to mean by "linting" is a pretty large project of similar size to OpenTofu's core functionality, including support for user-defined lint rules, linting plugins, etc.

At this point [the feature request for linting](https://github.com/opentofu/opentofu/issues/2213) is the most highly-voted issue in our GitHub repository, and so during the v1.13 development period we began investigating what it might look like to integrate linting as a built-in part of the OpenTofu workflow. Of course, that then required us to figure out exactly what functionality that implies, which was more interesting a question than it might first appear!

We're still early in our research and design for these features, but in this article we want to share what we've learned so far and how we're expecting to approach this problem in future releases.

## The scope of "linting"

The term "linting" originates from a specific piece of software, literally called "Lint", that was written at Bell Labs to perform static analysis on C source code. This tool would detect and report various situations that are not technically incorrect but are nonetheless likely to cause portability problems or make the code harder to understand by future maintainers.

Today, "linter" tends to describe a wider variety of tools. Some are focused purely on checking for or applying superficial style rules such as which characters are used for indentation and which variable names are allowed. Others perform more detailed static analysis to detect problems such as unreachable code or common mistakes in a specific programming language, but with a fixed ruleset decided by the developers of the tool. In the most general case, the word "linter" instead describes a generic harness for implementing and executing an arbitrary set of separately-developed checks, possibly including checks that are relevant only to a single organization or codebase.

Across all of these the most typical situation is that the "linter" is something separate from the "compiler" or "interpreter", focused only on source-code-based static analysis. A typical linter does not actually execute the program that it's being applied to, and so it cannot react to any dynamic values produced by the program at runtime.

OpenTofu's execution model is unusual in that its "plan" phase already acts as a sort of middle-ground between analysis and execution: it evaluates all of the expressions in the configuration as far as possible while asking providers to predict what they would do with that input, threading the results from one provider to another in an attempt to detect potential problems _before_ making any changes. In that sense OpenTofu's planning phase is already acting in a "linter-like" fashion but using dynamic analysis rather than static analysis.

Lots of organizations have built on this by introducing additional automated checks based on the results from OpenTofu's planning phase. For example, some use [Open Policy Agent](https://www.openpolicyagent.org/) as a general-purpose policy enforcement tool based on a JSON representation of the OpenTofu plan, and others use [Infracost](https://www.infracost.io/) to try to predict the difference in monthly cost that a certain set of changes are likely to cause.

Some teams using OpenTofu's predecessor separately use [`tflint`](https://github.com/terraform-linters/tflint) for static analysis before even running the planning phase. The name of this software suggests that it's focused on linting based on source code, but it works by embedding large parts of Terraform's runtime engine inside it and so even there the distinction between "linting" and "planning" is blurry.

Based on all of this, we've come to believe that pre-plan linting and post-plan policy checks are two parts of the same problem. Instead of defining separate rules for each, OpenTofu could re-check the same set of rules at each phase as more information becomes available.

The OpenTofu project therefore intends to take quite a broad view of what "linting" means: instead of being an entirely separate step run before the main OpenTofu workflow, we'd like to allow operators to provide a single set of rules that get repeatedly checked throughout the OpenTofu workflow: while validating, while planning, and while applying. During each workflow phase, each of the defined checks can either be passing, failing, or have an unknown status that'll be decided in a later phase.

## Custom Lint Rules and Linting Plugins

You can get quite far with simple declarative rules evaluated in terms of data already known to OpenTofu. Being able to write those rules in a similar language as OpenTofu modules themselves means that authors can reuse their existing knowledge and can avoid having to install additional interpreters or other tools to use alongside OpenTofu.

However, some checks inevitably require access to external data or to calculations that are too complicated to write ergonomically in a simple configuration language. It's important to offer an "escape hatch" allowing rules to be implemented using general-purpose programming languages.

The good news that OpenTofu already has an existing model for calling into code written in general-purpose languages: provider plugins! We're still evaluating how best to make use of provider plugins as part of defining rulesets. One initial possibility is to allow policy configurations to include `data` and `ephemeral` blocks with the same meaning they have in OpenTofu modules. For example, a rule could make use of the results from [`http`](https://search.opentofu.org/provider/hashicorp/http/latest/docs/datasources/http) in the `hashicorp/http` provider, or [`aws_iam_principal_policy_simulation`](https://search.opentofu.org/provider/hashicorp/aws/latest/docs/datasources/iam_principal_policy_simulation) in the `hashicorp/aws` provider.

One way to think about custom lint and policy rules is as a set of additional [postconditions](https://opentofu.org/docs/language/expressions/custom-conditions/#preconditions-and-postconditions) defined in a central place outside of the main configuration. Instead of being associated with individual resources, they'd instead be applied systematically to all resource instances meeting certain criteria. Each rule could be configured either as blocking (raising an error) or non-blocking (raising a warning). They'd otherwise be similar to [the various check-related language features](https://opentofu.org/docs/language/expressions/custom-conditions/) you may already be familar with. We plan to design the specifics of this ruleset language in a future RFC, after collecting more use-cases.

## Built-in Linting Rules

We understand that much of the community interest in this feature is about defining custom rulesets, but we'd also like to include an evolving set of built-in rules related to OpenTofu's own language features. This is the more traditional definition of "linting", and is an opportunity for OpenTofu to draw attention to usage patterns that are technically valid but nonetheless potentially confusing or harmful, such as:

- Redundant references in `depends_on` arguments: those with experience in other dependency-graph-based software sometimes misunderstand `depends_on` as mandatory for declaring all dependencies, or assume it has a stronger meaning than just referring to the same object naturally in a resource configuration.
- Using `count` instead of `enabled` for conditional resource instances: those coming from OpenTofu's predecessor may not realize that OpenTofu has explicit support for boolean enablement, and so declarations like `count = var.cond ? 1 : 0` are unnecessary unless you expect that you might want to switch to having two ore more instances of the same resource in future.
- Applying the `[*]` operator to a non-list or non-set value: that usage is allowed as a way to transform a single value that might be null into a tuple of zero or one elements, but there are various situations where that's unlikely to be what the author intended to do, and we'd like to be able to draw attention to those without creating mandatory warning noise even for those who are relying on that behavior intentionally.

OpenTofu v1.13.0 includes some early support for checking a small set of built-in rules, activated by using the experimental `-lint=...` command line option with either `tofu validate`, `tofu plan`, or `tofu apply`:

```shell
tofu plan -lint=all
```

In the long term we're expecting to have a configuration-file-based approach to configuring linting instead of trying to pack the whole configuration into a command line option, but we've started here just as a way to get some of the internal plumbing in place and begin exposing built-in linting rules to gather feedback about how useful and effective they are. Instead of `all` you can optionally specify a comma-separated list of specific rules to activate.

The initial set of built-in rules is small but we intend to grow this in later releases:

| Rule ID | Description |
|--|--|
| `core:no-type-variable` | Detects any input variable that doesn't have a `type` argument in its declaration. |
| `core:count-instead-enabled` | Detects situations where `count` is used in a situation where `enabled` could be used instead. |
| `core:unused-variable` | Detects any input variables that are declared but not used in any expression. |
| `core:unused-local` | Detects any local values that are declared but not used in any expression. |

You can learn more about these initial experimental features in [Linting](https://opentofu.org/docs/v1.13/language/linting/). If you try this during the OpenTofu v1.13 series, please [tell us about your experience](https://github.com/orgs/opentofu/discussions/4525)!

## Reusable Rulesets

Although some policy rules are inherently specific to a single organization or even a single configuration, there are certain kinds of policy we've seen defined over and over in different forms across many different organizations' pre-merge linting and post-plan policy rules. For example:

- Detecting firewall rules that allow full access from the public internet.
- Detecting access policies that permit unauthenticated access.
- Detecting objects that are missing tags required by a specific global tagging scheme.

We'd like to allow defining rulesets such that they can be shared in a similar way to how OpenTofu modules are shared. This implies being able to install them from remote sources, and being able to parameterize them with input variables to customize their behavior. It also requires some way for the maintainers of a reusable ruleset to easily test it as they make changes over time, without having to rely on "real" OpenTofu configurations.

## We'd Appreciate Your Feedback

So far we've been thinking broadly about the overall problems of pre-merge linting and post-plan policy checks and coming up with some early ideas for how OpenTofu might approach this family of problems in a coherent, holistic way.

Now we need to get more specific. If you're already using either pre-merge linting or post-plan policy checks in your workflow then we'd love to hear more about what specific rules you have in place and what sorts of problems you intend each of those rules to prevent. We'd like these new "linting" features to be able to absorb as many of those use-cases as possible.

We'd also be interested in any specific ideas you have about rules that could potentially be collected into reusable rulesets, for situations that are common across many organizations where it would be helpful to have a robust single implementation that can be maintained collectively for the whole OpenTofu community to benefit.

If you'd be willing to discuss your potential usage, or if you have any general feedback about the overall vision we've discussed in this article, please start a thread in [our Linting Feedback discussion](https://github.com/orgs/opentofu/discussions/4525)!
