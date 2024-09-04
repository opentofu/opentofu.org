import React from "react";
import Layout from "@theme/Layout";
import Jumbotron from "../components/Jumbotron";
import Link from "@docusaurus/Link";
import Headline from "../components/Headline";
import TextContent from "../components/TextContent";

export default function FAQ() {
  return (
    <Layout title="Registry">
      <Jumbotron>
        <Headline>OpenTofu Registry</Headline>
      </Jumbotron>
      <TextContent className="mb-4 md:mb-10 mx-auto px-4">
        The OpenTofu Registry contains providers and modules to be used with OpenTofu. In order to view the catalogue of providers / modules, or
        if you’d like to submit new providers / modules, please head to <Link href="https://search.opentofu.org/">https://search.opentofu.org/</Link>.
      </TextContent>
    </Layout>
  );
}
