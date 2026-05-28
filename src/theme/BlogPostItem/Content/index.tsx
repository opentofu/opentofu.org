import React from "react";
import { blogPostContainerID } from "@docusaurus/utils-common";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import MDXContent from "@theme/MDXContent";
import TextContent from "@site/src/components/TextContent";
import { Props } from "@theme/BlogPostItem/Content";

export default function BlogPostItemContent({ children }: Props) {
  const { isBlogPostPage } = useBlogPost();
  return (
    <TextContent
      className="my-4 md:my-10 mx-auto px-4"
      id={isBlogPostPage ? blogPostContainerID : undefined}
      itemProp="articleBody"
    >
      <MDXContent>{children}</MDXContent>
    </TextContent>
  );
}
