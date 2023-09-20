import React, { type ComponentProps } from "react";
import clsx from "clsx";

import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";

import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import type { Props } from "@theme/Navbar/Layout";

function NavbarBackdrop(props: ComponentProps<"div">) {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <div
      role="presentation"
      {...props}
      className={clsx(
        "fixed inset-0 bg-black transition-all z-10",
        mobileSidebar.shown
          ? "bg-opacity-75 visible"
          : "bg-opacity-0 invisible",
      )}
    />
  );
}

export default function NavbarLayout({ children }: Props) {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <nav className="h-16 sm:h-24 flex items-center" role="navigation">
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}
