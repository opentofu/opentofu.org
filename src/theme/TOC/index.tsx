import React from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import type { Props } from "@theme/TOC";

export default function TOC({ className, ...props }: Props) {
  return (
    <div
      className={clsx(
        "sticky top-0 p-2 xl:p-4 text-sm xl:text-base",
        className
      )}
    >
      <TOCItems
        {...props}
        className="[&_ul]:pl-4"
        linkClassName="py-2 px-4 block hover:text-gray-900 hover:dark:text-yellow-600 [&.active]:bg-yellow-500 [&.active]:dark:bg-yellow-800 [&.active]:text-gray-900 [&.active]:dark:text-yellow-600"
        linkActiveClassName="active"
      />
    </div>
  );
}
