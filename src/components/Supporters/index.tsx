import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import supporters from "../../../supporters.json";

import Button from "../Button";
import { groupSupportersByType } from "../../utils/groupSupportersByType";
import SupportersList from "../SupportersList";

type SupporterTypeProps = {
  children: React.ReactNode;
  count?: number;
  withSeparator?: boolean;
};

function SupporterType({ children, withSeparator, count }: SupporterTypeProps) {
  return (
    <li className="h-12 flex items-center font-medium">
      {children}
      {count && (
        <sup className="ml-1 mt-2 text-yellow-700 dark:text-yellow-600 text-base font-bold">
          {count}
        </sup>
      )}
      {withSeparator && <span className="mx-4 text-gray-400">•</span>}
    </li>
  );
}

export default function Supporters() {
  const { siteConfig } = useDocusaurusContext();
  const groupedSupporters = groupSupportersByType(supporters);
  const types = Object.entries(groupedSupporters);
  const { logos } = siteConfig.customFields;
  const list = supporters.filter((supporter) => logos[supporter.name]);

  return (
    <section className="py-12 mx-auto container items-center flex flex-col px-4">
      <h3 className="text-center text-3xl md:text-5xl font-bold mb-4 md:mb-7">
        Supporters
      </h3>
      <ol className="inline-flex flex-wrap justify-center" role="list">
        {types.map(([type, supporters], index) => (
          <SupporterType
            key={type}
            count={supporters.length}
            withSeparator={index < types.length - 1}
          >
            {type}
          </SupporterType>
        ))}
      </ol>
      <SupportersList list={list} />
      <div className="flex gap-6 justify-center">
        <Button variant="secondary" href="/supporters">
          Show More
        </Button>
      </div>
    </section>
  );
}
