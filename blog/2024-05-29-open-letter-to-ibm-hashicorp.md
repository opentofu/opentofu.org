---
title: "An Open Letter to IBM on the Future of Open Source"
slug: open-letter-to-ibm-hashicorp
description: Will Terraform and OpenTofu remain separate projects, or is now the time to bring the two projects back together into a single, open-source, foundation-managed project?
image: /img/blog/open-letter.png
---

Dear IBM,

As you work to close your acquisition of HashiCorp, this feels like a good time to (a) offer our congratulations to all
of our friends at IBM and HashiCorp and (b) start to think about the future. In particular, we’d like to discuss the
future of Terraform, OpenTofu, and more generally, open source. The goal of this letter is to ask: will Terraform and
OpenTofu remain separate projects, or is now the time to bring the two projects back together into a single,
open-source, foundation-managed project?

## How we got here

Terraform was open sourced in 2014 under the well-known & permissive Mozilla Public License v2.0 (MPL). Over the next
~9 years, it became the leading infrastructure as code (IaC) tool, with a massive community of users, contributors,
module authors, partners, tools, and vendors. Arguably, it was on its way to becoming the lingua franca of
infrastructure.

Then, in August, 2023, HashiCorp switched Terraform and many of its other open source tools (Vault, Consul, Nomad,
etc.) to the non-open source Business Source License v1.1 (BUSL). We believe the BUSL is a poison pill for
infrastructure tools such as Terraform, as we wrote in our [manifesto](https://opentofu.org/manifesto/). Suddenly,
instead of a well-known and trusted open source license, your ability to use Terraform depends on whether you are
creating a “competitive offering” to HashiCorp, somewhat as defined by an [FAQ](https://www.hashicorp.com/license-faq)
which has already changed a half dozen times, but mostly as decided by HashiCorp on a case-by-case basis.

Every CTO picking an IaC tool, every legal team reviewing licenses their dev teams use, and every developer considering
contributing to open source now has to pause and consider if they really want to deal with the uncertainty of the BUSL.
The result: adoption will slow, contributions will decrease, vendor support will disappear, and the community and
ecosystem will dwindle and wither. Already, Terraform support has been removed, deprecated, or frozen in
[AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/update_terraform_open_source_to_external.html),
[Google Cloud Infrastructure Manager](https://cloud.google.com/infrastructure-manager/docs/terraform),
[Oracle Cloud](https://www.thestack.technology/oracle-dumps-terraform-for-opentofu/),
[GitLab’s CI/CD templates](https://docs.gitlab.com/ee/update/deprecations.html#deprecate-terraform-cicd-templates),
[HomeBrew](https://github.com/Homebrew/homebrew-core/pull/168090),
[VMware Cloud Service Broker](https://docs.vmware.com/en/Tanzu-Cloud-Service-Broker-for-GCP/1.5/csb-gcp/GUID-release-notes.html),
[CNCF projects](https://twitter.com/coryodaniel/status/1691936511917236684), and many other places. Instead of
becoming the lingua franca of infrastructure, Terraform is at risk of becoming a niche product.

This is why, in September, 2023, we created a fork of MPL Terraform called [OpenTofu](https://opentofu.org/). We
believe that the essential building blocks of the modern Internet—tools such as Linux, Kubernetes, and Terraform—must
be truly open source. That is the only way to ensure that we are building our industry on top of solid and predictable
underpinnings. And this is also why [OpenTofu joined the Linux
Foundation](https://www.linuxfoundation.org/press/announcing-opentofu). The only way to ensure this tool stays truly
open source, community-driven, and not at the whim of any one company is to put it under the stewardship of a
non-profit foundation that provides a neutral, proven governance model for managing a project across many companies.

And perhaps this is also why, in December, 2023, [engineers at IBM created a fork of MPL Vault called
OpenBao](https://thenewstack.io/meet-openbao-an-open-source-fork-of-hashicorp-vault/). The [project’s mission statement
states](https://lists.lfedge.org/g/openbao/topic/feedback_requested_mission/102590341), “The OpenBao community intends
to provide this software under an OSI-approved open-source license, led by a community run under open governance
principles.”

## Where we go from here

So that brings us to today. The recent announcement of the HashiCorp acquisition brings up lots of questions:

1. What are your plans for Terraform?
2. Do you plan on sticking with BUSL?
3. If you are sticking with BUSL, what happens to the definition of a “competitive offering?” When the acquisition
   closes, will any offering that competes with IBM (rather than HashiCorp) be in violation of the BUSL?

Since we heard about the acquisition, we’ve been asking ourselves these questions. These are questions every user and
potential user of HashiCorp products should be asking.

And in this letter, we’d like to propose an answer for IBM to consider when the deal closes:

**We ask IBM to switch Terraform back to the MPL 2.0 license, put it under the control of a foundation (such as the
Linux Foundation), and work with us to merge it with OpenTofu.**

We believe that this would have huge benefits for everyone involved.

Benefits for IBM:

- Continue your track record as a supporter of open source (as you’ve demonstrated with the Red Hat acquisition).
- Make it easier for companies, including many of your potential customers, to pick Terraform without the fear that the
  license may be swapped out from under them again or that they might be sued due to vague non-compete clauses.
- Instead of competing against the open source community (Terraform vs OpenTofu), you’d again be able to work with the
  community, resulting in a better Terraform for everyone.

Benefits for the community:

- Rely on a project with a single, unified community, rather than trying to navigate a forked community.
- Use a project that has a governance model that ensures the needs of the community are prioritized, rather than those
  of any one company.
- Be confident that your open source contributions won’t suddenly be re-licensed to primarily benefit a single company.
- No need for third party tools, module developers, or vendors to choose between supporting Terraform or OpenTofu.

A forked community makes both Terraform and OpenTofu weaker. **A single, joint, open-source, foundation-managed
initiative will result in a better Terraform—and that’s better for everyone.**

To state it clearly, and get it on the record, we would be happy to merge OpenTofu and Terraform into a single project
under the Linux Foundation, and welcome IBM and HashiCorp to the steering committee. We’d continue to have the core
OpenTofu developers working on the project, so the burden of maintaining the project would be shared across IBM and
the wider community. Our goal has never been about forking, but about creating a truly open source, community-driven
IaC tool. We created the fork, and will continue working on it, so long as the only other option is a non-open source
Terraform; however, a single, joint, open source project is the best option of all.

We hope this is the option you pick, seizing this amazing opportunity to do right by the open source community, your
current customers, and all future customers, too. It’s an opportunity to put Terraform back on the road to becoming the
lingua franca of infrastructure. We, along with the whole community, await your response.

Signed,

The OpenTofu steering committee
