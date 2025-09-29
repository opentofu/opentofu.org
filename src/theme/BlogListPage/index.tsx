import React from "react";

import { PageMetadata } from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import BlogListItems from "@theme/BlogListItems";
import { Props } from "@theme/BlogListPage";
import PatternBg from "@site/src/components/PatternBg";

export default function BlogListPage(props: Props) {
  const { metadata, items } = props;
  const { blogDescription, blogTitle } = metadata;

  return (
    <>
      <PageMetadata title={blogTitle} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
      <PatternBg />
      <BlogLayout>
        <BlogListItems items={items} />
        <BlogListPaginator metadata={metadata} />
      </BlogLayout>
    </>
  );
}
