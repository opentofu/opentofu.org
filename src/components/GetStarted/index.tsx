import Link from "@docusaurus/Link";
import React from "react";

function LinkCard({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <div className="bg-white dark:bg-blue-900 p-6 relative flex flex-col gap-2 ">
      <Link to={path} className="text-xl">
        <span className="absolute inset-0"></span>
        {title}
      </Link>
      <p className="text-gray-600 dark:text-gray-500">{description}</p>
    </div>
  );
}

export default function GetStarted() {
  return (
    <section className="py-12 mx-auto container items-center flex flex-col px-4">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-4 md:mb-7">
        Which of these best describes you?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <LinkCard
          title="I want a high-level overview"
          description="Learn the fundamentals of Infrastructure-as-Code in this high level guide, understand why IaC is so powerful, and how OpenTofu can help."
          path="/test1"
        />
        <LinkCard
          title="I'm new to OpenTofu"
          description="For newcomers to infrastructure as code an OpenTofu, this hands-on guide runs you through the basics of creating your first server with OpenTofu."
          path="/test2"
        />
        <LinkCard
          title="I'm migrating from Terraform"
          description="If you already have experience with Terraform but want to migrate to OpenTofu, this is for you. Tried and tested migration paths from Terraform to OpenTofu."
          path="/test3"
        />
        <LinkCard
          title="Just give me the docs"
          description="Reference manual for those in need of a quick lookup."
          path="/test4"
        />
      </div>
    </section>
  );
}
