import React from "react";
import Link, { Props } from "@docusaurus/Link";

// TODO enter final links once ready
export default function HowToContribute() {
  return (
    <section className="flex flex-col justify-center w-full py-5 md:py-10 px-4">
      <div className="w-full max-w-4xl mx-auto leading-snug">
        <h3 className="text-center text-3xl md:text-5xl mb-3 md:mb-6 font-bold">
          How to use and contribute to OpenTF?
        </h3>
        <p className="text-gray-600 dark:text-gray-500 text-center text-base md:text-xl mb-6 md:mb-12 md:leading-relaxed">
          The best way to show practical support for the OpenTofu initiative is
          to contribute. This{" "}
          <Link
            href="https://github.com/opentffoundation/opentf/blob/main/CONTRIBUTING.md"
            className="underline text-gray-900 dark:text-gray-50"
          >
            contribution guide
          </Link>{" "}
          explains OpenTF contribution recommended practices, including how to
          submit issues, how to get involved in the discussion, how to work on
          the code, and how to contribute code changes.
        </p>
      </div>
    </section>
  );
}
