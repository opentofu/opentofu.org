import React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";

import IconLightMode from "@theme/Icon/LightMode";
import IconDarkMode from "@theme/Icon/DarkMode";
import type { Props } from "@theme/ColorModeToggle";

function ColorModeToggle({ value, onChange }: Props) {
  const isBrowser = useIsBrowser();

  const title = `Switch between dark and light mode (currently ${
    value === "dark" ? "dark mode" : "light mode"
  })`;

  return (
    <button
      className="transition-colors text-gray-900 hover:text-brand-500 dark:text-gray-50 dark:hover:text-brand-500 link"
      type="button"
      onClick={() => onChange(value === "dark" ? "light" : "dark")}
      disabled={!isBrowser}
      title={title}
      aria-label={title}
      aria-live="polite"
    >
      {value === "light" && <IconLightMode />}
      {value === "dark" && <IconDarkMode />}
    </button>
  );
}

export default React.memo(ColorModeToggle);
