import React from "react";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import type {
  DesktopOrMobileNavBarItemProps,
  Props,
} from "@theme/NavbarItem/DefaultNavbarItem";
import clsx from "clsx";

function DefaultNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const element = (
    <NavbarNavLink
      className={clsx("font-bold text-gray-900 dark:text-gray-50", className)}
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
  return (
    <NavbarNavLink
      className={clsx("font-bold text-gray-900 dark:text-gray-50", className)}
      {...props}
    />
  );
}

export default function DefaultNavbarItem({
  mobile = false,
  position,
  ...props
}: Props) {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  return <Comp {...props} activeClassName={props.activeClassName} />;
}
