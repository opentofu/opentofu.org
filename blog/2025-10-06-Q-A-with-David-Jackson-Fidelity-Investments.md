---
title: Fidelity Investments Shares Its Migration Story from Terraform to OpenTofu
slug: fidelity-investment-migration
authors:
  - name: James Humphries
    title: Maintainer @ OpenTofu /  Head Of OpenSource @ Spacelift
    socials:
      email: jamesh@spacelift.io
  - name: David Jackson
    title: Vice President, Cloud Automation and Tooling @ Fidelity Investments
tags:
  - migration
---

_Author: James Humphries, OpenTofu Maintainer and Technical Steering Committee Member_

One of the most common questions I get — whether on forums, in Slack, or at events — is: “How are large enterprises actually using OpenTofu?” At a recent OpenTofu Day, we had a concrete, candid answer.

David Jackson, VP of Cloud Automation and Tooling at Fidelity Investments, took the stage to share how one of the world’s largest financial services companies navigated a full-scale migration from Terraform to OpenTofu. [The session](https://www.youtube.com/watch?v=2FQQOIEgZmU&list=PLj6h78yzYM2P1WUOx9Ny6Q3JJxiAs1A3M&index=10) sparked instant interest for its transparency, practicality, and relevance to real-world teams managing complex infrastructure.

I followed up with David to explore his OpenTofu experience in greater detail. If you're exploring OpenTofu for your organization, I hope you will find this conversation essential reading.

**Q: David, let’s start with scale. How big is the footprint of Terraform and OpenTofu at Fidelity today?**

**A:** It’s big. We’ve got over 2,000 applications using Terraform or OpenTofu, managing more than 50,000 state files and north of four million individual cloud resources. On any given day, we’re seeing upwards of 4,000 state file updates. That kind of volume shapes everything—how we evaluate tools, how we design pipelines, how we think about governance. When we started looking at OpenTofu, we knew we weren’t talking about a few isolated teams. This was going to impact hundreds, if not thousands, of engineers.

**Q: What triggered the move from Terraform to OpenTofu?**

**A:** Fidelity has been doubling down on open source for years, and when the licensing changes around Terraform came through, it prompted a broader conversation internally. We looked at OpenTofu and saw a project that was committed to open governance and community contribution. That was important to us. We don’t just consume open source—we contribute to it. OpenTofu aligns with our values and our platform engineering strategy. We also felt it was a technical drop-in, and that made it viable.

**Q: What were the first steps in actually making that shift?**

**A:** We started with a POC, obviously. You’ve got to prove to yourself that OpenTofu is truly a drop-in. And not just in terms of provisioning a resource or two. We pushed all the way through to production. We picked one of our own internal IaC platform applications and ran the entire pipeline—CI/CD, artifact storage, governance, everything—just as we would for any production deployment. That gave us confidence.

**Q: You mentioned during the talk that you didn’t stop at proving it worked—you socialized it internally. Can you say more about that?**

**A:** Socialization was key. In a company our size, nothing moves without consensus. We talked with the right governance groups—our DevOps council, the platform engineering guild, and other decision-making bodies. We laid out the pros and cons. We were honest. And we asked for input early. That helped build trust. Once we had alignment, we moved into enablement: building support tools, documentation, FAQs, internal support channels. We tested everything again with the lighthouse project and made it available for wider adoption.

**Q: How did you go from a few early adopters to 70% adoption before making the CLI switch?**

**A:** A few things worked really well for us. First, we targeted the biggest users of Terraform—teams with hundreds of state files and thousands of resources. We got them on board early, worked side-by-side on migrations, and once they saw success, that sent a strong signal to the rest of the organization. We also tracked adoption closely and shared that data transparently. It gave people confidence. No one wants to be the first to jump—but once they see momentum, they don’t want to be last either.

**Q: Did you run into any real resistance along the way?**

**A:** Honestly, not much. That surprised us a bit. There were some questions around compatibility and support, of course. But because we had done the homework and proved everything in production early on, we had answers ready. Also, we did an internal branding push. We packaged our tooling under a code name—Bento—and branded the migration effort that way. It gave it an identity and made it easier to talk about in internal forums.

**Q: What role did shared infrastructure or tooling play in the migration?**

**A:** A huge one. We’ve got a centralized catalog of reusable modules—hosted in Backstage—with maturity ratings and usage stats. Teams can see what’s battle-tested. That saves a ton of time and prevents drift. We also have shared CI/CD pipelines that we manage centrally. That meant when we updated those pipelines to use the OpenTofu CLI, every project using them automatically migrated. It’s a force multiplier. We’re really trying to make it easy for teams to do the right thing.

**Q: Now that OpenTofu is the default, what’s next?**

**A:** We’ve flipped the default, yes. All new deployments use OpenTofu unless teams explicitly opt out. That’s allowed us to consolidate usage. Now we’re starting to deprecate the older Terraform versions. We have governance checks in place during deployments, so we can enforce that gradually. Eventually, we’ll have a single-track system using just OpenTofu. That’s cleaner for support and security.

**Q: Looking back, what are your top lessons learned?**

**A:** One, the code itself isn’t the hard part. Changing the CLI in a pipeline is trivial. The complexity lives in the surrounding ecosystem—versioning, CI/CD, governance, artifact management. That’s where you need maturity. Two, if you’ve got shared pipelines and modules, you’re going to have a smoother path. And three, data matters. If you can track adoption and share that data internally, it builds trust and drives momentum. That’s how we got the bulk of the org moved over before the cutover date.

**Q: Anything you’d say to orgs still hesitating about OpenTofu?**

**A:** I’d say don’t overthink it. Do a real POC, push it to prod, and see for yourself. OpenTofu really is a drop-in. But also, don’t just flip the switch. Build support. Talk to people. Make it feel like a team effort. That’s how you get adoption that sticks.

---

At the scale Fidelity operates, migrations like this don’t happen without intention. What stands out most in David’s approach is not just the technical execution, but the trust-building, the clear-eyed assessment of what really matters, and the willingness to go deep with both tooling and teams. For those navigating similar decisions, it’s a reminder that success often comes less from the tooling itself and more from the way it’s introduced, supported, and led.
