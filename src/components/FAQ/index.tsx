import React from "react";
import Accordion from "../Accordion";
import AccordionItem, { AccordionItemProps } from "../Accordion/Item";
import Button from "../Button";
import Faq from "../../../faq.mdx";
import { MDXProvider } from "@mdx-js/react";
import Link from "@docusaurus/Link";

export default function FAQ() {
  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-left sm:text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about OpenTofu capabilities and
            usage
          </p>
        </div>

        <div className="bg-white dark:bg-blue-900/30 rounded-2xl shadow-lg border border-gray-100 dark:border-blue-800/40 p-6 md:p-8">
          <Accordion>
            <MDXProvider
              components={{
                AccordionItem: (props: AccordionItemProps) =>
                  props.highlight ? <AccordionItem {...props} /> : null,
                a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
                  <Link
                    className="text-blue-600 dark:text-blue-300 hover:underline"
                    {...props}
                  />
                ),
                blockquote: (
                  props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
                ) => (
                  <blockquote
                    className="border-l-4 border-blue-300 dark:border-blue-600 text-inherit pl-4 py-1 my-4 text-gray-600 dark:text-gray-400 italic"
                    {...props}
                  />
                ),
              }}
            >
              <Faq />
            </MDXProvider>
          </Accordion>

          <div className="flex justify-start sm:justify-center mt-10">
            <Button
              variant="secondary"
              href="/faq"
              className="w-full sm:w-auto px-6 py-3 flex items-center gap-2"
            >
              <span>View All Questions</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
