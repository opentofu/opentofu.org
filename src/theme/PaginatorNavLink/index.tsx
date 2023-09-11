import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/PaginatorNavLink";

export default function PaginatorNavLink(props: Props) {
  const { permalink, title, subLabel, isNext } = props;
  return (
    <Link
      className={clsx(
        "border-gray-900 dark:border-gray-50 rounded-md border p-4",
        isNext && "text-right"
      )}
      to={permalink}
    >
      {subLabel && (
        <div className="text-sm text-gray-600 dark:text-gray-500">
          {subLabel}
        </div>
      )}
      <div className="font-bold">{title}</div>
    </Link>
  );
}
