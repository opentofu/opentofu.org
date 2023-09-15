import React from "react";
import Button from "../Button";
import PatternBg from "../PatternBg";
import Headline from "../Headline";

export default function Hero() {
  return (
    <header className="flex flex-col items-center py-10 md:py-20 px-6 md:px-16 mx-auto">
      <PatternBg />
      <Headline className="sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        Ensure Terraform remains truly open-source. Always.
      </Headline>
      <p className="my-6 text-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center text-gray-600 dark:text-gray-500">
        Previously named OpenTF, OpenTofu is a fork of Terraform that is
        open-source, community-driven, and will be managed by the Linux
        Foundation.
      </p>
      <div className="flex gap-4 pt-6">
        <Button variant="secondary" href="/manifesto">
          Read Manifesto
        </Button>
        <Button variant="primary" href="https://github.com/opentffoundation/opentf/blob/main/CONTRIBUTING.md">
          Contribute
        </Button>
      </div>
    </header>
  );
}
