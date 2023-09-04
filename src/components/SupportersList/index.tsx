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
    <table className="w-full mt-6 md:mt-12 mb-6 border-0 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto table">
      <tbody>
        {list.map((supporter) => (
          <tr
            className="even:bg-transparent border-t-0 border-b border-white/20 [.light_&]:border-gray-150 w-full"
            key={supporter.name}
          >
            <td className="py-3 md:py-6 border-0 w-2/6 md:w-1/6 pl-6">
              <Link
                href={supporter.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {logos[supporter.name] ? (
                  <img
                    src={logos[supporter.name]}
                    alt={supporter.name}
                    className="w-[100px]"
                  />
                ) : (
                  supporter.name
                )}
              </Link>
              <p className="flex md:hidden mt-2 text-xs">{supporter.type}</p>
            </td>
            <td className="py-3 md:py-6 border-0 hidden md:table-cell md:w-2/6 text-center">
              {supporter.type}
            </td>
            <td className="py-3 md:py-6 border-0 w-4/6 text-right pr-6">
              {supporter.pledge}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
