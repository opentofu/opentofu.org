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
    <div className="max-w-7xl mx-auto space-y-8 px-4">
      {items.map((item, index) => (
        <BlogListItem
          item={item}
          key={item.content.metadata.permalink}
          isLatestPost={index === 0}
        />
      ))}
    </div>
  );
}
