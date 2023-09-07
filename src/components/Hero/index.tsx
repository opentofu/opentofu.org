import React from "react";
import Button from "../Button";
import PatternBg from "../PatternBg";

export default function Hero() {
  return (
    <header className="flex flex-col items-center py-10 md:py-20 px-6 md:px-16 mx-auto">
      <PatternBg />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-normal text-white lg:leading-normal tracking-wider sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-center">
        Ensure Terraform remains truly open-source. Always.
      </h1>
      <p className="my-6 text-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center text-[#9DA6B5]">
        OpenTF is a fork of Terraform that is open source, community driven, and
        will be managed by an independent Foundation.
      </p>
      <div className="flex gap-4 pt-6">
        <Button variant="secondaryOnDark" href="/manifesto">
          Read Manifesto
        </Button>
        <Button variant="primary" href="/support">
          Support Us
        </Button>
      </div>
    </header>
  );
}
