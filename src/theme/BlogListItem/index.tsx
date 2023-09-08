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
          <img src={item.content.frontMatter.image_url} alt={title} />
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
          <h3 className="leading-snug text-xl font-bold my-2 line-clamp-3">
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
  );
}
