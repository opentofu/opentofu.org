import React from "react";

import DocSidebarItems from "@theme/DocSidebarItems";
import type { Props } from "@theme/DocSidebar/Desktop";

function DocSidebarDesktop({ path, sidebar }: Props) {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}

export default React.memo(DocSidebarDesktop);
