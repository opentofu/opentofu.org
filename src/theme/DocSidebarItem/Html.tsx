import React from "react";
import clsx from "clsx";

import type { Props } from "@theme/DocSidebarItem/Html";

export default function DocSidebarItemHtml({ item, index }: Props) {
  const { value, className } = item;
  return (
    <li
      className={clsx(
        "font-normal text-gray-600 dark:text-gray-500",
        className,
      )}
      key={index}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}
