import React from "react";
import clsx from "clsx";

type TextContentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TextContent({ children, className }: TextContentProps) {
  return (
    <div className="bg-white flex-1">
      <div
        className={clsx(
          "prose lg:prose-xl mx-auto prose-h3:text-5xl prose-h3:leading-normal prose-li:marker:text-inherit prose-a:text-gray-600 my-14 text-gray-600",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
