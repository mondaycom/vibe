import type React from "react";
import { type VibeComponentProps } from "@vibe/shared";

export interface TableContainerProps extends VibeComponentProps {
  /**
   * Custom styles for the table container.
   */
  style?: React.CSSProperties;
  /**
   * The child elements inside the table container.
   */
  children: React.ReactNode;
}

