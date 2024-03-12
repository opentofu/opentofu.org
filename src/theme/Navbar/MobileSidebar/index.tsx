import React from "react";
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import IconClose from "@theme/Icon/Close";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarMobileSidebarPrimaryMenu from "@theme/Navbar/MobileSidebar/PrimaryMenu";
import NavbarMobileSidebarSecondaryMenu from "@theme/Navbar/MobileSidebar/SecondaryMenu";
import clsx from "clsx";

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label="Close navigation bar"
      className="absolute top-6 right-6 p-3 sm:p-4 text-gray-900 hover:text-brand-650 dark:text-gray-50 dark:hover:text-brand-500 transition-colors"
      onClick={() => mobileSidebar.toggle()}
    >
      <IconClose />
    </button>
  );
}

export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar();

  useLockBodyScroll(mobileSidebar.shown);

  return (
    <div
      className={clsx(
        "fixed overflow-y-auto top-0 left-0 bottom-0 w-4/5 sm:w-3/5 md:w-2/5 p-6 transition-all flex flex-col bg-gray-150 dark:bg-gray-850 z-10",
        mobileSidebar.shown
          ? "visible translate-x-0"
          : "invisible -translate-x-full",
      )}
    >
      <NavbarLogo />
      <NavbarColorModeToggle className="my-6" />
      <CloseButton />
      <NavbarMobileSidebarPrimaryMenu />

      <NavbarMobileSidebarSecondaryMenu />
    </div>
  );
}
