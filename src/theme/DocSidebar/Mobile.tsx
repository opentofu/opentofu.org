import React from "react";
import {
  NavbarSecondaryMenuFiller,
  type NavbarSecondaryMenuComponent,
} from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import DocSidebarItems from "@theme/DocSidebarItems";
import type { Props } from "@theme/DocSidebar/Mobile";

const DocSidebarMobileSecondaryMenu: NavbarSecondaryMenuComponent<Props> = ({
  sidebar,
  path,
}) => {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <ul>
      <DocSidebarItems
        items={sidebar}
        activePath={path}
        onItemClick={(item) => {
          // Mobile sidebar should only be closed if the category has a link
          if (item.type === "category" && item.href) {
            mobileSidebar.toggle();
          }
          if (item.type === "link") {
            mobileSidebar.toggle();
          }
        }}
        level={1}
      />
    </ul>
  );
};

function DocSidebarMobile(props: Props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default React.memo(DocSidebarMobile);
