import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";

interface PaginationBulletProps {
  isActive: boolean;
  onClick: () => void;
  slideNumber: number;
}

export const PaginationBullet = ({
  isActive,
  onClick,
  slideNumber,
}: PaginationBulletProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const className = clsx(
    "w-2.5 h-2.5 rounded-full transition-colors",
    isActive
      ? isDark
        ? "bg-gray-300"
        : "bg-gray-700"
      : isDark
        ? "bg-gray-700"
        : "bg-gray-400",
  );

  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={`Go to slide ${slideNumber}`}
    />
  );
};

export default PaginationBullet;
