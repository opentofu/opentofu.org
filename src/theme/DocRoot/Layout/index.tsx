import React from "react";
import DocPageLayoutSidebar from "./Sidebar";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import BackToTopButton from "@theme/BackToTopButton";
import type { Props } from "@theme/DocRoot/Layout";

export default function DocPageLayout({ children }: Props) {
  const sidebar = useDocsSidebar();

  return (
    <div className="border-t border-b border-gray-200 dark:border-gray-800">
      <BackToTopButton />
      <div className="container mx-auto flex flex-1 lg:divide-x divide-gray-200 dark:divide-gray-800">
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            className="hidden lg:flex lg:w-1/5 items-start"
          />
        )}
        <main className="w-full lg:w-4/5">{children}</main>
      </div>
    </div>
  );
}
