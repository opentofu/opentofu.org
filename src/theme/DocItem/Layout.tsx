import React from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import type { Props } from "@theme/DocItem/Layout";

function useDocTOC() {
  const { frontMatter, toc } = useDoc();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  return canRender;
}

export default function DocItemLayout({ children }: Props) {
  const canRenderTOC = useDocTOC();

  return (
    <div className="flex h-full lg:divide-x divide-gray-200 dark:divide-gray-800">
      <div className="w-full lg:w-9/12 p-4">
        <DocVersionBanner />

        <article className="flex flex-col gap-4 mb-10">
          <DocBreadcrumbs />
          {canRenderTOC && <DocItemTOCMobile />}
          <DocItemContent>{children}</DocItemContent>
          <DocItemFooter />
        </article>
        <DocItemPaginator />
      </div>
      {canRenderTOC && (
        <div className="hidden lg:flex lg:w-3/12 items-start">
          <DocItemTOCDesktop />
        </div>
      )}
    </div>
  );
}
