---
title: OpenTofu 1.10 will bring OCI registries and supply chain security features
slug: opentofu-1-10-oci-and-supply-chain-security
description: OpenTofu 1.10 will bring native OCI registry support and supply chain security tools
image: /img/blog/opentofu-1-10-preview.png
---

It's been about a month since our [recent 1.9 release](/blog/2025-01-10-opentofu-1-9-0) and as promised, we have been hard at work getting the most upvoted feature on our list, OCI registries, implemented. This blog post is a very early preview what we are planning for OCI and how you will be able to use it.

As an unexpected but very welcome side effect of OCI, we also ended up exploring how we could enable Software Bill of Materials (SBOM) artifacts in the provider ecosystem, which we will also talk about in this post.

## OCI: why?

Issue number [308](https://github.com/opentofu/opentofu/issues/308), as the number indicates, was one from the early days of OpenTofu. Our then-techlead Kuba Martin (who is still supporting OpenTofu from his position in Spacelift) created a prototype for using OCI registries (also commonly known as Docker registries) as a means to pull provider images instead of using the rather niche Terraform/OpenTofu Provider Registry Protocol. This feature gathered significant interest both on GitHub and on LinkedIn.

However, as it happens, some other features gathered more upvotes. As such, we added [state encryption in 1.7](/blog/2024-04-30-opentofu-1-7-0), [early evaluation in 1.8](/blog/2024-07-29-opentofu-1-8-0) and [provider `for_each` in 1.9](/blog/2025-01-10-opentofu-1-9-0). As OCI now became the highest priority item on our agenda, it was time for us to find out: *Why?*

We had theories about why people would want to use OCI instead of the existing registry protocols, but even within the core team opinions were split. After implementing a few prototypes to determine the feasibility, we decided to ask our community in a survey: why do you want to use OCI and what would you use it for?

Some of the answers that came back we expected, but some were very surprising. In total, 103 people answered our survey. The desire to use OCI for providers and modules was pretty evenly split (90% for modules, 82% for providers) and in both cases most people have indicated that they would prefer to use OCI in a private setting either to publish private providers and modules, or to mirror public providers and modules into a private setting, such as an airgap. Where we were truly surprised was the number of people who indicated that they are running an airgap: 33% of respondents said that they run some level of air-gapped system. In line with this response came our second surprise: 85% of respondents indicated that they would be interested in using a security scanner, such as Trivy, in conjunction with OpenTofu and OCI. A large number of respondents also left comments in the free-form text fields indicating that they already have an OCI registry and being able to use it for OpenTofu would lower the maintenance and compliance burden, and could serve as an awesome caching tool to lower bandwidth costs and CI runtimes. 

When we started this project we set out for this project to be community-driven and in keeping with this goal, we set our first priority to be working with private OCI registries and making sure that the private publishing and mirroring use case is well covered. As a second priority for a future release, we want to enable OCI to be a first-class citizen in the provider and module ecosystem, enabling these artifacts to be published to and consumed from an OCI registry without the involvement of the OpenTofu Registry. You can read the full analysis of our survey [in the OCI RFC](https://github.com/opentofu/opentofu/pull/2163).

## Isn't OCI a *container* image registry?

A question that often comes up when discussing this feature is the suitability of OCI as a means to distribute artifacts that are not container images. After all, a provider or a module isn't a container image and doesn't even look like one. Fortunately, today OCI has already transcended its purpose as a mere container image registry and, thanks to the work of the OCI maintainers, is now a general-purpose artifact storage system. Its use case as a general artifact storage is now [codified into the image spec](https://github.com/opencontainers/image-spec/blob/main/manifest.md#guidelines-for-artifact-usage) and tools making use of it, like [ORAS](https://oras.land) (OCI Registry As Storage), have wide-spread support among popular cloud- and infrastructure providers. Tools like [Helm](https://helm.sh/) use ORAS as a way to store non-container artifacts and this practice is by now well established.

Tying OpenTofu into this already-existing ecosystem presented us with some fortunate opportunities. OpenTofu already has a well-established format for distributing providers and modules: the good old ZIP archive. When you run `tofu init`, OpenTofu contacts the OpenTofu registry and fetches the provider ZIP, recording its SHA256 hash in the `.terraform.lock.hcl` file to guard against tampering. As luck would have it, SHA256 hashes are what identify OCI blobs and manifests too. You can see this when running the following command:

```
$ docker pull ghcr.io/opentofu/opentofu
Using default tag: latest
latest: Pulling from opentofu/opentofu
66a3d608f3fa: Pull complete
7c8581932a32: Pull complete
52e2b5b86328: Pull complete
Digest: sha256:319a00ffec7ffdc5bf90c8edfc9d80aa8e73b893a056e390fcdf97526b0f162c
Status: Downloaded newer image for ghcr.io/opentofu/opentofu:latest
ghcr.io/opentofu/opentofu:latest
```

Having the same hashing format means that you can simply upload the ZIP file to an OCI registry as an artifact and identify it with the same checksum. Because the checksums will be the same, a transition from the OpenTofu Registry to OCI will be seamless, the lock file will remain valid. Even better, OCI has built-in support for multi-platform artifacts, meaning that we can publish multiple provider operating system / architecture combinations under one name the same way we did in the OpenTofu Registry.

For modules, the situation is even simpler as they are not published for multiple platforms. You could simply push a module artifact with a single ORAS command:

```
oras push \
    --artifact-type application/vnd.opentofu.module \
    ghcr.io/yourname/terraform-your-module \
    terraform-your-module.zip:archive/zip
```

## The tricky part: provider addresses are virtual

Sounds too good to be true? Partially, yes. OpenTofu modules already have schemes as part of their address, so creating a module reference like this would be possible:

```hcl
module "foo" {
  source = "oci://ghcr.io/yourname/terraform-your-module"
}
```

However, providers don't have a way to add an `oci://` prefix to their addresses, they are strictly tied to the format of `HOSTNAME/NAMESPACE/TYPE` (e.g. `registry.opentofu.org/hashicorp/aws`), where `HOSTNAME` defaults to `registry.opentofu.org` and `NAMESPACE` defaults to `hashicorp` for historic reasons.

Not all OCI registries have an addressing scheme that clearly fits OpenTofu's provider adresses. Not having a scheme part in the address also means that OpenTofu would somehow need to figure out if the specified hostname is an OCI or an OpenTofu/Terraform registry.

As you can see, there is a lot left to be done. For now, OpenTofu will make use of its [CLI configuration](https://opentofu.org/docs/cli/config/config-file/#provider-installation). In order to use OCI for providers, you will have to create a `.tofurc` file in your home directory with a specific configuration that will tell OpenTofu which hosts are OCI registries and how to map the provider addresses to OCI addresses.

## Supporting security scanners: SBOM

In our survey 85% of respondents indicated that they would be interested in using a security scanner in conjunction with OpenTofu. The most popular security scanner, [Trivy](https://trivy.dev/), supports scanning Go binaries within container images out of the box, reporting known security vulnerabilities in them based on the dependency list automatically. Unfortunately, the same is not true for ZIP artifacts. While we could have chosen a standard container image layout to store providers, it would rob us of the ability to use the same provider hashes and break the lock file during migration. It would also add quite a bit of complexity to the implementation, so ultimately we ended up using the ZIP artifacts in an ORAS-style layout.

Not all is lost, though. The security industry has steadily been moving towards supporting Software Bill of Materials artifacts. These SBOMs allow a software author to publish an artifact containing a list of all dependencies and their versions. Security scanners like Trivy can use these SBOMs to perform the same license and security scans they would by inspecting the binaries. Since OCI supports attaching extra files to their artifacts, security scanners can automatically pick up these artifacts and perform the security scan that way.

So all that's left to do is tie SBOMs into the OpenTofu ecosystem, which is what the [SBOM RFC](https://github.com/opentofu/opentofu/pull/2494) addresses. As a first step, provider authors will be able to integrate an SBOM generator like [Syft](https://github.com/anchore/syft) into their release workflow. The OpenTofu Registry will then pick up the SBOM artifacts and expose them in the registry API.

When mirroring a provider or module to an OCI registry, the mirroring tool will pick up these artifacts and attach them to the OCI artifacts, allowing security scanners to their works.

## Read more

This was a necessarily brief overview of what's coming in 1.10 with OCI and SBOM. If you would like to read more, we created the two RFCs that are meant for you, the OpenTofu-using audience to read. These go into a lot more detail on the usage and implementation of these new features. Please take a look and leave us your comments as GitHub reviews:

- [RFC: Providers and Modules from OCI Registries](https://github.com/opentofu/opentofu/pull/2163)
- [RFC: Strengthening supply chain security: SBOMs and more](https://github.com/opentofu/opentofu/pull/2494)