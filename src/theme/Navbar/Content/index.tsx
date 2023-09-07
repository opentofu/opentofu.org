import React from "react";
import { useThemeConfig, ErrorCauseBoundary } from "@docusaurus/theme-common";
import { splitNavbarItems } from "@docusaurus/theme-common/internal";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";

function NavbarItems({ items }: { items: NavbarItemConfig[] }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(`A theme navbar item failed to render.`, { cause: error })
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

export default function NavbarContent() {
  const items = useThemeConfig().navbar.items as NavbarItemConfig[];
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === "search");

  return (
    <div className="flex text-white justify-between container mx-auto p-4 sm:p-0">
      <div className="flex items-center gap-6">
        <NavbarMobileSidebarToggle />
        <NavbarLogo />
        <NavbarItems items={leftItems} />
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <NavbarItems items={rightItems} />
        <NavbarColorModeToggle />
        {!searchBarItem && (
          <NavbarSearch>
            <SearchBar />
          </NavbarSearch>
        )}
      </div>
    </div>
  );
}
