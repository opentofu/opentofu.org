import React from "react";
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
  const className = clsx(
    "w-2.5 h-2.5 rounded-full transition-colors",
    isActive ? "bg-gray-700 dark:bg-gray-300" : "bg-gray-400 dark:bg-gray-700",
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
