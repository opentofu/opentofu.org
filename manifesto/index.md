---
title: The OpenTofu Manifesto
---

Terraform was open-sourced in 2014 under the Mozilla Public License (v2.0) (the “MPL”). Over the next ~9 years, it built up a community that included thousands of users, contributors, customers, certified practitioners, vendors, and an ecosystem of open-source modules, plugins, libraries, and extensions.

Then, on August 10th, 2023, with little or no advance notice or chance for much, if not all, of the community to have any input, HashiCorp switched the license for Terraform from the MPL to the Business Source License (v1.1) (the “BUSL”), a non-open source license. In our opinion, this change threatens the entire community and ecosystem that's built up around Terraform over the last 9 years.

## Our concern: the BUSL license is a poison pill for Terraform.

Overnight, tens of thousands of businesses, ranging from one-person shops to the Fortune 500 woke up to a new reality where the underpinnings of their infrastructure suddenly became a potential legal risk. The BUSL and the additional use grant written by the HashiCorp team are vague. Now, every company, vendor, and developer using Terraform has to wonder whether what they are doing could be construed as competitive with HashiCorp's offerings. [The FAQ](https://www.hashicorp.com/license-faq) provides some solace for end-customers and systems integrators today, but even if you might be in the clear now, how can you build confidence that your usage won't violate the license terms in the future? What if your products or HashiCorp's products change? What if HashiCorp changes how they interpret “competitive”? What if they change the license again? As a result, everything that uses Terraform is on shaky ground.

It is clear that under the new license, the thriving ecosystem built around the open-source Terraform will dwindle and wither. As developers consider what tools to learn and what ecosystems to contribute to, and as companies consider what tools to use to manage their infrastructure, more and more, they'll pick alternatives that are genuinely open-source. Existing Terraform codebases will turn into outdated liabilities, independent tooling will all but disappear, and the community will fracture and disappear.

This sort of change also harms all similar open-source projects. Every company and every developer now needs to think twice before adopting and investing in an open-source project in case the creator suddenly decides to change the license. Imagine if the creators of Linux or Kubernetes suddenly switched to a non-open-source license that only permitted non-competitive usage.

We believe that the essential building blocks of the modern Internet, such as Linux, Kubernetes, and Terraform need to be truly open source: that is the only way to ensure that we are building our industry on top of solid and predictable underpinnings.

## Our goal: ensure Terraform remains truly open source—always.

Our aim with this manifesto is to return Terraform to a fully open-source license. BUSL is _not_ open source, so this would mean moving Terraform back to the MPL license, or some other well-known, widely accepted open-source license (e.g., Apache License 2.0). Moreover, we want to be confident that Terraform will always remain open source, so you don't have to worry about another sudden license change putting everything at risk.

## Why we forked Terraform.

After HashiCorp switched Terraform from an open-source license to a Business Source License (BSL), we asked HashiCorp to switch back to an open-source license to ensure a single, impartial, reliable home for Terraform where the whole community could unite to keep building this amazing ecosystem. With no response from Hashicorp by August 25, we [created a fork of Terraform](https://github.com/opentofu/opentofu), which is now public. You can read more about the fork announcement [here](https://opentofu.org/fork).

## Why the Linux Foundation will maintain the fork.

Forking the legacy MPL-licensed Terraform and maintaining the fork in the Linux Foundation under the name OpenTofu is similar to the way Linux is managed by the Linux Foundation under the stewardship of multiple companies. This ensures the tool stays truly open source and neutral and not at the whim of any one company.

Now that we are part of the Linux Foundation, we can guarantee that OpenTofu will remain:

- **Truly open source** - under a well-known and widely-accepted license that companies can trust, that won't suddenly change in the future, and isn't subject to the whims of a single vendor
- **Community-driven** - so that the community governs the project for the community, where pull requests are regularly reviewed and accepted on their merit
- **Impartial** - so that valuable features and fixes are accepted based on their value to the community, regardless of their impact on any particular vendor
- **Layered and modular** - with a programmer-friendly project structure to encourage building on top, enabling a new vibrant ecosystem of tools and integrations
- **Backwards-compatible** - so that the existing code can drive value for years to come
