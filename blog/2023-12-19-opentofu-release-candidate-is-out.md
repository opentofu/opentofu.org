---
title: OpenTofu Release Candidate Is Out, GA Set for Jan 10th
slug: opentofu-release-candidate-is-out
image: /img/blog/opentofu-release-candidate-is-out.png
authors:
  - name: Roni Frantchi
    title: OpenTofu Core Team, Director of R&D at env0
    url: https://github.com/roni-frantchi
    image_url: https://github.com/roni-frantchi.png
---

[OpenTofu v1.6.0-rc1](https://github.com/opentofu/opentofu/releases/tag/v1.6.0-rc1), the final stage before the first stable release, is out today. It follows the quick succession of its [alpha](https://github.com/opentofu/opentofu/releases/tag/v1.6.0-alpha1) and [beta](https://github.com/opentofu/opentofu/releases/tag/v1.6.0-beta1) versions, on the road to an expected General Availability release on January 10, 2024, right after the holidays.

This release includes bug fixes, stability improvements, and updates to documentation. Importantly, this version highlights the stability of our new [public registry](https://github.com/opentofu/opentofu/issues/741), which debuted with the v1.6.0-beta1 release three weeks ago, and has been extensively tested by us and the early adopters from the OpenTofu community.

## From Idea to Release Candidate in 4 Months

The OpenTofu journey has been a whirlwind, spanning from a proposition to a release candidate in just four months.

This is a major milestone for us, but also a bittersweet moment. Looking back on the beginning of our journey, there was hope that HashiCorp [would hear our appeal](https://opentofu.org/manifesto), reverse its decision and restore balance to the ecosystem.

Yet, here we are … and everything that transpired after those initial weeks of surprise, hope, and disappointment can only be characterized as a case study of collaboration. Peers, community, and competitors all united to work together to preserve an open-source option for Infrastructure-as-Code.

To recap, here are the major milestones so far:

![An animated graphic visualizing the history of OpenTofu. August 10, 2023: Terraform shifts to Business Source License. August 15: OpenTF manifesto goes live. August 25: OpenTF is announced. August 31: Manifesto surges to 30k GitHub stars. September 5: OpenTF repo goes public. September 20: OpenTF joins the Linux Foundation as OpenTofu. October 4: Alpha released. November 29: Beta released. December 20: Stable release candidate. January 10, 2024: General availability.](/img/blog/opentofu-release-candidate-is-out-history.svg)

As of December 18th, OpenTofu had surpassed [31,000 downloads](https://tooomm.github.io/github-release-stats/?username=opentofu&repository=opentofu), had 60 committers, and had seen over 1,000 pull requests and issues. The project’s main repository has also amassed over 16,450 GitHub stars on top of the 36,200+ GitHub stars for the [manifesto](https://github.com/opentofu/manifesto).

Now, with that out of the way, let’s talk shop.

## The Registry Challenge

From the moment the [OpenTF fork was announced](https://opentofu.org/blog/the-opentofu-fork-is-now-available/), it was evident that a new public registry would be needed—an open-source substitute for the Terraform one, which is no longer accessible for non-Terraform projects following the [TOS changes](https://www.techtarget.com/searchitoperations/news/366555192/Terraform-Registry-TOS-change-stokes-open-source-ire).

Similar to its predecessor in function, this new registry would have to be a highly available package resolution service for all providers and modules used by OpenTofu. Additionally, it had to meet other specific criteria, including:

- The registry had to be as self-sufficient as possible and require as little maintenance as possible.
- Anticipating increasing demand, it needed to be built for high availability and perform well at scale.
- It should smoothly transition from HashiCorp's registry, following the 'drop-in replacement' approach.
- Whatever we went with, it had to be open-source.

## Brewing Together

[Homebrew](https://brew.sh/) is the de facto standard package manager on macOS – just as [APK](https://docs.alpinelinux.org/user-handbook/0.1a/Working/apk.html) or [RPM](https://en.wikipedia.org/wiki/RPM_Package_Manager) is to Linux or [Chocolatey/Winget](https://chocolatey.org/) is to Windows. Its simple nature, open-source package database at its core, and efficiency for packaging applications inspired something similar that would be ideal for our needs, while its popularity served as evidence of its scalability.

As we were discussing this, Homebrew lead [Mike McQuaid](https://github.com/MikeMcQuaid), who has been working on that project for more than 14 years, took notice of our conversation and joined the fray, contributing helpful insights about the repository structure:

[![A screenshot of Mike McQuaid’s comments, contributing to the discussion about using Homebrew as a model for OpenTofu’s public registry.](/img/blog/opentofu-release-candidate-is-out-mike-mcquaid.png)](https://github.com/opentofu/opentofu/issues/741#issuecomment-1777544250)

For me, this experience highlighted the importance of the Open Source concept and reminded me that without its inherently collaborative nature, engagements like that would be few and far between.

This instinctive and uninhibited camaraderie is what Open Source is all about.

## Implementation

Amongst other things, Mike’s advice for us was to fragment the repo, to improve performance:

> “We went through a ‘sharding’ process recently so that we have formulae/casks in our largest repositories split into subdirectories…The ‘git’ performance is dramatically better in this format.”

Following up on it, we built the registry (https://registry.opentofu.org) as a collection of alphabetized subdirectories broken down by namespace. These were hydrated with information from all providers and modules currently available on GitHub, each with its own JSON file with metadata and other specifics.

Importantly, using static files and hosting them on a Cloudflare R2 public bucket also lets us take full advantage of its CDN capabilities, ensuring performance and high availability with over 94% cache hit rates (on that note, huge THANKS to CloudFlare for sponsoring this project!).

![A screenshot of the Cloudflare dashboard showing 30-day numbers: 7.21k unique visitors, 518k total requests, 92.13% cached, 15 GB total data served and 14 GB data cached.](/img/blog/opentofu-release-candidate-is-out-stats.png)

Outside of our own tests, the four most requested files were:

- `/.well-known/terraform.json`
- `/v1/providers/hashicorp/null/versions`
- `/v1/providers/hashicorp/template/versions`
- `/v1/providers/hashicorp/aws/versions`

With the registry live, we set up a [GitHub Action](https://github.com/opentofu/registry/actions/workflows/bump-versions.yml) to scan for updates to indexed resources. We also introduced an [IssueOps process](https://github.com/opentofu/registry/commit/74bfbcf9435433c70c9f923a36aa9d0b16ec2f5a) for adding new providers. With it in place, new submissions would be auto-processed and auto-validated when they go into the registry, with Issues providing context and transparency.

![A screenshot of the form allowing the addition of a new provider to the OpenTofu registry. The form fields are the provider name and DCO checkbox.](/img/blog/opentofu-release-candidate-is-out-issueops.png)

We’re currently exploring a dedicated UI for package and documentation browsing.

## Next Stop: Jan 10th

With the holidays in full swing, we decided to roll out a release candidate first and schedule the GA for January 10th. Meanwhile, you can already start testing OpenTofu by simply following the [directions provided here](https://opentofu.org/docs/intro/install/). It is a drop-in replacement so Terraform users will feel right at home, which is the whole idea.

If you are interested in contributing to the project, please check out these [contribution guidelines](https://github.com/opentofu/opentofu/blob/main/CONTRIBUTING.md), and don’t forget to join our [Slack community](https://opentofu.org/slack/).

Happy holidays!

### P.S.

While concluding the work on this post, and the upcoming release, we learned that Mitchell Hashimoto, HashiCorp’s legendary co-founder, [announced that he will leave the company](https://www.hashicorp.com/blog/mitchell-reflects-as-he-departs-hashicorp) after 11 years.

Mitchell’s work on projects such as Vagrant, Consul, Vault, and of course Terraform is a source of inspiration for us and many others within the Open Source community.

The entire OpenTofu team extends its heartfelt gratitude to Mitchell for all of his numerous contributions, as we eagerly anticipate learning about the next steps in his already remarkable journey.
