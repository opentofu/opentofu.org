import { useState, useEffect } from "react";

export function useTheme(): boolean {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Safe to access DOM after hydration
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    setIsDarkTheme(isDark);

    // Set up observer to detect theme changes
    const observer = new MutationObserver(() => {
      const newIsDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      setIsDarkTheme(newIsDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Clean up observer on unmount
    return () => observer.disconnect();
  }, []);

  return isDarkTheme;
}
