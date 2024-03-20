import React from "react";
import PatternBg from "@site/src/components/PatternBg";
import Button from "@site/src/components/Button";
import Link from "@docusaurus/Link";
import { PropBlogPostContent } from "@docusaurus/plugin-content-blog";

type BlogLastPostProps = {
  item: {
    content: PropBlogPostContent;
  };
};

export default function BlogLastPost({ item }: BlogLastPostProps) {
  const { permalink, title, date, formattedDate, description } =
    item.content.metadata;

  return (
    <div className="pt-8 pb-12 md:pt-12 md:pb-20 flex items-center justify-center">
      <PatternBg />
      <div className="max-w-7xl mx-auto px-4">
        <article>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <Link to={permalink}>
                <img src={item.content.frontMatter.image} alt={title} />
              </Link>
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <time
                dateTime={date}
                itemProp="datePublished"
                className="text-brand-650 dark:text-brand-500 uppercase font-bold"
              >
                {formattedDate}
              </time>

              <h3 className="leading-snug text-3xl font-bold my-2 line-clamp-5">
                <Link
                  to={permalink}
                  className="text-gray-900 dark:text-gray-50 hover:text-brand-650 dark:hover:text-brand-500"
                >
                  {title}
                </Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-500 mb-4 line-clamp-3">
                {description}
              </p>
              <Button variant="secondary" href={permalink}>
                <span aria-hidden>Read More</span>
                <span className="sr-only">Read more about: ${title}</span>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
