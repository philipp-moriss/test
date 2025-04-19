import React from "react";
import { Zeus } from "../../core/components/zeus";
import { GlowEffect } from "../../core/components/glow";
import { Effect } from "../../core/components/effects";
import useWindowSize from "../../core/hook/use-window-size";

export const Effects = () => {
  const { isTablet, isMobile } = useWindowSize();

  return (
    <React.Fragment>
      <Zeus disableShake={isTablet || isMobile} />
      <Effect
        name="effect"
        animation={isTablet || isMobile ? "none" : "pulse"}
        speed="slow"
      />
      <GlowEffect variant="top" />
      {!isMobile ? (
        <>
          <GlowEffect variant="bottom" />
          <Effect name="gold" animation="rotate" />
          <Effect name="diamond" animation="pulse" />
        </>
      ) : null}
    </React.Fragment>
  );
};
