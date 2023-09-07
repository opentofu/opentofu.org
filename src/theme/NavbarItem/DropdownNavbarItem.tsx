import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import NavbarItem from "@theme/NavbarItem";
import type {
  DesktopOrMobileNavBarItemProps,
  Props,
} from "@theme/NavbarItem/DropdownNavbarItem";

function DropdownNavbarItemDesktop({
  items,
  position,
  className,
  onClick,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent | TouchEvent | FocusEvent
    ) => {
      if (
        !dropdownRef.current ||
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setShowDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("focusin", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("focusin", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="group">
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        href={props.to ? undefined : "#"}
        className={clsx("peer", className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <div className="absolute bg-gray-700 p-3 gap-3 hidden group-hover:flex peer-aria-expanded:flex flex-col rounded-md w-36">
        {items.map((childItemProps, i) => (
          <NavbarItem isDropdownItem {...childItemProps} key={i} />
        ))}
      </div>
    </div>
  );
}

function DropdownNavbarItemMobile({
  items,
  className,
  position,
  onClick,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  return (
    <>
      <NavbarNavLink role="button" className={className} {...props}>
        {props.children ?? props.label}
      </NavbarNavLink>

      {items.map((childItemProps, i) => (
        <NavbarItem
          mobile
          isDropdownItem
          onClick={onClick}
          className="ml-5"
          {...childItemProps}
          key={i}
        />
      ))}
    </>
  );
}

export default function DropdownNavbarItem({
  mobile = false,
  ...props
}: Props) {
  const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop;
  return <Comp {...props} />;
}
