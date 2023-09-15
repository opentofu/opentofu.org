---
title: The OpenTF fork is now available!
slug: the-opentf-fork-is-now-available
image_url: /img/blog/opentf.png
---

Four weeks ago, HashiCorp switched Terraform from an open source license to the Business Source License (BSL); three weeks ago, we released the [OpenTF manifesto](https://opentf.org/), asking HashiCorp to switch back to an open source license; two weeks ago, with no response from HashiCorp, we [created a private fork of Terraform](https://opentf.org/announcement) and said we'd make it public in 1-2 weeks; and today, as promised, we're happy to announce that **the OpenTF repository is now publicly available at** [github.com/opentffoundation/opentf](https://github.com/opentffoundation/opentf)!

<!--truncate-->

### Working in the open

Our goal with OpenTF is to create a project that is truly open source, community-driven, and impartial. To that end, going forward, we'll be developing OpenTF in the open. We had to do some work on the repo and the OpenTF foundation in private to get everything ready for public consumption, but now that that's done, and the OpenTF repo is publicly available, you'll be able to see everything we're working on—and start to participate yourself!

### What OpenTF currently does and doesn't support

Currently, OpenTF supports local testing and development: you can build the code, run the tests, build `opentf` binaries, and so on. That means you can now start experimenting with OpenTF and contributing back via Issues, PRs, and RFCs.

However, a few items are not done yet, and as a result, official OpenTF releases are _not_ yet available. To understand what's left to do before the releases are available, let's take a look at the roadmap.

### An open roadmap: the path to stable OpenTF releases

A key part of working in the open is making our roadmap open. So here's a quick snapshot of what we already got done, what's in progress now, and what's coming up in the future, all with the initial goal of getting to the first stable OpenTF release (for a more detailed and up-to-date look at the roadmap, see the [milestones and issues in the OpenTF repo](https://github.com/opentffoundation/opentf/milestones)).

#### ✅ What we already got done

- **Publish the OpenTF manifesto**. We published the OpenTF manifesto at [opentf.org](https://opentf.org/).
- **Wait on HashiCorp's response**. We reached out to HashiCorp publicly and privately and requested a response by August 25th.
- **Start working on the OpenTF fork**. With no response from HashiCorp, we created the OpenTF fork, and started working on it in private.
- **Apply to join the Linux Foundation**. We want OpenTF to be part of an impartial, community-driven foundation, so we submitted all the paperwork to join the Linux Foundation.
- **Open up community Slack discussions**. We created the [OpenTF Community Slack](https://join.slack.com/t/slack-9uv6202/shared_invite/zt-22ifsm1t2-AF6cL0cOdzivP8E~4deDJA) to give the community a way to have discussions, provide feedback, ask questions, etc.
- **Prepare the OpenTF repo for collaboration**. Rename everything to OpenTF; pick steering committee members; define [contribution guidelines](https://github.com/opentffoundation/opentf/blob/main/CONTRIBUTING.md); get CI / CD and testing working; etc.
- **Release the OpenTF repo**. As per this announcement, we are making the OpenTF repo public at [github.com/opentffoundation/opentf](https://github.com/opentffoundation/opentf)!

#### 🔄 What's currently in progress

- **Create initial OpenTF Registry**. HashiCorp recently made some (unannounced) [changes](https://github.com/opentffoundation/roadmap/issues/24#issuecomment-1699535216) to the terms of the Terraform Registry, saying it may only be used with Terraform. To unblock the alpha release, we are launching an initial OpenTF Registry. We'll develop the official OpenTF Registry solution via an official RFC process later.
- **Release process**. Put in place a process for creating OpenTF releases.
- **Alpha release**. Once the above items are done, we will create the first OpenTF release. This will be an alpha release, meant for testing by the community.

#### ⏳ What's coming soon

- **Create an official OpenTF Registry via an RFC process**. Go through an RFC process to create the official OpenTF Registry solution (replacing the initial solution).
- **Stable release**. Create the first stable OpenTF release. This is meant for production usage, as a drop in replacement for Terraform, so we'll only do this release after sufficient testing and community feedback.

### Join the OpenTF community

The response from the community so far has been incredible. In just a few weeks, more than 130 companies and 680 individuals have pledged support to the [OpenTF manifesto](https://opentf.org/), and the [OpenTF manifesto repo](https://github.com/opentffoundation/manifesto) has gotten more than 33,000 stars! By comparison, the Terraform repo took nearly 10 years to reach 38,000 stars:

![OpenTF has gotten over 33,000 stars in GitHub in just a few weeks](/img/blog/star-history-202395.png)

This sort of growth is unprecedented, and we're humbled by all of your support. As per the roadmap in the previous section, we're working hard on getting OpenTF to the point where we can start doing official releases.

In the meantime, you can follow our progress at [github.com/opentffoundation/opentf](https://github.com/opentffoundation/opentf), contribute to the project by following the [contribution guidelines](https://github.com/opentffoundation/opentf/blob/main/CONTRIBUTING.md), and provide feedback in the [OpenTF Community Slack](https://join.slack.com/t/slack-9uv6202/shared_invite/zt-22ifsm1t2-AF6cL0cOdzivP8E~4deDJA). We are thrilled to be working with the whole community in making OpenTF a truly open, community-driven project!

### FAQ

#### Where can I find the OpenTF repo?

The OpenTF repo is now available at [github.com/opentffoundation/opentf](https://github.com/opentffoundation/opentf).

#### Where can I find OpenTF releases?

Releases are not yet available. See our [open roadmap](#an-open-roadmap-the-path-to-stable-opentf-releases) for the work remaining.

#### When will a stable OpenTF release be available?

See our [open roadmap](#an-open-roadmap-the-path-to-stable-opentf-releases) for the work remaining to get to a stable release. Contributions are very welcome!

#### Why is it taking so long?

It has only been a couple weeks! And there is a lot to do, including technical, legal, process, and other changes. See our [open roadmap](#an-open-roadmap-the-path-to-stable-opentf-releases) for what we've gotten done already, what's currently in progress, and what's coming up next.

#### Will I be able to use OpenTF as a drop-in replacement for legacy Terraform?

Yes.

#### Will OpenTF work with all the providers and modules Terraform works with?

Yes.

#### What will be the first release of OpenTF?

The first release will be 1.6.0-alpha, forked from the most recent commit that was still MPL-licensed.

#### How can I contribute to OpenTF?

Please see the [contribution guidelines](https://github.com/opentffoundation/opentf/blob/main/CONTRIBUTING.md)!
