import React from "react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemHeaderAuthor from "@theme/BlogPostItem/Header/Author";

export default function BlogPostItemHeaderAuthors() {
  const {
    metadata: { authors },
    assets,
  } = useBlogPost();
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }

  return (
    <div className="flex gap-6">
      {authors.map((author, idx) => (
        <BlogPostItemHeaderAuthor
          key={idx}
          author={{
            ...author,
            imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
          }}
        />
      ))}
    </div>
  );
}
