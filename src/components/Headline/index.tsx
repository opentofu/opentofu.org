import clsx from "clsx";
import React from "react";

type HeadlineProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Headline({ children, className }: HeadlineProps) {
  return (
    <h1
      className={clsx(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-normal lg:leading-tight tracking-wider text-center px-4",
        className,
      )}
    >
      {children}
    </h1>
  );
}
