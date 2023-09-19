import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import LogoSvg from "@site/static/img/logo.svg";

export default function Logo() {
  const logoLink = useBaseUrl("/");

  return (
    <Link
      to={logoLink}
      className="text-gray-900 hover:text-brand-700 dark:text-gray-50 dark:hover:text-brand-500"
      aria-label="Go to homepage"
    >
      <LogoSvg aria-hidden className="h-9 mb-2 sm:h-12 sm:mb-3" />
    </Link>
  );
}
