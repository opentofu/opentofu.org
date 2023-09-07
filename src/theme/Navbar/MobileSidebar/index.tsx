import React from "react";
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";

import NavbarMobileSidebarPrimaryMenu from "@theme/Navbar/MobileSidebar/PrimaryMenu";
import NavbarMobileSidebarSecondaryMenu from "@theme/Navbar/MobileSidebar/SecondaryMenu";
import clsx from "clsx";

export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar();

  useLockBodyScroll(mobileSidebar.shown);

  if (!mobileSidebar.shouldRender) {
    return null;
  }

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 bottom-0 w-4/5 p-6 transition-all flex bg-gray-850 z-10 text-white",
        mobileSidebar.shown
          ? "visible translate-x-0"
          : "invisible -translate-x-full"
      )}
    >
      <div>
        <div>
          <NavbarMobileSidebarPrimaryMenu />
        </div>
        <div>
          <NavbarMobileSidebarSecondaryMenu />
        </div>
      </div>
    </div>
  );
}
