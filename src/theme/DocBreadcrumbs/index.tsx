import React, { type ReactNode } from "react";
import {
  useSidebarBreadcrumbs,
  useHomePageRoute,
} from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";

import HomeBreadcrumbItem from "@theme/DocBreadcrumbs/Items/Home";

type BreadcrumbsItemLinkProps = {
  children: ReactNode;
  href: string | undefined;
  isLast: boolean;
};

function BreadcrumbsItemLink({
  children,
  href,
  isLast,
}: BreadcrumbsItemLinkProps) {
  if (isLast) {
    return (
      <span className="text-gray-600 dark:text-gray-500" itemProp="name">
        {children}
      </span>
    );
  }
  return href ? (
    <Link
      href={href}
      className="text-gray-900 dark:text-gray-50 hover:text-brand-650 dark:hover:text-brand-500"
      itemProp="item"
    >
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    <span className="font-bold">{children}</span>
  );
}

function BreadcrumbsItem({
  children,
  index,
  addMicrodata,
}: {
  children: ReactNode;
  index: number;
  addMicrodata: boolean;
}) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: "itemListElement",
        itemType: "https://schema.org/ListItem",
      })}
      className="flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        className="w-4 text-gray-300 dark:text-gray-700"
        aria-hidden
      >
        <path
          className="fill-current"
          d="M5.522 13.734a.567.567 0 0 1 0-.802L10.455 8 5.522 3.067a.567.567 0 1 1 .802-.801L12.058 8l-5.734 5.734a.567.567 0 0 1-.802 0Z"
        />
      </svg>
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}

export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumbs">
      <ul
        className="flex gap-2 items-center"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {homePageRoute && <HomeBreadcrumbItem />}
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <BreadcrumbsItem key={idx} index={idx} addMicrodata={!!item.href}>
              <BreadcrumbsItemLink href={item.href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        })}
      </ul>
    </nav>
  );
}
