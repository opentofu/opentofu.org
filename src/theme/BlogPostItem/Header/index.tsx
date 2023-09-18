import React from "react";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";
import Jumbotron from "@site/src/components/Jumbotron";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import Headline from "@site/src/components/Headline";

export default function BlogPostItemHeader() {
  const { metadata } = useBlogPost();
  const { date, formattedDate, title } = metadata;

  return (
    <Jumbotron>
      <time
        dateTime={date}
        itemProp="datePublished"
        className="text-brand-700 dark:text-brand-500 uppercase font-bold"
      >
        {formattedDate}
      </time>
      <Headline>{title}</Headline>

      <BlogPostItemHeaderAuthors />
    </Jumbotron>
  );
}
