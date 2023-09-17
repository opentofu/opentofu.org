import React from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";

export default function MobileSidebarToggle() {
  const { toggle, shown } = useNavbarMobileSidebar();
  return (
    <button
      onClick={toggle}
      aria-expanded={shown}
      className="flex xl:hidden text-gray-900 dark:text-gray-50"
      type="button"
      aria-label={shown ? "Close menu" : "Open menu"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden
      >
        <path
          d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          className="fill-current"
        />
      </svg>
    </button>
  );
}
