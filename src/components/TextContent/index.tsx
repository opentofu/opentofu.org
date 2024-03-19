import React, { HTMLProps } from "react";
import clsx from "clsx";

type TextContentProps = HTMLProps<HTMLDivElement>;

const classNames = [
  "prose",
  "dark:prose-invert",
  "lg:prose-lg",

  "max-w-full md:max-w-prose",

  "text-gray-900",
  "dark:text-gray-100",

  "marker:text-gray-600",
  "dark:marker:text-gray-400",

  // <hr>
  "prose-hr:my-6",
  "prose-hr:border-gray-200",
  "prose-hr:border-solid",
  "dark:prose-hr:border-gray-800",

  // <pre>
  "prose-pre:bg-blue-900",

  // <code>
  "prose-code:px-1.5",
  "prose-code:font-normal",
  "prose-code:text-inherit",
  "prose-code:prose-a:font-bold",
  "dark:prose-code:text-inherit",
  "dark:prose-code:border-gray-600",
  "prose-code:before:content-none",
  "prose-code:after:content-none",

  // <a>
  "prose-a:text-inherit",
  "hover:prose-a:text-brand-650",
  "dark:prose-a:text-inherit",
  "dark:hover:prose-a:text-brand-500",

  // <strong>
  "prose-strong:text-current",
  "dark:prose-strong:text-current",

  // <h1>, <h2>, <h3>
  "prose-h1:text-3xl",
  "prose-h2:text-2xl",
  "prose-h3:text-xl",
  "prose-headings:text-gray-900",
  "dark:prose-headings:text-gray-50",

  // <th>, <td>
  "prose-th:!px-3",
  "prose-td:!px-3",
];

export default function TextContent({
  children,
  className,
  ...rest
}: TextContentProps) {
  return (
    <div className={clsx(classNames, className)} {...rest}>
      {children}
    </div>
  );
}
