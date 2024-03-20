import React from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import type { Props } from "@theme/TOC";

export default function TOC({ className, ...props }: Props) {
  return (
    <div
      className={clsx(
        "sticky top-0 p-2 xl:p-4 text-sm xl:text-base max-h-screen overflow-y-auto",
        className,
      )}
    >
      <TOCItems
        {...props}
        className="[&_ul]:pl-4"
        linkClassName="py-2 px-4 block hover:text-brand-650 dark:hover:text-brand-600 [&.active]:bg-brand-500 [&.active]:dark:bg-brand-800 [&.active]:text-gray-900 [&.active]:dark:text-brand-600 [&_code]:text-sm"
        linkActiveClassName="active"
      />
    </div>
  );
}
