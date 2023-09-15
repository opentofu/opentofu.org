import React from "react";

import { useNavbarSecondaryMenu } from "@docusaurus/theme-common/internal";

export default function NavbarMobileSidebarSecondaryMenu() {
  const secondaryMenu = useNavbarSecondaryMenu();
  return <div className="mt-6 text-lg">{secondaryMenu.content}</div>;
}
