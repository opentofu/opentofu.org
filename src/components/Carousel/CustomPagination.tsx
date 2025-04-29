import React from "react";
import PaginationBullet from "./PaginationBullet";

interface CustomPaginationProps {
  totalSlides: number;
  activeIndex: number;
  onBulletClick: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const CustomPagination = ({
  totalSlides,
  activeIndex,
  onBulletClick,
  onPrev,
  onNext,
}: CustomPaginationProps) => {
  const arrowClassName =
    "p-1.5 rounded-full transition-colors text-gray-700 dark:text-gray-300";

  return (
    <div className="flex items-center justify-center gap-4">
      {/* Left Arrow */}
      <button
        onClick={onPrev}
        className={arrowClassName}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="flex gap-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <PaginationBullet
            key={index}
            isActive={index === activeIndex}
            onClick={() => onBulletClick(index)}
            slideNumber={index + 1}
          />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={onNext}
        className={arrowClassName}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomPagination;
