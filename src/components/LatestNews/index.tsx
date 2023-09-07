import React from "react";
import Logo from "./big-logo.svg";
import Button from "../Button";
import Link from "@docusaurus/Link";

export default function LatestNews({ recentPosts }) {
  console.log(recentPosts[0]);
  const {
    metadata: { title, formattedDate, frontMatter, permalink },
    Preview,
  } = recentPosts[0];

  return (
    <section className="dark:text-[#F6F6F6] flex flex-col justify-center w-full py-10 md:py-20 px-6">
      <div className="w-full max-w-3xl mx-auto">
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12">
          Latest News
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to={permalink}>
            <img src={frontMatter.image_url} alt={title} />
          </Link>
          <div className="flex flex-col items-start">
            <span className="text-purple-400 font-bold">{formattedDate}</span>
            <h4 className="text-3xl font-bold dark:text-[#E7E9EC] leading-snug mt-2">
              {title}
            </h4>

            <div className="prose dark:prose-invert line-clamp-3 mt-2 mb-4">
              <Preview />
            </div>
            <Button variant="secondary" href={permalink}>
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
