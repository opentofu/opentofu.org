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
          "bg-primary-base text-white hover:bg-primary-hover border-primary-base hover:border-primary-hover hover:text-white",

        variant === "secondary" &&
          "border-gray-150 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-transparent hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-gray-100 aria-selected:border-gray-900 dark:aria-selected:border-white"
      )}
    >
      {children}
    </Tag>
  );
}
