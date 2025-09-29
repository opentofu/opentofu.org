import Link from "@docusaurus/Link";
import React from "react";
import { PropBlogPostContent } from "@docusaurus/plugin-content-blog";

type BlogListItemProps = {
  item: {
    content: PropBlogPostContent;
  };
  isLatestPost?: boolean;
};

export default function BlogListItem({
  item,
  isLatestPost: isLatest = false,
}: BlogListItemProps) {
  const { permalink, title, date, formattedDate, description } =
    item.content.metadata;

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <time
            dateTime={date}
            itemProp="datePublished"
            className="text-brand-650 dark:text-brand-500 uppercase font-bold"
          >
            {formattedDate}
          </time>
          {isLatest && (
            <span className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-blue-600/90 text-white dark:bg-blue-500/90">
              Latest
            </span>
          )}
        </div>

        <h3 className="leading-snug text-xl font-bold mt-2 mb-2 line-clamp-3">
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
        <Link
          to={permalink}
          className="text-brand-650 dark:text-brand-500 hover:text-brand-700 dark:hover:text-brand-400 text-sm font-medium"
        >
          Read More →
        </Link>
      </div>
      {item.content.frontMatter.image && (
        <div className="w-32 flex items-center">
          <Link to={permalink} className="block w-full">
            <img
              src={item.content.frontMatter.image}
              alt={title}
              className="w-full h-auto object-cover rounded"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
