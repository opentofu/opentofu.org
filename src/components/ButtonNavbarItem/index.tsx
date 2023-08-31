import React from "react";
import Button from "../Button";

type ButtonNavbarItemProps = {
  label: string;
  href: string;
};

export default function ButtonNavbarItem({
  label,
  href,
}: ButtonNavbarItemProps) {
  return (
    <Button variant="primary" href={href}>
      {label}
    </Button>
  );
}
