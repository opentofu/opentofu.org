import React from "react";
import clsx from "clsx";
import TOCItems from "@theme/TOCItems";
import type { Props } from "@theme/TOC";

export default function TOC({ className, ...props }: Props) {
  return (
    <div className={clsx("sticky top-0 p-4", className)}>
      <TOCItems
        {...props}
        className="[&_ul]:pl-4"
        linkClassName="px-4 py-2 flex"
        linkActiveClassName=""
      />
    </div>
  );
}
