import React from "react";

export default function PatternBg() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[600px] -z-10" aria-hidden>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark1" />
      <div className="bg-[url('/img/bg.svg')] w-full h-full opacity-5" />
    </div>
  );
}
