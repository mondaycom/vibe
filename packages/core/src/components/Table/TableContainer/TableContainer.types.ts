import React from "react";
import { VibeComponentProps } from "../../../types";

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
