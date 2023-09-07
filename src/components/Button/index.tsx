import React from "react";
import clsx from "clsx";
import Link, { Props } from "@docusaurus/Link";

type ButtonProps = Props & {
  variant: "primary" | "secondary";
};

export default function Button({ children, variant, ...rest }: ButtonProps) {
  const Tag = "href" in rest ? Link : "button";
  return (
    <Tag
      {...rest}
      className={clsx(
        "border font-semibold h-12 px-6 flex items-center hover:no-underline transition-colors",
        variant === "primary" &&
          "bg-purple-500 text-white hover:bg-purple-600 border-purple-500 hover:border-purple-600-hover hover:text-white",
        variant === "secondary" &&
          "border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-50 bg-transparent hover:border-gray-900 dark:hover:border-gray-50 hover:text-gray-900 dark:hover:text-gray-50 aria-selected:border-gray-900 dark:aria-selected:border-gray-50"
      )}
    >
      {children}
    </Tag>
  );
}
