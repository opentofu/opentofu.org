import React from "react";

export default function HowToContribute() {
  return (
    <section className="text-[#0C192B] flex flex-col justify-center w-full bg-light2 py-10 md:py-20 px-6">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        <h3 className="text-center md:text-left text-3xl md:text-5xl font-bold">
          How to use and contribute to OpenTF?
        </h3>
        <div className="grid grid-cols-1 gap-6 text-[#6A7382] py-6 lg:col-span-2">
          <p className="text-left max-md:text-center">
            How to use and Contribute to OpenTF? The fork will be available
            shorty. Right now it is just pending foundation details.
          </p>
          <p className="max-md:text-center">
            Read more about the Fork here. Contribution guide will be defined
            soon, but in the meantime, you can check out our public roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}
