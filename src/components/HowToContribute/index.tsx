import React from "react";
import Link, { Props } from "@docusaurus/Link";

function ContentLink(props: Props) {
  return (
    <Link
      {...props}
      className="text-[#1B1D20] dark:text-white hover:text-primary-base underline transition-colors"
    />
  );
}

// TODO enter final links once ready
export default function HowToContribute() {
  return (
    <section className="flex flex-col justify-center w-full py-10 md:py-20 px-6">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        <h3 className="text-center md:text-left text-3xl md:text-5xl font-bold leading-snug md:leading-snug lg:col-span-4 whitespace-nowrap">
          How to use
          <br />
          and contribute to
          <br />
          OpenTF?
        </h3>
        <div className="grid grid-cols-1 lg:col-start-6 lg:col-span-8 items-center">
          <div className="flex flex-col gap-6 text-[#6A7382] dark:text-gray-400 text-xl">
            <p className="text-left max-md:text-center">
              How to use and Contribute to OpenTF?{" "}
              <ContentLink href="https://placeholderplaceholder.com">
                The fork
              </ContentLink>{" "}
              will be available shortly. Right now it is just pending foundation
              details.
            </p>
            <p className="max-md:text-center">
              Read more about the Fork{" "}
              <ContentLink href="https://placeholderplaceholder.com">
                here
              </ContentLink>
              . The contribution guide will be defined soon, but in the
              meantime, you can check out{" "}
              <ContentLink href="https://github.com/opentffoundation/roadmap">
                our public roadmap
              </ContentLink>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
