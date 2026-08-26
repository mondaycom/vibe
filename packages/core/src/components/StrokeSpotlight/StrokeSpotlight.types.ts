import { type ReactNode } from "react";
import { type VibeComponentProps } from "../../types";
import { type StrokeSpotlightOptions } from "./useStrokeSpotlight";

export type StrokeSpotlightPalette = "default" | "sidekick" | "vibe";

export interface StrokeSpotlightProps extends VibeComponentProps, StrokeSpotlightOptions {
  children: ReactNode;
  /** Border stroke width in px; mirrored to CSS `--border`. */
  borderWidth?: number;
  /** Blur radius in px of the halo bleeding outward from the stroke. */
  glowBlur?: number;
  /** Stroke/glow color palette. Default matches agents cyan→blue→violet. */
  palette?: StrokeSpotlightPalette;
  /** Corner radius in px (unitless CSS var `--radius`). */
  radius?: number;
}
