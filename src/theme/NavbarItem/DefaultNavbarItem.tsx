import React from "react";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import type {
  DesktopOrMobileNavBarItemProps,
  Props,
} from "@theme/NavbarItem/DefaultNavbarItem";

function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const element = (
    <NavbarNavLink
      className={className}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  );

  return element;
}

function DefaultNavbarItemMobile({
  className,
  isDropdownItem,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  return <NavbarNavLink className={className} {...props} />;
}

export default function DefaultNavbarItem({
  mobile = false,
  position,
  ...props
}: Props) {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  return <Comp {...props} activeClassName={props.activeClassName} />;
}
