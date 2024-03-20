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
      className={clsx(
        "flex items-center font-bold text-gray-900 dark:text-gray-50 hover:text-brand-500 dark:hover:text-brand-500 menu-text",
        className,
      )}
      isDropdownLink={isDropdownItem}
      {...props}
    />
  );

  return element;
}

function DefaultNavbarItemMobile({
  className,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  return (
    <NavbarNavLink
      className={clsx(
        "flex items-center font-bold text-gray-900 dark:text-gray-50 hover:text-gray-900 dark:hover:text-brand-500 ",
        className,
      )}
      {...props}
    />
  );
}

export default function DefaultNavbarItem({
  mobile = false,
  activeClassName,
  ...props
}: Props) {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  return (
    <Comp {...props} activeClassName={clsx(activeClassName, "underline")} />
  );
}
