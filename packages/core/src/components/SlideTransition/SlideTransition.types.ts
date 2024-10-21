import React from "react";
import { VibeComponentProps } from "../../types";

export interface SlideTransitionProps extends VibeComponentProps {
  direction: SlideDirection;
  children: React.ReactNode;
}

export type SlideDirection = "forward" | "backward";
