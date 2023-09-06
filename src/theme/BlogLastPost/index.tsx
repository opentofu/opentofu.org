import React from "react";
import PatternBg from "@site/src/components/PatternBg";
import Button from "@site/src/components/Button";

export default function BlogLastPost({ item }) {
  return (
    <div className="pt-8 pb-12 md:pt-12 md:pb-20 flex items-center justify-center">
      <PatternBg />
      <div className="max-w-7xl mx-auto">
        <article>
          <div className="flex gap-6">
            <div className="flex-1">
              <img src={item.content.frontMatter.image_url} />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start">
              <p className="text-purple-400 uppercase font-bold">
                {item.content.metadata.formattedDate}
              </p>
              <h3 className="leading-snug text-3xl font-bold my-2 line-clamp-5">
                {item.content.metadata.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {item.content.metadata.description}
              </p>
              <Button
                variant="secondary"
                href={item.content.metadata.permalink}
              >
                Read more
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
