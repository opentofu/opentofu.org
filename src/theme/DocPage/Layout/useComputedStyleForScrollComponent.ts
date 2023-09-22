import { useEffect, useState } from "react";

const HEADER_HEIGHT = 96;
const FOOTER_HEIGHT = 108;
const SCROLL_REFRESH_TIME = 50;
const MIN_SCREEN_WIDTH_FOR_VISIBLE_SIDEBAR = 1024;

function getOpositeHeight() {
  const topOpositeheight = Math.max(0, HEADER_HEIGHT - window.scrollY);
  const bottomOpositeheight = Math.max(
    0,
    document.documentElement.offsetHeight -
      document.documentElement.scrollHeight +
      window.scrollY +
      FOOTER_HEIGHT,
  );

  return Math.max(topOpositeheight, bottomOpositeheight);
}
export function useComputedStyleForScrollComponent() {
  const [opositeHeight, setOpositeHeight] = useState(HEADER_HEIGHT);

  useEffect(() => {
    let isTimeoutRunning = false;
    let timeout: NodeJS.Timeout;
    const scrollHandler = () => {
      const newOpositeheight = getOpositeHeight();

      if (!isTimeoutRunning && newOpositeheight !== opositeHeight) {
        isTimeoutRunning = true;
        timeout = setTimeout(() => {
          isTimeoutRunning = false;
          setOpositeHeight(getOpositeHeight());
        }, SCROLL_REFRESH_TIME);
      }
    };

    if (window.innerWidth >= MIN_SCREEN_WIDTH_FOR_VISIBLE_SIDEBAR) {
      document.addEventListener("scroll", scrollHandler);

      return () => {
        document.removeEventListener("scroll", scrollHandler);
        clearTimeout(timeout);
      };
    }
  }, [opositeHeight]);

  useEffect(() => {
    if (
      window.innerWidth >= MIN_SCREEN_WIDTH_FOR_VISIBLE_SIDEBAR &&
      window.scrollY > 0
    ) {
      setOpositeHeight(getOpositeHeight());
    }
  }, []);

  return {
    height: `calc(100vh - ${opositeHeight}px)`,
    transition: "height 0.2s ease-in-out",
    bottom: "100px",
  };
}
