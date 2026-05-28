import React from "react";
// import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";
import Jumbotron from "@site/src/components/Jumbotron";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import { useDateTimeFormat } from "@docusaurus/theme-common/internal";
import Headline from "@site/src/components/Headline";

export default function BlogPostItemHeader() {
  const { metadata } = useBlogPost();
  const { date, title } = metadata;
  const dateTimeFormat = useDateTimeFormat({
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const formattedDate = dateTimeFormat.format(new Date(date));

  return (
    <Jumbotron>
      <time
        dateTime={date}
        itemProp="datePublished"
        className="text-brand-650 dark:text-brand-500 uppercase font-bold"
      >
        {formattedDate}
      </time>
      <Headline>{title}</Headline>

      {/* <BlogPostItemHeaderAuthors /> */}
    </Jumbotron>
  );
}
