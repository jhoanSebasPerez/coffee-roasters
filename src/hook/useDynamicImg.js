import { useState, useEffect } from "react";
import { useWidthViewport } from "./useWidthViewport";

export const useDynamicImg = (page, imgName) => {
  const [img, setImg] = useState("");
  const width = useWidthViewport();

  let viewport = "";

  if (width < 768) {
    viewport = "mobile";
  } else if (width < 1024) {
    viewport = "tablet";
  } else {
    viewport = "desktop";
  }

  useEffect(() => {
    import(`../assets/${page}/${viewport}/${imgName}`)
      .then((data) => setImg(data.default))
      .catch((e) => console.error(e));
    console.log("entro");
  }, [width]);

  return img;
};
