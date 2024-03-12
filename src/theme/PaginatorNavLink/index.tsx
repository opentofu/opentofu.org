import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/PaginatorNavLink";

type PaginatorNavLink = Props & {
  className?: string;
};

export default function PaginatorNavLink(props: PaginatorNavLink) {
  const { permalink, title, subLabel, isNext, className } = props;

  return (
    <Link
      className={clsx(
        "border-gray-900 dark:border-gray-50 rounded-md border p-4 text-gray-900 dark:text-gray-50 hover:text-brand-650 dark:hover:text-brand-500",
        isNext && "text-right",
        className,
      )}
      to={permalink}
    >
      {subLabel && (
        <div className="text-sm text-gray-700 dark:text-gray-300 inline-flex">
          {subLabel}
        </div>
      )}
      <div className="font-bold">{title}</div>
    </Link>
  );
}
