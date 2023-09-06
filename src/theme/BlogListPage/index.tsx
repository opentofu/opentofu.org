import React from "react";

import { PageMetadata } from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import BlogPostItems from "@theme/BlogPostItems";
import BlogLastPost from "@theme/BlogLastPost";

export default function BlogListPage(props) {
  const { metadata, items } = props;

  const { blogDescription, blogTitle } = metadata;

  return (
    <>
      <PageMetadata title={blogTitle} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
      <BlogLayout wrapperClassName="light">
        <BlogLastPost item={items[0]} />
        <BlogPostItems items={items} />
        <BlogListPaginator metadata={metadata} />
      </BlogLayout>
    </>
  );
}
