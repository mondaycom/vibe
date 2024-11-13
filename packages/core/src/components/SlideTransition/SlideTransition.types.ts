import React from "react";
import { VibeComponentProps } from "../../types";

export interface SlideTransitionProps extends VibeComponentProps {
  direction: SlideDirection;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export type SlideDirection = "forward" | "backward";
