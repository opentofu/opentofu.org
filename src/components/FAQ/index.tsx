import React from "react";
import Accordion from "../Accordion";
import AccordionItem from "../Accordion/Item";
import Button from "../Button";
import Faq from "../../../faq.mdx";
import { MDXProvider } from "@mdx-js/react";
import Link from "@docusaurus/Link";

export default function FAQ() {
  return (
    <section className="flex flex-col justify-center w-full py-10 md:py-20 px-4 bg-gradient-to-b from-white dark:from-dark2 to-transparent">
      <div className="w-full max-w-4xl mx-auto">
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12">
          Frequently Asked Questions
        </h3>

        <Accordion>
          <MDXProvider
            components={{
              AccordionItem: (props) =>
                props.highlight ? <AccordionItem {...props} /> : null,
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

        <div className="flex justify-center mt-6">
          <Button variant="secondary" href="/faq">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
}
