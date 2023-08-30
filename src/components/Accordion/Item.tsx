import React, { useRef } from "react";

type AccordionItemProps = {
  children: React.ReactNode;
  summary: string;
  open?: boolean;
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
      className="accordion-item group text-lg"
      open={open}
    >
      <summary
        onClick={handleItemClick}
        className="py-6 px-6 group-open:pb-0 text-xl flex cursor-pointer flex-row items-center justify-between  font-medium marker:[font-size:0px]"
      >
        {summary}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className="h-6 w-6 rotate-0 transform text-gray-400 block group-open:hidden"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.35271C12.4418 2.35271 12.8 2.71088 12.8 3.15271V11.3527H21C21.4418 11.3527 21.7999 11.7109 21.7999 12.1527C21.7999 12.5945 21.4418 12.9527 21 12.9527H12.8V21.1527C12.8 21.5945 12.4418 21.9527 12 21.9527C11.5581 21.9527 11.2 21.5945 11.2 21.1527V12.9527H2.99995C2.55812 12.9527 2.19995 12.5945 2.19995 12.1527C2.19995 11.7109 2.55812 11.3527 2.99995 11.3527H11.2V3.15271C11.2 2.71088 11.5581 2.35271 12 2.35271Z"
            fill="#0C192B"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className="h-6 w-6 rotate-0 transform text-gray-400 hidden group-open:block"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 11.3527C12.4418 11.3527 12.8 11.3527 12.8 11.3527L21 11.3527C21.4418 11.3527 21.7999 11.7109 21.7999 12.1527C21.7999 12.5945 21.4418 12.9527 21 12.9527H12.8C12.8 12.9527 12.4418 12.9527 11.9999 12.9527C11.5581 12.9527 11.2 12.9527 11.2 12.9527H2.99995C2.55812 12.9527 2.19995 12.5945 2.19995 12.1527C2.19995 11.7109 2.55812 11.3527 2.99995 11.3527H11.2C11.2 11.3527 11.5581 11.3527 11.9999 11.3527Z"
            fill="#0C192B"
          />
        </svg>
      </summary>
      <p className="pb-6 px-6 leading-6 mt-2 text-base text-[#5F6671] font-normal">
        {children}
      </p>
    </details>
  );
};

export default AccordionItem;
