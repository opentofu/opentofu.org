import React, { useMemo, useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import supporters from "../../../supporters.json";
import Link from "@docusaurus/Link";

type ToggleButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  count?: number;
};

function ToggleButton({
  children,
  isActive,
  count,
  ...rest
}: ToggleButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "border text-white h-12 px-6 flex items-center hover:no-underline",
        isActive ? "border-white" : "border-white/20"
      )}
      {...rest}
    >
      {children}
      {count && (
        <sup className="ml-2 mt-2 text-brandLight text-base font-bold">
          {count}
        </sup>
      )}
    </button>
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
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const groupedSupporters = groupSupportersByType(supporters);
  const types = Object.keys(groupedSupporters);

  const tempSupporters = activeTab ? groupedSupporters[activeTab] : supporters;

  const filteredSupporters = showAll
    ? tempSupporters
    : tempSupporters.slice(0, 5);

  return (
    <section className="py-12 mx-auto container">
      <h3 className="text-center text-5xl font-bold mb-7">Supporters</h3>
      <div className="flex gap-6 justify-center">
        <ToggleButton
          isActive={activeTab === null}
          onClick={() => setActiveTab(null)}
        >
          All
        </ToggleButton>
        {types.map((type) => (
          <ToggleButton
            key={type}
            isActive={activeTab === type}
            onClick={() => setActiveTab(type)}
            count={groupedSupporters[type].length}
          >
            {type}
          </ToggleButton>
        ))}
      </div>
      <table className="w-full mt-12 mb-6 border-0 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto table">
        <tbody>
          {filteredSupporters.map((supporter) => (
            <tr
              className="even:bg-transparent border-t-0 border-b border-white/20 w-full"
              key={supporter.name}
            >
              <td className="py-4 border-0 w-1/5">
                <Link
                  href={supporter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {supporter.name}
                </Link>
              </td>
              <td className="py-4 border-0 w-1/5">{supporter.type}</td>
              <td className="py-4 border-0 w-3/5">{supporter.pledge}</td>
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
