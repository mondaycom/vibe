import React from "react";
import { VibeComponentProps } from "../../../../types";

export interface ModalBasicLayoutProps extends VibeComponentProps {
  /**
   * The content of the layout, structured as:
   * 1. Header content
   * 2. Main content
   */
  children: React.ReactNode;
}
