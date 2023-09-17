import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LogoSvg from "@site/static/img/logo.svg";

export default function Logo() {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();

  const logoLink = useBaseUrl("/");

  return (
    <Link
      to={logoLink}
      className="text-gray-900 dark:text-gray-50"
      aria-label={title}
    >
      <LogoSvg aria-hidden className="h-12 mb-3" />
    </Link>
  );
}
