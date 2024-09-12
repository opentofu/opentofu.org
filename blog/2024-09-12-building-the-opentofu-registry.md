---
title: Building the OpenTofu Registry
slug: building-the-opentofu-registry
description: With the Registry Search now in beta it is time to take a technical deep dive into how the OpenTofu Registry and Search work and what it took to build them.
image: /img/blog/building-the-opentofu-registry.png
---

Recently, we published the beta version of the [OpenTofu Registry Search](https://search.opentofu.org), a user interface that lets you search for and view the documentation of providers and modules in the OpenTofu Registry. With this important milestone reached, it is finally time to talk about how the OpenTofu Registry works under the hood and the pitfalls of running a public registry.

## The registry API

OpenTofu and its predecessor Terraform rely on provider binaries created by the community to interact with various APIs. There are currently over 4,000 such providers in the OpenTofu registry, enabling a wide range of integrations from cloud providers to managing your GitHub account. Anything that has an API to create some kind of resource can be integrated with OpenTofu.

Aside from providers, the community has also created over 20,000 reusable modules that implement higher level functionality, such as provisioning an entire infrastructure with a cloud provider with only a few configuration options.

Since these providers and modules are created by the community, OpenTofu needs to know where to download them and what versions are available. This is where the registry comes into play: it holds the information about available providers and modules, download URLs, checksums, and GPG keys for integrity verification.

### Step 1: Service Discovery

For both providers and modules, OpenTofu first requests the `https://registry.opentofu.org/.well-known/terraform.json` file, which has the following content:

```json
{
  "modules.v1": "/v1/modules/",
  "providers.v1": "/v1/providers/"
}
```

This file lists the endpoints OpenTofu should query for information about modules and providers. For private registries there is also a third endpoint named `login.v1`, providing information about an OAuth endpoint to use for authentication. If you are interested in the details, you can read more about this protocol [in the OpenTofu documentation](https://opentofu.org/docs/internals/login-protocol/).

### Step 2: Version listing

With the endpoint information, OpenTofu can query the version listing endpoint for the desired provider or module. For providers this endpoint will be `https://registry.opentofu.org/v1/providers/NAMESPACE/NAME/versions` (e.g. https://registry.opentofu.org/v1/providers/opentofu/random/versions) and for modules it will be `https://registry.opentofu.org/v1/modules/NAMESPACE/NAME/SYSTEM/versions` (e.g. https://registry.opentofu.org/v1/modules/hashicorp/consul/aws/versions).

### Step 3: Download info

Based on the information received, OpenTofu can request the information about the specific version, operating system and architecture. For providers, this URL is located at `https://registry.opentofu.org/v1/providers/NAMESPACE/NAME/VERSION/download/OS/ARCH` (e.g. https://registry.opentofu.org/v1/providers/opentofu/random/2.0.0/download/linux/amd64) and for modules at `https://registry.opentofu.org/v1/modules/NAMESPACE/NAME/SYSTEM/VERSION/download` (e.g. https://registry.opentofu.org/v1/modules/hashicorp/consul/aws/0.11.0/download).

OpenTofu then downloads the provider from the supplied GitHub releases URL and verifies the checksum and signature, or clones the returned Git repository for modules.

## Hosting the registry (for free)

As an open source project with a small core team working on developing OpenTofu itself, it was paramount that we kept the costs of running the registry as low as possible both in terms of bandwidth and also in human cost. However, we also needed to make sure that the registry had an uptime close to 100% since thousands upon thousands of developers would be left without a means to update their infrastructure if it went down.

Here we owe a big thanks to Cloudflare. Their very competitive pricing for [R2](https://www.cloudflare.com/developer-platform/r2/) with no egress fees and their sponsorship of OpenTofu meant that we would be able to run the registry essentially for free with no servers and scaling issues to worry about. The [registry codebase](https://github.com/opentofu/registry) (written in Go) pre-generates all possible answers of the API above and uploads the static files to an R2 bucket.

## Populating the registry

Alongside the Terraform license change, HashiCorp [closed the Terraform registry](https://registry.terraform.io/terms) for software that isn't Terraform, so using it as a source of data for the OpenTofu Registry was out of the question. However, since the Terraform registry was coupled exclusively to GitHub, it was relatively straight forward for us to use the GitHub search API to populate the registry, if a little slow.

Updating the registry, however, was a much harder problem. GitHub limits the API to ~5,000 requests per hour, which is not enough to update roughly 30,000 providers and modules in a speedy fashion, especially since some updates required multiple requests.

We *could* request provider authors to log in with their GitHub account, granting us an access token we could use for a higher rate limit, but that would have been impractical when we launched the registry since we would have had to ask thousands of developers to log in at a time when OpenTofu wasn't even released yet.

The solution came by the way of the GitHub RSS feeds, which are not rate limited. The releases RSS located at `http://github.com/USERNAME/REPO/releases.atom` always contains the last 5 releases, which is sufficient if we only need to add the latest versions as it is unlikely that a provider or module would have more than 5 releases within an hour. For modules, we needed to query the tags instead of the releases, which is even easier because the `git ls-remote` command gives us all this information and is also not rate limited. (You are going to keep it that way, right, GitHub?)

### The submission process

Since we didn't need to ask provider and module authors for their credentials using OAuth, we were able to create a simple submission process that anyone with a GitHub account could use. 

While anyone could submit a provider or a module, we still needed provider authors to submit their GPG keys so their binaries could be verified. Instead of asking for OAuth logins, we again decided to use the GitHub API in a creative way. In order to submit a GPG key for a provider, the author needed to set their organization membership to public for the repository of the provider and then submit a GitHub issue. We would verify their membership in the provider organization and process their GPG key.

Having the submission process being as simple as opening a GitHub issue turned out to be quite popular. To date, the community has opened almost 1,000 pull requests and issues on the registry repository.

## Building a user interface

https://www.youtube.com/watch?v=iJUcOBwPxVU