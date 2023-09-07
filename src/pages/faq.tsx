import React from "react";
import Layout from "@theme/Layout";
import Jumbotron from "../components/Jumbotron";
import Accordion from "../components/Accordion";
import AccordionItem from "../components/Accordion/Item";
import Faq from "../../faq.mdx";
import { MDXProvider } from "@mdx-js/react";
import Link from "@docusaurus/Link";

export default function Manifesto() {
  return (
    <Layout wrapperClassName="light">
      <Jumbotron>
        <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight md:leading-snug">
          Frequently Asked Questions
        </h1>
      </Jumbotron>

      <div className="container mx-auto pt-6 pb-10">
        <Accordion>
          <MDXProvider
            components={{
              AccordionItem,
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
