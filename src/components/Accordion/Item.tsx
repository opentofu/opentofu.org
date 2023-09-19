import clsx from "clsx";
import React, { useRef } from "react";

type AccordionItemProps = {
  children: React.ReactNode;
  summary: string;
  open?: boolean;
  highlight?: boolean;
};

const classNames = [
  "prose",
  "prose-h4:mb-0",
  "prose-p:my-2",
  "prose-ul:m-0",
  "dark:prose-invert",
  "marker:text-gray-600",
  "dark:marker:text-gray-400",
  "max-w-none",
  "text-gray-900",
  "dark:text-gray-100",
  "pb-6",
  "px-6",
  "leading-6",
  "mt-2",
  "text-base",
  "flex",
  "flex-col",
  "flex-wrap",
  "font-normal",

  "prose-a:text-inherit",
  "hover:prose-a:text-brand-700",
  "dark:prose-a:text-inherit",
  "dark:hover:prose-a:text-brand-500",
];

const AccordionItem = ({ summary, open, children }: AccordionItemProps) => {
  const detailsRef = useRef(null);

  const handleItemClick = () => {
    document.querySelectorAll("details.accordion-item").forEach((item) => {
      if (item !== detailsRef.current) {
        item.removeAttribute("open");
      }
    });
  };

  return (
    <details
      ref={detailsRef}
      className="accordion-item group text-lg border-b dark:border-gray-800 border-gray-200"
      open={open}
    >
      <summary
        onClick={handleItemClick}
        className="list-none py-6 px-6 group-open:pb-0 text-xl flex gap-2 cursor-pointer flex-row items-center justify-between font-medium marker:[font-size:0px]"
      >
        {summary}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 shrink-0"
          aria-hidden
        >
          <path
            d="M11.8 2a.8.8 0 0 1 .8.8V11h8.2a.8.8 0 0 1 0 1.6h-8.2v8.2a.8.8 0 0 1-1.6 0v-8.2H2.8a.8.8 0 0 1 0-1.6H11V2.8a.8.8 0 0 1 .8-.8Z"
            className="block group-open:hidden fill-current"
          />
          <path
            d="M20.8 11a.8.8 0 0 1 0 1.6h-18a.8.8 0 0 1 0-1.6h18Z"
            className="hidden group-open:block fill-current"
          />
        </svg>
      </summary>
      <div className={clsx(classNames)}>{children}</div>
    </details>
  );
};

export default AccordionItem;
