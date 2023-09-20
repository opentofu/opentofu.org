import React, { JSXElementConstructor } from "react";
import Button from "../Button";
import Link from "@docusaurus/Link";

export type RecentPost = {
  metadata: {
    title: string;
    date: string;
    formattedDate: string;
    permalink: string;
    frontMatter: {
      image: string;
    };
  };
  Preview: JSXElementConstructor<unknown>;
};

type LatestNewsProps = {
  recentPosts: RecentPost[];
};

export default function LatestNews({ recentPosts }: LatestNewsProps) {
  const {
    metadata: { title, formattedDate, date, frontMatter, permalink },
    Preview,
  } = recentPosts[0];

  return (
    <section className="flex flex-col justify-center w-full py-10 md:py-20 px-4 bg-gradient-to-b from-white dark:from-blue-900 to-transparent">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to={permalink} aria-label={`Read more about: ${title}`}>
            <img src={frontMatter.image} alt={title} />
          </Link>
          <div className="flex flex-col items-start">
            <time
              dateTime={date}
              itemProp="datePublished"
              className="text-brand-700 dark:text-brand-500 font-bold uppercase"
            >
              {formattedDate}
            </time>
            <h3 className="text-3xl font-bold leading-snug mt-2">
              <Link
                href={permalink}
                className="text-gray-900 dark:text-gray-50 hover:text-brand-700 dark:hover:text-brand-500"
              >
                {title}
              </Link>
            </h3>

            <div className="prose dark:prose-invert line-clamp-3 mt-2 mb-4 text-gray-600 dark:text-gray-500">
              <Preview />
            </div>
            <Button variant="secondary" href={permalink}>
              <span aria-hidden>Read More</span>
              <span className="sr-only">Read more about: {title}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
