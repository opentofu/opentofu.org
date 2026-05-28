import React from "react";

import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";

import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";

import type { Props } from "@theme/BlogPostPage";

export default function BlogPostPage(props: Props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <BlogPostPageMetadata />
      <BlogLayout>
        <BlogPostItem>
          <BlogPostContent />
        </BlogPostItem>
      </BlogLayout>
    </BlogPostProvider>
  );
}
