import React from "react";
import Layout from "@theme/Layout";
import Jumbotron from "../Jumbotron";
import TextContent from "../TextContent";
import Headline from "../Headline";
import type { Props } from "@theme/MDXPage";
import MDXContent from "@theme/MDXContent";

export default function Manifesto(props: Props) {
  const { content: MDXPageContent } = props;
  const {
    metadata: { frontMatter },
  } = MDXPageContent;

  return (
    <Layout
      title="Manifesto"
      description="Terraform was open-sourced in 2014 under the Mozilla Public License
    (v2.0) (the “MPL”). Over the next ~9 years, it built up a community
    that included thousands of users, contributors, customers, certified
    practitioners, vendors, and an ecosystem of open-source modules,
    plugins, libraries, and extensions."
    >
      <Jumbotron>
        <Headline className="max-w-2xl">
          {frontMatter?.title || "The OpenTofu Manifesto"}
        </Headline>
      </Jumbotron>
      <TextContent className="mb-4 md:mb-10 mx-auto px-4">
        <MDXContent>
          <MDXPageContent />
        </MDXContent>
      </TextContent>
    </Layout>
  );
}
