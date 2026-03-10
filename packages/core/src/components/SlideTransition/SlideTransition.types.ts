import type React from "react";
import { type EZDSComponentProps } from "../../types";

export interface SlideTransitionProps extends EZDSComponentProps {
  /**
   * The direction of the slide transition.
   */
  direction: SlideDirection;
  /**
   * Custom inline styles applied to the transition container.
   */
  style?: React.CSSProperties;
  /**
   * The content inside the transition container.
   */
  children: React.ReactNode;
}

/**
 * Defines the possible slide transition directions.
 */
export type SlideDirection = "forward" | "backward";
