import React from "react";
import { blogPostContainerID } from "@docusaurus/utils-common";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import MDXContent from "@theme/MDXContent";
import TextContent from "@site/src/components/TextContent";

export default function BlogPostItemContent({ children }) {
  const { isBlogPostPage } = useBlogPost();
  return (
    <TextContent
      className="my-4 md:my-10"
      id={isBlogPostPage ? blogPostContainerID : undefined}
      itemProp="articleBody"
    >
      <MDXContent>{children}</MDXContent>
    </TextContent>
  );
}
