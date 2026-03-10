import type React from "react";
import { type EZDSComponentProps } from "../../../types";

export interface TableContainerProps extends EZDSComponentProps {
  /**
   * Custom styles for the table container.
   */
  style?: React.CSSProperties;
  /**
   * The child elements inside the table container.
   */
  children: React.ReactNode;
}
