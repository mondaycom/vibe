import type React from "react";
import { type EZDSComponentProps } from "../../../../types";

export interface ModalBasicLayoutProps extends EZDSComponentProps {
  /**
   * The content of the layout, structured as:
   * 1. Header content
   * 2. Main content
   */
  children: React.ReactNode;
}
