import React from "react";
import Layout from "@theme/Layout";
import Jumbotron from "../components/Jumbotron";
import TextContent from "../components/TextContent";

export default function Manifesto() {
  return (
    <Layout wrapperClassName="light">
      <Jumbotron>The OpenTF Manifesto</Jumbotron>
      <TextContent>
        <p>
          Terraform was open-sourced in 2014 under the Mozilla Public License
          (v2.0) (the “MPL”). Over the next ~9 years, it built up a community
          that included thousands of users, contributors, customers, certified
          practitioners, vendors, and an ecosystem of open-source modules,
          plugins, libraries, and extensions. Then, on August 10th, 2023, with
          little or no advance notice or chance for much, if not all, of the
          community to have any input, HashiCorp switched the license for
          Terraform from the MPL to the Business Source License (v1.1) (the
          “BUSL”), a non-open source license. In our opinion, this change
          threatens the entire community and ecosystem that's built up around
          Terraform over the last 9 years.
        </p>

        <h3>Our concern: the BUSL license is a poison pill for Terraform.</h3>

        <p>
          Overnight, tens of thousands of businesses, ranging from one-person
          shops to the Fortune 500 woke up to a new reality where the
          underpinnings of their infrastructure suddenly became a potential
          legal risk. The BUSL and the additional use grant written by the
          HashiCorp team are vague. Now, every company, vendor, and developer
          using Terraform has to wonder whether what they are doing could be
          construed as competitive with HashiCorp's offerings.{" "}
          <a href="https://www.hashicorp.com/license-faq" target="_blank">
            The FAQ
          </a>{" "}
          provides some solace for end-customers and systems integrators today,
          but even if you might be in the clear now, how can you build
          confidence that your usage won't violate the license terms in the
          future? What if your products or HashiCorp's products change? What if
          HashiCorp changes how they interpret “competitive”? What if they
          change the license again? As a result, everything that uses Terraform
          is on shaky ground.
        </p>

        <p>
          It is clear that under the new license, the thriving ecosystem built
          around the open-source Terraform will dwindle and wither. As
          developers consider what tools to learn and what ecosystems to
          contribute to, and as companies consider what tools to use to manage
          their infrastructure, more and more, they'll pick alternatives that
          are genuinely open-source. Existing Terraform codebases will turn into
          outdated liabilities, independent tooling will all but disappear, and
          the community will fracture and disappear.
        </p>

        <p>
          This sort of change also harms all similar open-source projects. Every
          company and every developer now needs to think twice before adopting
          and investing in an open-source project in case the creator suddenly
          decides to change the license. Imagine if the creators of Linux or
          Kubernetes suddenly switched to a non-open-source license that only
          permitted non-competitive usage.
        </p>

        <p>
          We believe that the essential building blocks of the modern Internet,
          such as Linux, Kubernetes, and Terraform need to be truly open source:
          that is the only way to ensure that we are building our industry on
          top of solid and predictable underpinnings.
        </p>

        <h3>Our goal: ensure Terraform remains truly open source—always.</h3>

        <p>
          Our aim with this manifesto is to return Terraform to a fully
          open-source license. BUSL is <em>not</em> open source, so this would
          mean moving Terraform back to the MPL license, or some other
          well-known, widely accepted open-source license (e.g., Apache License
          2.0). Moreover, we want to be confident that Terraform will always
          remain open source, so you don't have to worry about another sudden
          license change putting everything at risk.
        </p>

        <h3>
          Our request to HashiCorp: switch Terraform back to an open-source
          license.
        </h3>

        <p>
          We ask HashiCorp to do the right thing by the community: instead of
          going forward with the BUSL license change, switch Terraform back to a
          truly open source license and commit to keeping it that way forever
          going forward. That way, instead of fracturing the community, we end
          up with a single, impartial, reliable home for Terraform where the
          whole community can unite to keep building this amazing ecosystem.
        </p>

        <h3>Our fallback plan: fork Terraform into a foundation.</h3>

        <p>
          If HashiCorp is unwilling to switch Terraform back to an open-source
          license, we propose to fork the legacy MPL-licensed Terraform and
          maintain the fork in the foundation. This is similar to how Linux and
          Kubernetes are managed by foundations (the Linux Foundation and the
          Cloud Native Computing Foundation, respectively), which are run by
          multiple companies, ensuring the tool stays truly open source and
          neutral and not at the whim of any one company.
        </p>

        <p>
          In particular, we want to create a foundation for Terraform that is:
        </p>

        <ul>
          <li>
            Truly open source - under a well-known and widely-accepted license
            that companies can trust, that won't suddenly change in the future
            and isn't subject to the whims of a single vendor
          </li>
          <li>
            Community-driven - so that the community governs the project for the
            community, where pull requests are regularly reviewed and accepted
            on their merit
          </li>
          <li>
            Impartial - so that valuable features and fixes are accepted based
            on their value to the community, regardless of their impact on any
            particular vendor
          </li>
          <li>
            Layered and modular - with a programmer-friendly project structure
            to encourage building on top, enabling a new vibrant ecosystem of
            tools and integrations
          </li>
          <li>
            Backwards-compatible - so that the existing code can drive value for
            years to come
          </li>
        </ul>
      </TextContent>
    </Layout>
  );
}
