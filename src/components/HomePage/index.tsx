import React from "react";

import LogoUrl from "@site/static/img/logo.png";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-1/2">
      <img src={LogoUrl} alt="Logo" className="w-96" />
      <p className="text-xl -mt-6">
        Supporting an impartial, open, and community-driven Terraform.
      </p>
      <div className="flex gap-4 mt-8">
        <Link
          to="/intro"
          className="rounded-full border-2 border-brand bg-brand px-6 py-3"
        >
          Documentation
        </Link>
        <Link
          to="https://github.com/opentffoundation/opentf"
          className="rounded-full border-2 border-brand px-6 py-3"
        >
          GitHub Repository
        </Link>
      </div>
    </div>
  );
}
