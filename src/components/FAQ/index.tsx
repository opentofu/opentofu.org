import React from "react";
import Accordion from "../Accordion";
import AccordionItem, { AccordionItemProps } from "../Accordion/Item";
import Button from "../Button";
import Faq from "../../../faq.mdx";
import { MDXProvider } from "@mdx-js/react";
import Link from "@docusaurus/Link";

export default function FAQ() {
  return (
    <section className="flex flex-col justify-center w-full py-10 md:py-20 bg-gradient-to-b from-white dark:from-blue-900 to-transparent">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion>
          <MDXProvider
            components={{
              AccordionItem: (props: AccordionItemProps) =>
                props.highlight ? <AccordionItem {...props} /> : null,
              a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
                <Link className="text-inherit underline" {...props} />
              ),
              blockquote: (
                props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>
              ) => (
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
            <span aria-hidden>Show More</span>
            <span className="sr-only">Go to the FAQ page</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
