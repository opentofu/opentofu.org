---
title: OpenTofu is going GA
slug: opentofu-is-going-ga
image: /img/blog/opentofu-is-going-ga.png
authors:
  - name: Kuba Martin
    title: Interim Technical Lead of OpenTofu, Engineering Manager at Spacelift
    url: https://github.com/cube2222
    image_url: https://github.com/cube2222.png
---

Today is a big day for OpenTofu! After four months of work, we're releasing the [**first stable release of OpenTofu**](https://github.com/opentofu/opentofu/releases/tag/v1.6.0), a community-driven open source fork of Terraform. OpenTofu, a Linux Foundation project, is now production-ready. It’s a drop-in replacement for Terraform, and you can easily migrate to it by following our [migration guide](https://opentofu.org/docs/intro/migration).

Roni Frantchi wrote a [great article](https://opentofu.org/blog/opentofu-release-candidate-is-out) prior to the holidays, describing our road so far and up to the release candidate. It’s an excellent resource to learn more about how we got to where we are now.

I’ll be focusing on the now, and what we are up to in the near future.

## New Features

Starting with the release itself, OpenTofu 1.6.0 comes with a bunch of new stuff:

- The testing feature lets you test your OpenTofu configurations and lets module authors test those modules. It’s a great stability improvement and is now fully integrated with the core of OpenTofu.
- The S3 state backend was updated and includes many new authentication methods. Crucially, it still works with S3-compatible object storage.
- We have a new provider and module registry, which follows a Homebrew-like architecture and is fully based on a git repository. Hosted on CloudFlare R2, it’s snappy and highly-available. Publishing a new provider or module is now just a pull request away!

And many many more! Minor improvements, bug fixes, performance improvements, the changelog is huge! Just [check it out](https://github.com/opentofu/opentofu/blob/v1.6/CHANGELOG.md), if you want all the details!

## The Value of Open Source

OpenTofu would be far from where it is without its community support. The [OpenTofu Slack community](https://opentofu.org/slack) is growing and thriving. We’ve had almost 60 contributors help make OpenTofu great over the past few months.

Open-source is all about collaboration without borders, across the community, to the benefit of all.

Just to name an example, an [RFC for client-side state encryption](https://github.com/opentofu/opentofu/issues/874), a headline feature we wanted to have in OpenTofu, has been submitted by a community member - the same one who was trying to bring it to Terraform for years. Over the span of **multiple months** they worked to polish the PoC and RFC, involving many community members in the discussions. This RFC has recently been accepted and we’re collaborating with the RFC author to get it into OpenTofu 1.7. Thank you!

When we were working on the registry, we had multiple RFCs submitted. We consulted numerous people all over the industry, including authors of previous similar registries like Homebrew, so that we could get the registry right on the first attempt. So far it has indeed been a success - it’s fast to `tofu init`, community members have already successfully submitted providers, and the whole thing is very cheap to run.

As an open-source project, OpenTofu also benefits from sponsorships from many companies and projects. Other than the companies who started the initiative and are supporting OpenTofu with dedicated full-time engineers, we also had Cloudflare support us with hosting the registry, and BuildKite supported us with hosting release artifacts.

This, and all the other discussions, issues, proposals, contributions - you name it - are the value of open-source, and what we believe will set OpenTofu apart long-term.

## What’s Next?

It took us a while to come out with this initial release. There has been a lot of one-time work that needed to be done to get this project set up for success. But that work is now done, and we’re ready to dive right into new development, with big new features ahead!

First, and we know that this is important to many, we’re aiming to maintain a reasonable amount of compatibility with Terraform where it makes sense. We’re not going to be pushing for big DSL changes, we’re not going to be pushing for provider protocol changes, nothing of the sort. We’ll keep the migration path both ways easy for the foreseeable future.

**The biggest change coming soon**, slated for 1.7, is the client-side state encryption. Asked for by many and for a long time now, it will let you encrypt both your state files and plan files end to end. This is valuable to projects working in a regulated environment, and ones going for maximum security. You can find the tracking issue here (todo: link).

Initially, we’ll add support for user-provided keys and a couple of widely-used key management services. Long-term, depending on the usage we see and how the community responds, we might be introducing a plugin system so you can bring arbitrary key management services to it.

[<img src="/img/blog/opentofu-is-going-ga-client-side-state-encryption.png" alt="A screenshot of the client-side state encryption RFC GitHub issue" width="50%"/>](https://github.com/opentofu/opentofu/issues/874)

**Parameterizable backends, providers, and modules** have been a very common community request, e.g. parameterizing module versions using variables, maybe even instantiating providers using for_each parameters on a static list of values. This is something we’re looking into and hope to introduce an answer for eventually.

[<img src="/img/blog/opentofu-is-going-ga-eval-constants.png" alt="A screenshot of the const evaluation RFC GitHub issue" width="100%"/>](https://github.com/opentofu/opentofu/issues/1042)

Other than that, we’ve seen many requests for **adding new state backends** - and that makes sense. After all, OpenTofu is really about the ecosystem it integrates with. However, instead of bringing it all to the core of OpenTofu, we’re looking into introducing a plugin system to state backends, similar to providers. **Third-party extensibility is something we see as a selling feature of OpenTofu**, and we want to continue improving on that.

[<img src="/img/blog/opentofu-is-going-ga-backends-as-plugins.png" alt="A screenshot of the state backend plugins RFC GitHub issue" width="45%"/>](https://github.com/opentofu/opentofu/issues/382)

Those are big improvements, but there are also numerous smaller improvements we’ll be introducing, many of them being suggestions or even full-blown contributions from the community. If there’s something you’re missing in OpenTofu, make sure to [submit an issue](https://github.com/opentofu/opentofu/issues/new/choose), we’d love to hear about it!

## Take it for a spin!

Most crucially, with today’s release, OpenTofu is ready for prime time. In other words, it’s time to install it, and start porting your stuff over!
