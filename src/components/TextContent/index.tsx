import React from "react";
import clsx from "clsx";

type TextContentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TextContent({ children, className }: TextContentProps) {
  return (
    <div
      className={clsx(
        "prose lg:prose-lg mx-auto prose-h3:text-gray-900 dark:prose-h3:text-gray-50 prose-h3:text-2xl prose-h3:leading-snug md:prose-h3:text-5xl md:prose-h3:leading-normal prose-li:marker:text-inherit prose-a:text-inherit px-5 md:px-0 text-gray-600 dark:text-gray-500 mb-10",
        className
      )}
    >
      {children}
    </div>
  );
}
