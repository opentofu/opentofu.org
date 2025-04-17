import React from "react";
import styles from "./styles.module.css";

export default function PatternBg() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 -z-20" aria-hidden>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-gray-50 dark:to-blue-950" />
      <div className={`${styles.bg} w-full h-full opacity-5`} />
    </div>
  );
}
