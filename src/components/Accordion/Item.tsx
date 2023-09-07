import React, { useRef } from "react";

type AccordionItemProps = {
  children: React.ReactNode;
  summary: string;
  open?: boolean;
  highlight?: boolean;
};

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
      <div className="pb-6 px-6 leading-6 mt-2 text-base flex flex-col flex-wrap gap-4 text-gray-600 dark:text-gray-500 font-normal">
        {children}
      </div>
    </details>
  );
};

export default AccordionItem;
