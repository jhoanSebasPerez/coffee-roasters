import React from "react";
import { ReactComponent as LogoMobile } from "../assets/shared/mobile/logo-mobile.svg";
import { ReactComponent as LogoDesktop } from "../assets/shared/desktop/logo.svg";
import { useWidthViewport } from "../hook/useWidthViewport";

export const Logo = () => {
  const width = useWidthViewport();

  if (width < 768) {
    return <LogoMobile />;
  }

  return <LogoDesktop />;
};
