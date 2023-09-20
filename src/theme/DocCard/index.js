import React from "react";
import Link from "@docusaurus/Link";
import {
  findFirstCategoryLink,
  useDocById,
} from "@docusaurus/theme-common/internal";

function CardLayout({ href, title, description }) {
  return (
    <div className="not-prose relative group flex flex-col gap-2 border border-gray-900 dark:border-gray-50 rounded-md p-4">
      <h2>
        <Link
          href={href}
          className="text-gray-900 dark:text-gray-50 hover:text-brand-700 dark:hover:text-brand-500 font-bold"
        >
          <span aria-hidden className="absolute inset-0"></span>
          {title}
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
function CardCategory({ item }) {
  const href = findFirstCategoryLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout href={href} title={item.label} description={item.description} />
  );
}
function CardLink({ item }) {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  );
}
export default function DocCard({ item }) {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
