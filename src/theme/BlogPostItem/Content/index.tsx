import React from "react";
import { blogPostContainerID } from "@docusaurus/utils-common";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import MDXContent from "@theme/MDXContent";

export default function BlogPostItemContent({ children }) {
  const { isBlogPostPage } = useBlogPost();
  return (
    <div
      className="prose lg:prose-xl dark:prose-invert mx-auto my-10"
      id={isBlogPostPage ? blogPostContainerID : undefined}
      itemProp="articleBody"
    >
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
