import React from "react";
import Accordion from "../Accordion";
import AccordionItem from "../Accordion/Item";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-1/2">
      <section className="text-[#0C192B] flex flex-col justify-center w-full bg-[#F9F9F9] py-20 px-6">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="mb-12  font-bold text-5xl">
            Frequently Asked Questions
          </h1>

          <Accordion>
            <AccordionItem summary="What is OpenTF?" open>
              Under a well-known and widely-accepted license that companies can
              trus, that won’t suddenly change in the future, and isn’t subhect
              to the whims of a singe vendor. Under a well-known and
              widely-accepted license that companies can trus, that won’t
              suddenly change in the future, and isn’t subhect to the whims of a
              singe vendor.
            </AccordionItem>
            <AccordionItem summary="Why was OpenTF created?">
              Under a well-known and widely-accepted license that companies can
              trus, that won’t suddenly change in the future, and isn’t subhect
              to the whims of a singe vendor. Under a well-known and
              widely-accepted license that companies can trus, that won’t
              suddenly change in the future, and isn’t subhect to the whims of a
              singe vendor.
            </AccordionItem>
            <AccordionItem summary="Can I use OpenTF as a drop-in replacement for Terraform?">
              Under a well-known and widely-accepted license that companies can
              trus, that won’t suddenly change in the future, and isn’t subhect
              to the whims of a singe vendor. Under a well-known and
              widely-accepted license that companies can trus, that won’t
              suddenly change in the future, and isn’t subhect to the whims of a
              singe vendor.
            </AccordionItem>
            <AccordionItem summary="What are the differences between OpenTF and Terraform?">
              Under a well-known and widely-accepted license that companies can
              trus, that won’t suddenly change in the future, and isn’t subhect
              to the whims of a singe vendor. Under a well-known and
              widely-accepted license that companies can trus, that won’t
              suddenly change in the future, and isn’t subhect to the whims of a
              singe vendor.
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
