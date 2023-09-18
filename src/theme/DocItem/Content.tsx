import React from "react";
import clsx from "clsx";
import MDXContent from "@theme/MDXContent";

const classNames = [
  "prose",
  "lg:prose-lg",
  "text-gray-800",
  "dark:text-gray-200",
  "dark:prose-invert",
  "marker:text-gray-600",
  "dark:marker:text-gray-400",
  "max-w-none",

  // <hr>
  "prose-hr:my-6",
  "prose-hr:border-gray-200",
  "prose-hr:border-solid",
  "dark:prose-hr:border-gray-800",

  // <pre>
  "prose-pre:bg-blue-900",

  // <code>
  "prose-code:px-1.5",
  "prose-code:text-gray-800",
  "dark:prose-code:text-gray-200",
  "dark:prose-code:border-gray-600",
  "prose-code:before:content-none",
  "prose-code:after:content-none",

  // <a>
  "prose-a:text-gray-800",
  "hover:prose-a:text-black",
  "dark:prose-a:text-gray-200",
  "dark:hover:prose-a:text-white",

  // <strong>
  "prose-strong:text-gray-800",
  "dark:prose-strong:text-gray-200",

  // <h1>, <h2>, <h3>
  "prose-h1:text-4xl",
  "prose-h2:text-3xl",
  "prose-h3:text-2xl",
];

export default function DocItemContent({ children }) {
  return (
    <div className={clsx(classNames)}>
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
