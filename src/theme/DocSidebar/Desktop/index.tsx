import React from "react";

import Content from "@theme/DocSidebar/Desktop/Content";
import type { Props } from "@theme/DocSidebar/Desktop";

function DocSidebarDesktop({ path, sidebar }: Props) {
  return <Content path={path} sidebar={sidebar} />;
}

export default React.memo(DocSidebarDesktop);
