import { type CSSProperties, type ReactNode, useRef } from "react";
import styles from "./StrokeSpotlight.module.scss";
import {
  useStrokeSpotlight,
  type StrokeSpotlightOptions,
} from "./useStrokeSpotlight";

const SPOTLIGHT_ACTIVE_CLASS = "is-spotlight-active";
const CLICK_PULSING_CLASS = "is-click-pulsing";

interface StrokeSpotlightProps extends StrokeSpotlightOptions {
  children: ReactNode;
  className?: string;
  /** Border stroke width in px; mirrored to CSS `--border`. */
  borderWidth?: number;
  /** Blur radius in px of the halo bleeding outward from the stroke. */
  glowBlur?: number;
  /** Stroke/glow color palette. Default matches agents cyan→blue→violet. */
  palette?: "default" | "sidekick" | "vibe";
  /** Corner radius in px (unitless CSS var `--radius`). */
  radius?: number;
}

export function StrokeSpotlight({
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
}: StrokeSpotlightProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  useStrokeSpotlight(rootRef, SPOTLIGHT_ACTIVE_CLASS, CLICK_PULSING_CLASS, {
    proximity,
    inactiveZone,
    edgeFade,
    spread,
    movementDuration,
  });

  const style = {
    "--border": borderWidth,
    "--glow-blur": `${glowBlur}px`,
    "--radius": radius,
  } as CSSProperties;

  const paletteClass =
    palette === "sidekick"
      ? styles.paletteSidekick
      : palette === "vibe"
        ? styles.paletteVibe
        : "";

  return (
    <div
      ref={rootRef}
      className={[styles.root, paletteClass, className].filter(Boolean).join(" ")}
      style={style}
    >
      <div aria-hidden className={styles.glow} />
      <div
        aria-hidden
        data-stroke-click-pulse
        className={styles.clickPulse}
      />
      <div className={styles.surface}>{children}</div>
    </div>
  );
}
