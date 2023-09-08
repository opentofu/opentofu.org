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
        linkClassName="py-1 px-2 flex [&.active]:bg-purple-50 [&.active]:dark:bg-purple-800 [&.active]:text-purple-500 [&.active]:dark:text-purple-300"
        linkActiveClassName="active"
      />
    </div>
  );
}
