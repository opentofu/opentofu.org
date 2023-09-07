import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type SupportersListProps = {
  list: {
    name: string;
    url: string;
    pledge: string;
    type: string;
  }[];
};

export default function SupportersList({ list }: SupportersListProps) {
  const { siteConfig } = useDocusaurusContext();
  const { logos } = siteConfig.customFields;

  return (
    <div className="mt-6 md:mt-12 mb-6 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto w-full">
      {list.map((supporter) => (
        <div
          className="py-3 md:py-6 border-b dark:border-gray-800 border-gray-200 flex gap-4 justify-between items-center"
          key={supporter.name}
        >
          <Link
            href={supporter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/3 text-inherit"
          >
            {logos[supporter.name] ? (
              <>
                <img
                  src={logos[supporter.name].light}
                  alt={supporter.name}
                  className="w-28 dark:hidden block"
                />
                <img
                  src={logos[supporter.name].dark}
                  alt={supporter.name}
                  className="w-28 dark:block hidden"
                />
              </>
            ) : (
              supporter.name
            )}
          </Link>

          <p className="w-2/3 text-right">{supporter.pledge}</p>
        </div>
      ))}
    </div>
  );
}
