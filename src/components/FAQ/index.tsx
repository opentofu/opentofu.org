import React from "react";
import Accordion from "../Accordion";
import AccordionItem from "../Accordion/Item";
import Button from "../Button";

export default function FAQ() {
  return (
    <section className="text-gray-900 flex flex-col justify-center w-full bg-gray-50 py-10 md:py-20 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12">
          Frequently Asked Questions
        </h3>

        <Accordion>
          <AccordionItem summary="What is OpenTF?" open>
            Under a well-known and widely-accepted license that companies can
            trus, that won’t suddenly change in the future, and isn’t subhect to
            the whims of a singe vendor. Under a well-known and widely-accepted
            license that companies can trust, that won’t suddenly change in the
            future, and isn’t subhect to the whims of a singe vendor.
          </AccordionItem>
          <AccordionItem summary="Why was OpenTF created?">
            Under a well-known and widely-accepted license that companies can
            trus, that won’t suddenly change in the future, and isn’t subhect to
            the whims of a singe vendor. Under a well-known and widely-accepted
            license that companies can trust, that won’t suddenly change in the
            future, and isn’t subhect to the whims of a singe vendor.
          </AccordionItem>
          <AccordionItem summary="Can I use OpenTF as a drop-in replacement for Terraform?">
            Under a well-known and widely-accepted license that companies can
            trus, that won’t suddenly change in the future, and isn’t subhect to
            the whims of a singe vendor. Under a well-known and widely-accepted
            license that companies can trust, that won’t suddenly change in the
            future, and isn’t subhect to the whims of a singe vendor.
          </AccordionItem>
          <AccordionItem summary="What are the differences between OpenTF and Terraform?">
            Under a well-known and widely-accepted license that companies can
            trus, that won’t suddenly change in the future, and isn’t subhect to
            the whims of a singe vendor. Under a well-known and widely-accepted
            license that companies can trust, that won’t suddenly change in the
            future, and isn’t subhect to the whims of a singe vendor.
          </AccordionItem>
        </Accordion>

        <div className="flex justify-center mt-6">
          <Button variant="secondaryOnLight" href="/faqs">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
}
