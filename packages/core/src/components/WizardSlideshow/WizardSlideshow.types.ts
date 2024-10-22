import React from "react";
import { VibeComponentProps } from "../../types";
import { SlideDirection } from "../SlideTransition/SlideTransition.types";

export interface WizardSlideshowProps extends VibeComponentProps {
  activeStep: number;
  direction: WizardDirection;
  children: React.ReactNode[];
}

export type WizardDirection = SlideDirection;
