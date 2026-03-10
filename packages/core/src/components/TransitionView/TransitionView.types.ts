import type React from "react";
import { type EZDSComponentProps } from "../../types";
import { type SlideDirection } from "../SlideTransition/SlideTransition.types";

export interface TransitionViewProps extends EZDSComponentProps {
  /**
   * The index of the currently active step.
   */
  activeStep: number;
  /**
   * The direction of the transition between steps.
   */
  direction: TransitionViewDirection;
  /**
   * The child elements representing the steps in the transition.
   */
  children: React.ReactNode[];
}

export type TransitionViewDirection = SlideDirection;
