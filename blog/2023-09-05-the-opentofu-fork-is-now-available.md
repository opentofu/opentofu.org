---
title: The OpenTofu fork is now available!
slug: the-opentofu-fork-is-now-available
image: /img/blog/fork-release.png
---

Four weeks ago, HashiCorp switched Terraform from an open source license to the Business Source License (BSL); three weeks ago, we released the [OpenTofu manifesto](/manifesto), asking HashiCorp to switch back to an open source license; two weeks ago, with no response from HashiCorp, we [created a private fork of Terraform](/blog/opentofu-announces-fork-of-terraform) and said we'd make it public in 1-2 weeks; and today, as promised, we're happy to announce that **the OpenTofu repository is now publicly available at** [github.com/opentofu/opentofu](https://github.com/opentofu/opentofu)!

<!--truncate-->

### Working in the open

Our goal with OpenTofu is to create a project that is truly open source, community-driven, and impartial. To that end, going forward, we'll be developing OpenTofu in the open. We had to do some work on the repo and the OpenTofu foundation in private to get everything ready for public consumption, but now that that's done, and the OpenTofu repo is publicly available, you'll be able to see everything we're working on—and start to participate yourself!

### What OpenTofu currently does and doesn't support

Currently, OpenTofu supports local testing and development: you can build the code, run the tests, build `tofu` binaries, and so on. That means you can now start experimenting with OpenTofu and contributing back via Issues, PRs, and RFCs.

However, a few items are not done yet, and as a result, official OpenTofu releases are _not_ yet available. To understand what's left to do before the releases are available, let's take a look at the roadmap.

### An open roadmap: the path to stable OpenTofu releases

A key part of working in the open is making our roadmap open. So here's a quick snapshot of what we already got done, what's in progress now, and what's coming up in the future, all with the initial goal of getting to the first stable OpenTofu release (for a more detailed and up-to-date look at the roadmap, see the [milestones and issues in the OpenTofu repo](https://github.com/opentofu/opentofu/milestones)).

#### ✅ What we already got done

- **Publish the OpenTofu manifesto**. We published the OpenTofu manifesto at [opentofu.org](/manifesto).
- **Wait on HashiCorp's response**. We reached out to HashiCorp publicly and privately and requested a response by August 25th.
- **Start working on the OpenTofu fork**. With no response from HashiCorp, we created the OpenTofu fork, and started working on it in private.
- **Apply to join the Linux Foundation**. We want OpenTofu to be part of an impartial, community-driven foundation, so we submitted all the paperwork to join the Linux Foundation.
- **Open up community Slack discussions**. We created the [OpenTofu Community Slack](/slack) to give the community a way to have discussions, provide feedback, ask questions, etc.
- **Prepare the OpenTofu repo for collaboration**. Rename everything to OpenTofu; pick steering committee members; define [contribution guidelines](https://github.com/opentofu/opentofu/blob/main/CONTRIBUTING.md); get CI / CD and testing working; etc.
- **Release the OpenTofu repo**. As per this announcement, we are making the OpenTofu repo public at [github.com/opentofu/opentofu](https://github.com/opentofu/opentofu)!

#### 🔄 What's currently in progress

- **Create initial OpenTofu Registry**. HashiCorp recently made some (unannounced) [changes](https://github.com/opentofu/roadmap/issues/24#issuecomment-1699535216) to the terms of the Terraform Registry, saying it may only be used with Terraform. To unblock the alpha release, we are launching an initial OpenTofu Registry. We'll develop the official OpenTofu Registry solution via an official RFC process later.
- **Release process**. Put in place a process for creating OpenTofu releases.
- **Alpha release**. Once the above items are done, we will create the first OpenTofu release. This will be an alpha release, meant for testing by the community.

#### ⏳ What's coming soon

- **Create an official OpenTofu Registry via an RFC process**. Go through an RFC process to create the official OpenTofu Registry solution (replacing the initial solution).
- **Stable release**. Create the first stable OpenTofu release. This is meant for production usage, as a drop in replacement for Terraform, so we'll only do this release after sufficient testing and community feedback.

### Join the OpenTofu community

The response from the community so far has been incredible. In just a few weeks, more than 130 companies and 680 individuals have pledged support to the [OpenTofu manifesto](/manifesto), and the [OpenTofu manifesto repo](https://github.com/opentofu/manifesto) has gotten more than 33,000 stars! By comparison, the Terraform repo took nearly 10 years to reach 38,000 stars:

![OpenTofu has gotten over 33,000 stars in GitHub in just a few weeks](/img/blog/star-history-202395.png)

This sort of growth is unprecedented, and we're humbled by all of your support. As per the roadmap in the previous section, we're working hard on getting OpenTofu to the point where we can start doing official releases.

In the meantime, you can follow our progress at [github.com/opentofu/opentofu](https://github.com/opentofu/opentofu), contribute to the project by following the [contribution guidelines](https://github.com/opentofu/opentofu/blob/main/CONTRIBUTING.md), and provide feedback in the [OpenTofu Community Slack](/slack). We are thrilled to be working with the whole community in making OpenTofu a truly open, community-driven project!

### FAQ

#### Where can I find the OpenTofu repo?

The OpenTofu repo is now available at [github.com/opentofu/opentofu](https://github.com/opentofu/opentofu).

#### Where can I find OpenTofu releases?

Releases are not yet available. See our [open roadmap](#an-open-roadmap-the-path-to-stable-opentofu-releases) for the work remaining.

#### When will a stable OpenTofu release be available?

See our [open roadmap](#an-open-roadmap-the-path-to-stable-opentofu-releases) for the work remaining to get to a stable release. Contributions are very welcome!

#### Why is it taking so long?

It has only been a couple weeks! And there is a lot to do, including technical, legal, process, and other changes. See our [open roadmap](#an-open-roadmap-the-path-to-stable-opentofu-releases) for what we've gotten done already, what's currently in progress, and what's coming up next.

#### Will I be able to use OpenTofu as a drop-in replacement for legacy Terraform?

Yes.

#### Will OpenTofu work with all the providers and modules Terraform works with?

Yes.

#### What will be the first release of OpenTofu?

The first release will be 1.6.0-alpha, forked from the most recent commit that was still MPL-licensed.

#### How can I contribute to OpenTofu?

Please see the [contribution guidelines](https://github.com/opentofu/opentofu/blob/main/CONTRIBUTING.md)!
