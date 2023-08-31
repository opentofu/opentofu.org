import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import supporters from "../../../supporters.json";
import Link from "@docusaurus/Link";

type SupporterTypeProps = {
  children: React.ReactNode;
  count?: number;
  withSeparator?: boolean;
};

function SupporterType({ children, withSeparator, count }: SupporterTypeProps) {
  return (
    <li className=" text-white h-12 flex items-center">
      {children}
      {count && (
        <sup className="ml-1 mt-2 text-brandLight text-base font-bold">
          {count}
        </sup>
      )}
      {withSeparator && <span className="mx-4 text-white/50">•</span>}
    </li>
  );
}

function groupSupportersByType(supporters) {
  const groupedSupporters = {};
  for (const supporter of supporters) {
    let { type } = supporter;

    switch (true) {
      case type.includes("Individual"):
        type = "Individuals";
        break;
      case type === "Company":
        type = "Companies";
        break;
      case type === "Project":
        type = "Projects";
        break;
      case type === "Foundation":
        type = "Foundations";
        break;
    }

    if (!groupedSupporters[type]) {
      groupedSupporters[type] = [];
    }
    groupedSupporters[type].push(supporter);
  }
  return groupedSupporters;
}

export default function Supporters() {
  const { siteConfig } = useDocusaurusContext();
  const [showAll, setShowAll] = useState(false);
  const groupedSupporters = groupSupportersByType(supporters);
  const types = Object.keys(groupedSupporters);

  const truncatedSupporters = showAll ? supporters : supporters.slice(0, 5);

  return (
    <section className="py-12 mx-auto container items-center flex flex-col">
      <h3 className="text-5xl font-bold mb-7">Supporters</h3>
      <ol className="inline-flex" role="list">
        {types.map((type, index) => (
          <SupporterType
            key={type}
            count={groupedSupporters[type].length}
            withSeparator={index < types.length - 1}
          >
            {type}
          </SupporterType>
        ))}
      </ol>
      <table className="w-full mt-12 mb-6 border-0 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl table">
        <tbody>
          {siteConfig.customFields.companiesWithLogos.map((supporter) => (
            <tr
              className="even:bg-transparent border-t-0 border-b border-white/20 w-full"
              key={supporter.name}
            >
              <td className="py-6 border-0 w-1/6 px-6">
                <Link
                  href={supporter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={supporter.logo} alt={supporter.name} />
                </Link>
              </td>
              <td className="py-6 border-0 w-2/6 text-center text-[#9DA6B5]">
                Company
              </td>
              <td className="py-6 border-0 w-3/6 text-right text-[#9DA6B5] px-6">
                {supporter.pledge}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-6 justify-center">
        <button
          type="button"
          className="border text-white h-12 px-6 flex items-center hover:no-underline border-white/20"
          onClick={() => setShowAll((value) => !value)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
        <Link
          href="/support"
          className="bg-brand text-white h-12 px-6 flex items-center hover:no-underline hover:text-white hover:bg-brand/80 transition-colors"
        >
          Support Us
        </Link>
      </div>
    </section>
  );
}
