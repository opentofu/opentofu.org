import React from "react";

import styles from "./index.module.css";

export default function Pattern() {
  return (
    <svg className={styles.grid} aria-hidden="true">
      <defs>
        <pattern
          id="grid"
          width="120"
          height="120"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 120V.5H120" fill="none" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" stroke-width="0" fill="url(#grid)" />
    </svg>
  );
}
