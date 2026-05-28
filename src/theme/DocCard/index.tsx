import React from "react";
import Link from "@docusaurus/Link";
import {
  findFirstSidebarItemLink,
  useDocById,
} from "@docusaurus/plugin-content-docs/client";
import type {
  PropSidebarItemCategory,
  PropSidebarItem,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";

type CardLayoutProps =
  | Pick<PropSidebarItemCategory, "href" | "label" | "description">
  | Pick<PropSidebarItemLink, "href" | "label" | "description">;

function CardLayout({ href, label, description }: CardLayoutProps) {
  return (
    <div className="not-prose relative group flex flex-col gap-2 border border-gray-900 dark:border-gray-50 rounded-md p-4">
      <h2>
        <Link
          href={href}
          className="text-gray-900 dark:text-gray-50 hover:text-brand-650 dark:hover:text-brand-500 font-bold"
        >
          <span aria-hidden className="absolute inset-0"></span>
          {label}
        </Link>
      </h2>
      {description && (
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description}
        </p>
      )}
    </div>
  );
}

type CardCategoryProps = {
  item: PropSidebarItemCategory;
};

function CardCategory({ item }: CardCategoryProps) {
  const href = findFirstSidebarItemLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout href={href} label={item.label} description={item.description} />
  );
}

type CardLinkProps = {
  item: PropSidebarItemLink;
};

function CardLink({ item }: CardLinkProps) {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      label={item.label}
      description={item.description ?? doc?.description}
    />
  );
}

type DocCardProps = { item: PropSidebarItem };

export default function DocCard({ item }: DocCardProps) {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
