import React from "react";
import { PageMetadata } from "@docusaurus/theme-common";
import { useBlogPost } from "@docusaurus/theme-common/internal";

export default function BlogPostPageMetadata() {
  const { assets, metadata } = useBlogPost();
  const { title, description, date, tags, frontMatter } = metadata;
  const { keywords } = frontMatter;
  const image = assets.image ?? frontMatter.image;

  return (
    <PageMetadata
      title={title}
      description={description}
      keywords={keywords}
      image={image}
    >
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={date} />

      {tags.length > 0 && (
        <meta
          property="article:tag"
          content={tags.map((tag) => tag.label).join(",")}
        />
      )}
    </PageMetadata>
  );
}
