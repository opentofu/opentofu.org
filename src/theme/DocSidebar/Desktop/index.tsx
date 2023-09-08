import React from "react";

import Content from "@theme/DocSidebar/Desktop/Content";
import type { Props } from "@theme/DocSidebar/Desktop";

function DocSidebarDesktop({ path, sidebar }: Props) {
  return (
    <div className="sticky top-0">
      <Content path={path} sidebar={sidebar} />
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
