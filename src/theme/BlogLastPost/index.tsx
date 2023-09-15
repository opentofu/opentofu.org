import React from "react";
import PatternBg from "@site/src/components/PatternBg";
import Button from "@site/src/components/Button";
import Link from "@docusaurus/Link";

export default function BlogLastPost({ item }) {
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
                className="text-purple-400 uppercase font-bold"
              >
                {formattedDate}
              </time>
              <Link to={permalink}>
                <h3 className="leading-snug text-3xl font-bold my-2 line-clamp-5">
                  {title}
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-500 mb-4 line-clamp-3">
                {description}
              </p>
              <Button variant="secondary" href={permalink}>
                Read more
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
