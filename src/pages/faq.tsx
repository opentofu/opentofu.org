import React from "react";
import Layout from "@theme/Layout";
import Jumbotron from "../components/Jumbotron";
import Accordion from "../components/Accordion";
import AccordionItem from "../components/Accordion/Item";
import Faq from "../../faq.mdx";
import { MDXProvider } from "@mdx-js/react";
import Link from "@docusaurus/Link";
import Headline from "../components/Headline";

export default function FAQ() {
  return (
    <Layout title="FAQ">
      <Jumbotron>
        <Headline>Frequently Asked Questions</Headline>
      </Jumbotron>

      <div className="container mx-auto pt-6 pb-10">
        <Accordion>
          <MDXProvider
            components={{
              AccordionItem: (props) => (
                <AccordionItem isHashEnabled {...props} />
              ),
              a: (props) => (
                <Link className="text-inherit underline" {...props} />
              ),
              blockquote: (props) => (
                <blockquote
                  className="border-l-4 border-gray-300 text-inherit pl-4"
                  {...props}
                />
              ),
            }}
          >
            <Faq />
          </MDXProvider>
        </Accordion>
      </div>
    </Layout>
  );
}
