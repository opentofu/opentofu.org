import React, { type ReactNode } from "react";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";
import DocSidebar from "@theme/DocSidebar";

import type { Props } from "@theme/DocPage/Layout/Sidebar";

// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children }: { children: ReactNode }) {
  const sidebar = useDocsSidebar();
  return (
    <React.Fragment key={sidebar?.name ?? "noSidebar"}>
      {children}
    </React.Fragment>
  );
}

type SidebarProps = {
  sidebar: Props["sidebar"];
  className?: string;
};

export default function DocPageLayoutSidebar({
  className,
  sidebar,
}: SidebarProps) {
  const { pathname } = useLocation();
  return (
    <aside className={className}>
      <ResetOnSidebarChange>
        <div className="p-2 xl:p-4 text-sm xl:text-base w-full sticky top-0 max-h-screen overflow-y-auto">
          <DocSidebar
            sidebar={sidebar}
            path={pathname}
            isHidden={false}
            onCollapse={() => {}}
          />
        </div>
      </ResetOnSidebarChange>
    </aside>
  );
}
