import React from "react";

import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";

import type { Props } from "@theme/BlogPostItem";

export default function BlogPostItem({ children }: Props) {
  return (
    <BlogPostItemContainer>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
    </BlogPostItemContainer>
  );
}
