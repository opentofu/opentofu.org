import React from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import ColorModeToggle from "@theme/ColorModeToggle";
import type { Props } from "@theme/Navbar/ColorModeToggle";
import clsx from "clsx";

export default function NavbarColorModeToggle({ className }: Props) {
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();

  if (disabled) {
    return null;
  }

  return (
    <ColorModeToggle
      className={clsx("text-gray-900 dark:text-gray-50", className)}
      value={colorMode}
      onChange={setColorMode}
    />
  );
}
