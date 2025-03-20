import React from "react";
import { VibeComponentProps } from "../../types";
import { SlideDirection } from "../SlideTransition/SlideTransition.types";

export interface TransitionViewProps extends VibeComponentProps {
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
