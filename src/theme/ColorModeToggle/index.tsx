import React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import type { Props } from "@theme/ColorModeToggle";

export default function ColorModeToggle({ value, onChange }: Props) {
  const isBrowser = useIsBrowser();

  const title = `Switch between dark and light mode (currently ${
    value === "dark" ? "dark mode" : "light mode"
  })`;

  return (
    <button
      type="button"
      onClick={() => onChange(value === "dark" ? "light" : "dark")}
      disabled={!isBrowser}
      title={title}
      aria-label={title}
      aria-live="polite"
    >
      {value === "dark" ? "light" : "dark"}
    </button>
  );
}
