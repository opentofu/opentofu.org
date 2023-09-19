import React from "react";
import clsx from "clsx";
import Link, { Props } from "@docusaurus/Link";

type ButtonProps = Props & {
  variant: "primary" | "secondary";
};

export default function Button({
  children,
  variant,
  className,
  ...rest
}: ButtonProps) {
  const Tag = "href" in rest ? Link : "button";
  return (
    <Tag
      {...rest}
      className={clsx(
        "border font-bold h-12 px-6 flex items-center hover:no-underline transition-colors",
        variant === "primary" &&
          "bg-brand-500 text-gray-900 hover:bg-brand-600 border-brand-500 hover:border-brand-600 hover:text-gray-900",
        variant === "secondary" &&
          "border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-50 bg-transparent hover:border-gray-900 dark:hover:border-gray-50 hover:text-gray-900 dark:hover:text-gray-50 aria-selected:border-gray-900 dark:aria-selected:border-gray-50",
        className
      )}
    >
      {children}
    </Tag>
  );
}
