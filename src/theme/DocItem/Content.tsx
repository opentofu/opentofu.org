import React from "react";
import clsx from "clsx";
import MDXContent from "@theme/MDXContent";

const classNames = [
  "prose",
  "lg:prose-lg",
  "text-gray-900",
  "dark:text-gray-100",
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
  "prose-code:text-current",
  "dark:prose-code:text-current",
  "dark:prose-code:border-gray-600",
  "prose-code:before:content-none",
  "prose-code:after:content-none",

  // <a>
  "prose-a:text-current",
  "hover:prose-a:text-black/50",
  "dark:prose-a:text-current",
  "dark:hover:prose-a:text-white/50",

  // <strong>
  "prose-strong:text-current",
  "dark:prose-strong:text-current",

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
