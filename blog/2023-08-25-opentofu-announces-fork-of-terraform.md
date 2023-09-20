---
title: OpenTofu Announces Fork of Terraform
slug: opentofu-announces-fork-of-terraform
image: /img/blog/fork-announcement.png
---

Two weeks ago, HashiCorp announced they are changing the license to all their core products, including Terraform, to the Business Source License (BSL). In an attempt to keep Terraform open source, we published the [OpenTofu manifesto](/manifesto), and the community response was huge! Over 100 companies, 10 projects, and 400 individuals pledged their time and resources to keep Terraform open-source. The [GitHub repository](https://github.com/opentofu/manifesto) for the manifesto already has over 4k stars, and the number is growing quickly!

<!--truncate-->

The manifesto outlined the intent of the OpenTofu initiative in two steps — the first was to appeal to HashiCorp to return Terraform to the community and revert the license change they were making for this project. The second, in case the license was not reverted, was to fork the Terraform project as OpenTofu.

### The time is now!

Since no reversal has been done, and no intent to do one has been communicated, we’re proud to announce that **we have created a fork of Terraform called OpenTofu**. Many engineers across a number of companies, sometimes even competing companies, have been working together over the last week to make this possible. It’s been an incredible experience, really!

As outlined in our manifesto, we are keeping OpenTofu:

- **Truly open source** - under a well-known and widely-accepted license that companies can trust, that won't suddenly change in the future
- **Community-driven** - so that the community governs the project for the community, where pull requests are regularly reviewed and accepted on their merit, and changes are proposed through a public RFC process
- **Impartial** - so that valuable features and fixes are accepted based on their value to the community, regardless of their impact on any particular vendor
- **Layered and modular** - with a programmer-friendly project structure to encourage building on top, enabling a new vibrant ecosystem of tools and integrations
- **Backwards-compatible** - so that the existing code can drive value for years to come

### Becoming part of a foundation

**We completed all documents required for OpenTofu to become part of the Linux Foundation** with the end goal of having **OpenTofu as part of the Cloud Native Computing Foundation**. By making a foundation responsible for the project, we will ensure the tool stays truly open-source and vendor-neutral.

If Terraform wasn’t open-source from the beginning, many of the tools that you are using right now for your Terraform workflows simply wouldn’t exist, thus, we believe the future for Terraform is OpenTofu, developed fully in the open.

### Roadmap

As previously outlined, we’ve been working on this fork for several days already, with over 10 engineers across multiple companies working on it.

**In short, here’s the current status:**

- Almost done with the repository-wide rename to OpenTofu
- Selected initial steering committee members
- Performed initial adjustments and cleanup of community documents.
- Got CI/CD pipelines and multiple testing harnesses of end-to-end and snapshot tests to work and be green, to make sure that we stay backwards-compatible.

**Expect the repository to be published very soon**, once we’re officially part of a foundation and have some basic community guardrails and processes in place.

**You might wonder why we already started work on this project so early?** It’s quite simple, really. If HashiCorp were to reverse their decision, worst case we’d just lose a week of work. But if, and that is what indeed happened, HashiCorp wasn’t to reverse their decision, we didn’t want to lose any time, so that **we could have a working OpenTofu 1.6.0 release ready for you as soon as possible**. And that’s why we started work on this over a week ago.

In the spirit of being as open as possible, **we’ve created a** [public repository tracking our progress towards important milestones](https://github.com/opentofu/roadmap/milestones). You can subscribe to the issues there to be notified as soon as the fork is public. If you have any questions, feel free to create additional issues on that repository - we’ll try to respond as quickly as possible.
