import { useEffect, useRef } from "react";

export function useClickOutside<El extends HTMLElement>(fn: () => void) {
  const ref = useRef<El>(null);

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent | TouchEvent | FocusEvent,
    ) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      fn();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("focusin", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("focusin", handleClickOutside);
    };
  }, [ref, fn]);

  return ref;
}
