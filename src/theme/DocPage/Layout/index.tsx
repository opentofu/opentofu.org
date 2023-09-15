import React from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import Layout from "@theme/Layout";
import BackToTopButton from "@theme/BackToTopButton";
import DocPageLayoutSidebar from "@theme/DocPage/Layout/Sidebar";
import type { Props } from "@theme/DocPage/Layout";

export default function DocPageLayout({ children }: Props) {
  const sidebar = useDocsSidebar();

  return (
    <Layout wrapperClassName="border-t border-b border-gray-200 dark:border-gray-800">
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
    </Layout>
  );
}
