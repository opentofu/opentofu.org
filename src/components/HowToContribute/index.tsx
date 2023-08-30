import React from "react";
import Logo from "@site/static/img/logo.svg";

export default function HowToContribute() {
  return (
    <section className="text-[#0C192B] flex flex-col justify-center w-full bg-light2 py-10 md:py-20 px-6">
      <div className="w-full max-w-3xl mx-auto">
        <Logo height={120} className="mx-auto mb-2" />
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-3 md:mb-6">
          How to contribute to the main GitHub repo?
        </h3>
        <h6 className="text-[#5F6671] text-center text-base md:text-xl font-medium  mb-3 md:mb-8">
          Right now, code contributions are not accepted, as we are working on
          setting up the contribution process.
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="max-md:text-center">
            You can already contribute, though, by opening an issue! Feature
            requests, Bug reports, broken compatibility reports, old issue
            reposts, and well-prepared RFCs are all very welcome. Check out the
            public roadmap, before submitting your issue.
          </p>
          <p className="max-md:text-center">
            All major changes will go through the public RFC process. Creating
            an RFC will give the community a chance to voice their opinion on
            the proposed feature.
          </p>
        </div>
      </div>
    </section>
  );
}
