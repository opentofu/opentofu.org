import React, { useCallback } from "react";
import { useThemeConfig, ErrorCauseBoundary } from "@docusaurus/theme-common";
import { splitNavbarItems } from "@docusaurus/theme-common/internal";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import clsx from "clsx";
import { useClickOutside } from "@site/src/utils/useClickOutside";

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
  const [isSearchVisible, setSearchVisibility] = React.useState(false);

  const callback = useCallback(() => setSearchVisibility(false), []);

  const searchWrapperRef = useClickOutside<HTMLDivElement>(callback);

  return (
    <div className="flex text-white justify-between container mx-auto p-4 sm:p-0 navbar">
      <div className="flex items-center gap-6">
        <NavbarMobileSidebarToggle />
        <NavbarLogo />
        <div className="hidden md:flex items-center gap-6">
          <NavbarItems items={leftItems} />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <SearchBar />

        {!isSearchVisible && (
          <div className="items-center gap-6 hidden xl:flex">
            <NavbarItems items={rightItems} />
            <NavbarColorModeToggle />
          </div>
        )}
      </div>
    </div>
  );
}
