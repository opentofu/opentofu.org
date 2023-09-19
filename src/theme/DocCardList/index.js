import React from "react";
import clsx from "clsx";
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from "@docusaurus/theme-common";
import DocCard from "@theme/DocCard";
function DocCardListForCurrentSidebarCategory({ className }) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}
export default function DocCardList(props) {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section
      className={clsx(
        "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full",
        className
      )}
    >
      {filteredItems.map((item, index) => (
        <DocCard item={item} key={index} />
      ))}
    </section>
  );
}
