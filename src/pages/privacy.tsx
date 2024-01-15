import React from "react";
import Layout from "@theme/Layout";
import Jumbotron from "../components/Jumbotron";
import TextContent from "../components/TextContent";
import Headline from "../components/Headline";
import Link from "@docusaurus/Link";

export default function Manifesto() {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy for OpenTofu"
    >
      <Jumbotron>
        <Headline className="max-w-2xl">Privacy Policy</Headline>
        <p>Last updated - January 10, 2024</p>
      </Jumbotron>
      <TextContent className="mb-4 md:mb-10 mx-auto px-4">
        <p>
          Thank you for choosing to be part of the OpenTofu community. OpenTofu is a project managed by the Linux Foundation supported by companies and individuals listed on <Link to={"/supporters"}>https://opentofu.org/supporters</Link> (“<strong>OpenTofu</strong>”, “<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”). Below you can find information about our privacy practices relating to collection, use, disclosure and sharing, or other processing of your personal information when you use opentofu.org and its subdomains, e.g. registry.opentofu.org (“<strong>Website</strong>”). If you have any questions or concerns about our policy, please contact us at core@opentofu.org
        </p>
        <h2>1. Collected Information.</h2>
        <p>
          We automatically collect certain information when you visit, use or navigate the site. This information may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our and other technical information. We only collect and store the minimum amount of data we believe is required to operate and improve the Website. This information is primarily needed to maintain the security and operation of our Website, which is our legitimate interest. We do not and will not sell, rent or trade any of your information with third parties for their promotional purposes. your data or use it for marketing purposes.
        </p>
        <h2>2. Processing and Sharing of Collected Information.</h2>
        <p>
          This collected information is primarily needed to maintain the security and operation of our Website, which is our legitimate business. We do not and will not sell, rent or trade any of your information with third parties for their promotional purposes.
        </p>
        <p>
          We will not share or otherwise disclose your personal information except as necessary to maintain and operate the Website. We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include CloudFlare, Inc. who provides us relevant services and has access to the information collected via the Website.
        </p>
        <h2>3. International Transfer.</h2>
        <p>
          We will store the personal information in the United States and the European Economic Area. If you access the Website from outside, please be aware that your information may be transferred to, stored, and processed in other countries, by us in our facilities and by those third parties with whom we may share your personal information. If you are a resident in the European Economic Area, then these countries may not have data protection or other laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy policy and applicable law.
        </p>
        <h2>4. Security.</h2>
        <p>
          We take all reasonable steps to protect information we receive from you from misuse or unauthorized access, disclosure, alteration, and/or destruction. We have put in place appropriate physical, technical, and administrative measures to safeguard and secure your information.
        </p>
        <h2>5. Privacy Rights.</h2>
        <p>
          Please have in mind that we don’t collect information that reveals your specific identity (name or contact information), so we are unable to associate your identity with the collected data. As a result, we are unable to process requests concerning rights (i) access and obtain a copy of your personal information, (ii) rectification or erasure; (iii) restrict the processing of your personal information; and (iv) if applicable, to data portability.
        </p>
        <h2>6. Retention.</h2>
        <p>
          We will store your personal data only as long as is necessary to make the Website available, pursue legitimate interests, and comply with applicable laws.
        </p>
        <h2>7. Contact Details.</h2>
        <p>
          If you have questions or comments about this policy, you may email us at core@opentofu.org.
        </p>
      </TextContent>
    </Layout>
  );
}
