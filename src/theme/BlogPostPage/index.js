import React from "react";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import BlogLayout from "@theme/BlogLayout";
import BlogPostItem from "@theme/BlogPostItem";

import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";

function BlogPostPageContent({ children }) {
  return (
    <BlogLayout>
      <BlogPostItem>{children}</BlogPostItem>
    </BlogLayout>
  );
}
export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <BlogPostPageMetadata />
      <BlogPostPageContent>
        <BlogPostContent />
      </BlogPostPageContent>
    </BlogPostProvider>
  );
}
