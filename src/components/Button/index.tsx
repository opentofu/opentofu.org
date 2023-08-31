import React from "react";
import clsx from "clsx";
import Link, { Props } from "@docusaurus/Link";

type ButtonProps = Props & {
  variant: "primary" | "secondary";
};

export default function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <Link
      {...rest}
      className={clsx(
        "border font-semibold text-white h-12 px-6 flex items-center hover:no-underline transition-colors",
        variant === "primary" &&
          "bg-primary-base hover:bg-primary-hover border-primary-base hover:border-primary-hover hover:text-white",
        variant === "secondary" &&
          "border-gray-700 bg-transparent hover:border-white hover:text-white"
      )}
    >
      {children}
    </Link>
  );
}
