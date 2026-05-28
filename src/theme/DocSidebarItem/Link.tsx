import React from "react";
import clsx from "clsx";
import { isActiveSidebarItem } from "@docusaurus/plugin-content-docs/client";
import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import IconExternalLink from "@theme/Icon/ExternalLink";
import type { Props } from "@theme/DocSidebarItem/Link";

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  ...props
}: Props) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li className={className} key={label}>
      <Link
        className={clsx("flex py-2 px-4 ", {
          "bg-brand-500 dark:bg-brand-800 text-gray-900 hover:text-gray-900 dark:text-brand-600 dark:hover:text-brand-600":
            isActive,
          "hover:text-brand-650 dark:hover:text-brand-600": !isActive,
        })}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? "page" : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
