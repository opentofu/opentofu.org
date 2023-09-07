import React from "react";
import clsx from "clsx";
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
      className={clsx(
        isDropdownItem ? "dropdown__link" : "navbar__item navbar__link",
        className
      )}
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
  return <NavbarNavLink className={clsx("menu__link", className)} {...props} />;
}

export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: Props) {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;
  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile ? "menu__link--active" : "navbar__link--active")
      }
    />
  );
}
