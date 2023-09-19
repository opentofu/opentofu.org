import Link from "@docusaurus/Link";
import Button from "@site/src/components/Button";
import React from "react";

export default function BlogListItem({ item }) {
  const { permalink, title, date, formattedDate, description } =
    item.content.metadata;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex-1">
        <Link to={permalink}>
          <img src={item.content.frontMatter.image} alt={title} />
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start">
        <time
          dateTime={date}
          itemProp="datePublished"
          className="text-brand-700 dark:text-brand-500 uppercase font-bold"
        >
          {formattedDate}
        </time>

        <h3 className="leading-snug text-xl font-bold my-2 line-clamp-3">
          <Link
            to={permalink}
            className="text-gray-900 dark:text-gray-50 hover:text-brand-700 dark:hover:text-brand-500"
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
  );
}
