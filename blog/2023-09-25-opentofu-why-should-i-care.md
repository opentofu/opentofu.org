---
title: Why should I care about OpenTofu?
slug: why-should-i-care-about-opentofu
image: /img/blog/tofu-insurance.png
authors:
  - name: Marcin Wyszynski
    title: OpenTofu steering committee member, CPO at Spacelift
    url: https://github.com/marcinwyszynski
    image_url: https://github.com/marcinwyszynski.png
---

TL;DR having options is good strategy, OpenTofu is your insurance policy and competition makes things great.

<!--truncate-->

Over the last few weeks we received overwhelming support from people all over the world. We have also received criticism for the decisions we've been making. We are very happy to see that people care about the project so deeply that they are willing to share their feelings with us. Please keep doing that!

There's been one particular line of criticism that questions the very premise of our project, and that's the one I'd like to address in this post. It's the line of criticism that goes like this: "The license change does not affect me, so why should I care?".

It is not my intention at this point to convince you that the license change affects you now or will affect you in the future. Maybe it does, maybe it doesn't. Maybe it will, maybe it won't. I don't know, you don't know, and only the future will tell. What I will argue though is that the very existence of this project positively affects you, and that's why you should care.

## Si vis pacem, para bellum or why having options is good

During my Google days, I worked for a few years as an SRE on tape storage. We operated a significant number of large LTO libraries in many data centers across the world. The best available solution at the time came from Oracle, hands down. Their hardware was great, their software was best in class, their support was always helpful and competent. And yet we would still go to great lengths to support a much, much smaller vendor who offered at least a resemblance of an alternative.

In similar vein we used multiple vendors for each and every hardware and software component we depended on. This was a crucial step in de-risking our supply chain. This was a pragmatic thing to do on many levels - it protected us from technical failures and changing business strategies, gave us a better position in negotiations, and fostered healthy competition among suppliers we depended on.

When the news of the HashiCorp license change broke out, some folks were quick to dismiss Terraform entirely and declare their vocal support for alternatives like Pulumi. And don't get me wrong, Pulumi is a great technology, and I support them with all my heart. In fact, Spacelift was the first vendor to offer an integration with Pulumi, way before they built their Cloud offering.

And while using Pulumi for any new projects is surely a viable alternative, you probably still have thousands upon thousands of lines of Terraform that currently drive the value of your business. Rewriting all of it in Pulumi (or Crossplane, or Winglang - all great products BTW) may be lots of fun for the team but the practical utility of that for your business is limited.

In similar vein, tapes were never the only offline storage option for Google. We could have used optical (like [Meta did](https://www.pcworld.com/article/443619/facebook-puts-10000-bluray-discs-in-lowpower-storage-system.html)), or slow spinning drives like what we thought Glacier did. But each of these solutions would require building new capabilities in terms of software, human expertise and processes. All of that was an order of magnitude more expensive and disruptive than just supporting multiple vendors' tape libraries.

OpenTofu promises to be compatible with legacy Terraform, promises better governance and better features than the current commercial offering. But even taking all that aside, you should still support OpenTofu (or some other viable fork if one appears) if you care about your existing investment in the Terraform ecosystem. Because having options is always better than not having options. It's a smart, mature, pragmatic approach.

## Competition is good

After our acceptance to the Linux Foundation another line of criticism appeared - that somehow OpenTofu is a "fuck capitalism" project. This could not be farther away from the truth. It's a project supported by a number of companies who often compete with HashiCorp for at least part of their business. Most of us took VC funding at one point or another, we all run sales teams, we all generate revenue and yes, we fiercely compete with one another. While obviously challenging for us, this competition is great for our customers because it keeps us on our toes, makes us innovate all the time, grows the market, drives the prices down and the quality up.

Even if you are a happy user of commercial HashiCorp products, you might want to give some credit to folks at competing companies who collectively came up with ideas and improvements in technology, process and pricing. Some of these found their way back to Terraform Cloud / Enterprise and vastly improved the user experience. If you - like me - had a chance to use TFC/TFE before the dawn of TACOs (some time around 2020) then you've probably noticed the amazing progress they've made in terms of functionality, product design and overall stability. And I'm happy to take credit for at least some of that.

The license change that prompted our response now introduced the same element of competition to the CLI layer where HashiCorp previously enjoyed its uncontested status as an obviously privileged (primus inter pares) but otherwise benevolent guardian of the ecosystem.

The outcome of this is easy to predict for anyone familiar with the basics of the market economy. At the very minimum, the incentive to further tighten the license restrictions is greatly diminished or even entirely removed. In a more optimistic scenario, the legacy product will improve, the support quality will improve, there will be quicker bug fixes, quicker PR reviews and new exciting features will flow from both sides. Suddenly the commercial vendor has a new reason to care, and we're hoping to see an increased level of effort, leading to value add for the entire community. And hopefully for HashiCorp, too, uncomfortable as it may be in the beginning. Fast forward a year or two, I will be happy to take credit for at least some of that.

And this is why you _should_ care. Regardless of your position (or the lack thereof) on the BSL drama. Regardless of your sympathy for HashiCorp or Spacelift. Regardless of whether you stay or migrate. And regardless of whether you like tofu or not.
