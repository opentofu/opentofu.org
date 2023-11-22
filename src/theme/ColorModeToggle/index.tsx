import React from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import ColorModeToggleIcon from "./Icon";
function ColorModeToggle({ className, buttonClassName, value, onChange }) {
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the navbar color mode toggle",
    },
    {
      mode:
        value === "dark"
          ? translate({
              message: "dark mode",
              id: "theme.colorToggle.ariaLabel.mode.dark",
              description: "The name for the dark color mode",
            })
          : translate({
              message: "light mode",
              id: "theme.colorToggle.ariaLabel.mode.light",
              description: "The name for the light color mode",
            }),
    }
  );
  return (
    <div className={className}>
      <button
        className={clsx(
          !isBrowser && "cursor-not-allowed",
          "flex gap-2 items-center"
        )}
        type="button"
        onClick={() => onChange(value === "dark" ? "light" : "dark")}
        disabled={!isBrowser}
        title={title}
        aria-label={title}
        aria-live="polite"
      >
        <ColorModeToggleIcon mode="light" />
        <div
          className={clsx(
            "relative p-1 h-4 w-7",
            "transition-all duration-200",
            "ring-1 ring-inset rounded-3xl ring-gray-900 dark:ring-light2",
            "bg-gray-100 dark:bg-dark2",
            buttonClassName
          )}
        >
          <div className="transition-all duration-200 absolute left-1 dark:left-4 rounded w-2 h-2 bg-gray-900 dark:bg-light2"></div>
        </div>
        <ColorModeToggleIcon mode="dark" />
      </button>
    </div>
  );
}
export default React.memo(ColorModeToggle);
