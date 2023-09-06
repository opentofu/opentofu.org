import React from "react";
import clsx from "clsx";
import Link, { Props } from "@docusaurus/Link";

type ButtonProps = Props & {
  variant: "primary" | "secondaryOnDark" | "secondaryOnLight";
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
        variant === "secondaryOnDark" &&
          "border-gray-700 text-gray-100 bg-transparent hover:border-white hover:text-gray-100 aria-selected:border-white",
        variant === "secondaryOnLight" &&
          "border-gray-150 text-gray-900 bg-transparent hover:border-gray-900 hover:text-gray-900 aria-selected:border-gray-900"
      )}
    >
      {children}
    </Tag>
  );
}
