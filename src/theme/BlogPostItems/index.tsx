import React from "react";

import BlogListItem from "@theme/BlogListItem";
export default function BlogPostItems({ items }) {
  return (
    <div className="light bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-x-6 gap-y-12 py-10">
        {items.map((item) => (
          <BlogListItem item={item} key={item.content.metadata.permalink} />
        ))}
      </div>
    </div>
  );
}
