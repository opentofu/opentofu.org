import React from "react";

import BlogListItem from "@theme/BlogListItem";
import { PropBlogPostContent } from "@docusaurus/plugin-content-blog";

type BlogListItemsProps = {
  items: readonly {
    content: PropBlogPostContent;
  }[];
};

export default function BlogListItems({ items }: BlogListItemsProps) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 py-4 md:py-10 px-4">
      {items.map((item) => (
        <BlogListItem item={item} key={item.content.metadata.permalink} />
      ))}
    </div>
  );
}
