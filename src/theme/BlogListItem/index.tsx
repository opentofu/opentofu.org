import Link from "@docusaurus/Link";
import Button from "@site/src/components/Button";
import React from "react";

export default function BlogListItem({ item }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex-1">
        <img src={item.content.frontMatter.image_url} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start">
        <p className="text-purple-400 uppercase font-bold">
          {item.content.metadata.formattedDate}
        </p>
        <Link to={item.content.metadata.permalink}>
          <h3 className="leading-snug text-xl font-bold my-2 line-clamp-3 text-gray-900">
            {item.content.metadata.title}
          </h3>
        </Link>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {item.content.metadata.description}
        </p>
        <Button variant="secondary" href={item.content.metadata.permalink}>
          Read more
        </Button>
      </div>
    </div>
  );
}
