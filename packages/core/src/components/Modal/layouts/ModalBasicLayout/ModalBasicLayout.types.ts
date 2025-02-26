import React from "react";
import { VibeComponentProps } from "../../../../types";

export interface ModalBasicLayoutProps extends VibeComponentProps {
  /**
   * Layout children in the following order:
   * 1. Header content
   * 2. Main content
   */
  children: React.ReactNode;
}
