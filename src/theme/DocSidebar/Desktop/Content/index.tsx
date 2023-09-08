import React from "react";
import clsx from "clsx";

import DocSidebarItems from "@theme/DocSidebarItems";
import type { Props } from "@theme/DocSidebar/Desktop/Content";

export default function DocSidebarDesktopContent({
  path,
  sidebar,
  className,
}: Props) {
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-2">
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
