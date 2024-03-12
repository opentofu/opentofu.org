import React from "react";
import Link from "@docusaurus/Link";
import { Suporter } from "@site/src/components/SupportersList/types";

type SupportersListProps = {
  list: Suporter[];
};

export default function SupportersList({ list }: SupportersListProps) {
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
            rel="noopener noreferrer nofollow"
            className="w-1/3 text-inherit font-bold text-gray-900 hover:text-brand-650 dark:text-gray-100 dark:hover:text-brand-500"
            aria-label={`Go to ${supporter.name} website`}
          >
            {supporter.name}
          </Link>

          <p className="w-2/3 text-right">{supporter.pledge}</p>
        </li>
      ))}
    </ul>
  );
}
