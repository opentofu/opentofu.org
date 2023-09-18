import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

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
    <ul
      className="mt-6 md:mt-12 mb-6 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto w-full text-gray-600 dark:text-gray-500"
      id="supporters-list"
    >
      {list.map((supporter, index) => (
        <li
          className="py-3 md:py-6 border-b dark:border-gray-800 border-gray-200 flex gap-4 justify-between items-center"
          key={index}
        >
          <Link
            href={supporter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/3 text-inherit"
            aria-label={`Go to ${supporter.name} website`}
          >
            {logos[supporter.name] ? (
              <div
                aria-hidden
                style={{
                  "--light-img": `url('${useBaseUrl(
                    logos[supporter.name].light
                  )}')`,
                  "--dark-img": `url('${useBaseUrl(
                    logos[supporter.name].dark
                  )}')`,
                }}
                className="w-28 h-8 [background-image:--light-img] dark:[background-image:--dark-img] bg-no-repeat bg-center"
              />
            ) : (
              supporter.name
            )}
          </Link>

          <p className="w-2/3 text-right">{supporter.pledge}</p>
        </li>
      ))}
    </ul>
  );
}
