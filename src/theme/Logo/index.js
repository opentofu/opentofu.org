import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LogoSvg from "@site/static/img/nav-logo.svg";

export default function Logo() {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();

  const logoLink = useBaseUrl("/");

  return (
    <Link to={logoLink}>
      <LogoSvg aria-label={title} />
    </Link>
  );
}
