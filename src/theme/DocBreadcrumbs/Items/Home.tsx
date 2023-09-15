import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import IconHome from "@theme/Icon/Home";

export default function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl("/");

  return (
    <li>
      <Link aria-label="Home page" href={homeHref}>
        <IconHome className="w-6" />
      </Link>
    </li>
  );
}
