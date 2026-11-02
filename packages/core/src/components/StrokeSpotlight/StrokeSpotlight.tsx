import React, { forwardRef, useRef, type CSSProperties } from "react";
import cx from "classnames";
import { type StrokeSpotlightProps } from "./StrokeSpotlight.types";
import styles from "./StrokeSpotlight.module.scss";
import { useStrokeSpotlight } from "./useStrokeSpotlight";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { ComponentVibeId } from "../../tests/constants";

const SPOTLIGHT_ACTIVE_CLASS = "is-spotlight-active";
const CLICK_PULSING_CLASS = "is-click-pulsing";

const StrokeSpotlight = forwardRef<HTMLDivElement, StrokeSpotlightProps>(
  (
    {
      children,
      className,
      proximity,
      inactiveZone,
      edgeFade,
      spread,
      movementDuration,
      borderWidth = 2,
      glowBlur = 12,
      palette = "default",
      radius = 16,
      id,
      "data-testid": dataTestId
    },
    forwardedRef
  ) => {
    const localRef = useRef<HTMLDivElement>(null);

    useStrokeSpotlight(localRef, SPOTLIGHT_ACTIVE_CLASS, CLICK_PULSING_CLASS, {
      proximity,
      inactiveZone,
      edgeFade,
      spread,
      movementDuration
    });

    const setRefs = (node: HTMLDivElement | null) => {
      localRef.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    const style = {
      "--border": borderWidth,
      "--glow-blur": `${glowBlur}px`,
      "--radius": radius
    } as CSSProperties;

    const paletteClass =
      palette === "sidekick" ? styles.paletteSidekick : palette === "vibe" ? styles.paletteVibe : undefined;

    return (
      <div
        ref={setRefs}
        className={cx(styles.root, paletteClass, className)}
        style={style}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.STROKE_SPOTLIGHT, id)}
        data-vibe={ComponentVibeId.STROKE_SPOTLIGHT}
      >
        <div aria-hidden className={styles.glow} />
        <div aria-hidden data-stroke-click-pulse className={styles.clickPulse} />
        <div className={styles.surface}>{children}</div>
      </div>
    );
  }
);

export default StrokeSpotlight;
