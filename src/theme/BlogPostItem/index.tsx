import React from "react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";

import type { Props } from "@theme/BlogPostItem";

export default function BlogPostItem({ children }: Props) {
  const { metadata } = useBlogPost();
  const { title, frontMatter } = metadata;
  return (
    <BlogPostItemContainer>
      <BlogPostItemHeader />

      <div className="container mx-auto flex justify-center">
        <img src={frontMatter.image_url} alt={title} />
      </div>
      <BlogPostItemContent>{children}</BlogPostItemContent>
    </BlogPostItemContainer>
  );
}
