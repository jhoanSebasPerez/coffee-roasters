import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export function useWidthViewport() {
  const [widthViewport, setWidthViewport] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWidthViewport(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return widthViewport;
}
