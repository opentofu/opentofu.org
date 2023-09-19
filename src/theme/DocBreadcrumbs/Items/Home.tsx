import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import IconHome from "@theme/Icon/Home";

export default function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl("/docs");

  return (
    <li>
      <Link aria-label="Documentation" href={homeHref}>
        <IconHome className="w-6" aria-hidden />
      </Link>
    </li>
  );
}
