import React from "react";
import Logo from "./big-logo.svg";

export default function LatestNews() {
  return (
    <section className="text-[#F6F6F6] flex flex-col justify-center w-full py-10 md:py-20 px-6">
      <div className="w-full max-w-3xl mx-auto">
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12">
          Latest News
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark2 w-full flex justify-center py-20 px-16">
            <Logo />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#A965FF] font-bold">Aug 25, 2023</span>
            <h4 className="text-3xl font-bold text-[#E7E9EC]">
              OpenTF Announces Fork of Terraform
            </h4>
            <p className="text-[#8590A2]">
              Two weeks ago, HashiCorp announced they are changing the license
              to all their core products, including Terraform, to the Business
              Source License (BSL).
            </p>
            <a
              className="text-center border border-[#505661] md:self-start font-bold text-white h-12 px-6 flex items-center hover:no-underline"
              href="https://opentf.org/announcement"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
