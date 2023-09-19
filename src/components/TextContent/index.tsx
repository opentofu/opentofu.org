import React, { HTMLProps } from "react";
import clsx from "clsx";

type TextContentProps = HTMLProps<HTMLDivElement>;

const classNames = [
  "prose",
  "lg:prose-lg",
  "text-gray-900",
  "dark:text-gray-100",
  "mx-auto",
  "mb-10",
  "px-4",
  "md:px-0",

  // <h2>
  "prose-h2:text-gray-900",
  "dark:prose-h2:text-gray-50",
  "prose-h2:text-2xl",
  "prose-h2:leading-snug",
  "md:prose-h2:text-4xl",
  "md:prose-h2:leading-normal",

  // <li>
  "prose-li:marker:text-inherit",

  // <a>
  "prose-a:text-inherit",

  // <strong>
  "prose-strong:text-inherit",
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
