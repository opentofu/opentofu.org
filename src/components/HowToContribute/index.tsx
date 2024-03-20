import React from "react";
import Link from "@docusaurus/Link";
import Button from "../Button";

// TODO enter final links once ready
export default function HowToContribute() {
  return (
    <section className="flex flex-col justify-center w-full py-5 md:py-10 px-4">
      <div className="w-full max-w-4xl mx-auto leading-snug">
        <h2 className="text-center text-3xl md:text-5xl mb-3 md:mb-6 font-bold">
          How to contribute to OpenTofu?
        </h2>
        <p className="text-gray-600 dark:text-gray-500 text-center text-base md:text-xl mb-3 md:mb-6 md:leading-relaxed">
          The best way to show practical support for the OpenTofu initiative is
          to contribute. This{" "}
          <Link
            href="https://github.com/opentofu/opentofu/blob/main/CONTRIBUTING.md"
            className="underline text-gray-900 hover:text-brand-650 dark:text-gray-50 dark:hover:text-brand-500"
          >
            contribution guide
          </Link>{" "}
          explains OpenTofu contribution recommended practices, including how to
          submit issues, how to get involved in the discussion, how to work on
          the code, and how to contribute code changes.
        </p>
        <Button
          className="mx-auto max-w-fit"
          variant="primary"
          href="https://github.com/opentofu/opentofu/blob/main/CONTRIBUTING.md"
        >
          Contribute
        </Button>
      </div>
    </section>
  );
}
