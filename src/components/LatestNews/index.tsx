import React from "react";
import Logo from "./big-logo.svg";
import Button from "../Button";

export default function LatestNews({ recentPosts }) {
  console.log(recentPosts[0]);
  const {
    metadata: { title, formattedDate, permalink },
    Preview,
  } = recentPosts[0];

  return (
    <section className="text-[#F6F6F6] flex flex-col justify-center w-full py-10 md:py-20 px-6">
      <div className="w-full max-w-3xl mx-auto">
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12">
          Latest News
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark2 w-full flex justify-center py-20 px-16">
            <Logo />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[#A965FF] font-bold">{formattedDate}</span>
            <h4 className="text-3xl font-bold text-[#E7E9EC] leading-snug mt-2">
              {title}
            </h4>

            <p className="text-[#8590A2] line-clamp-3 mt-2 mb-4">
              <Preview />
            </p>
            <Button variant="secondaryOnDark" href={permalink}>
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
