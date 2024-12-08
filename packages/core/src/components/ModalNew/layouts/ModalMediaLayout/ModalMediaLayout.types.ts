import React from "react";
import { VibeComponentProps } from "../../../../types";

export interface ModalMediaLayoutProps extends VibeComponentProps {
  /**
   * Layout children in the following order:
   * 1. Media content
   * 2. Header content
   * 3. Main content
   */
  children: React.ReactNode;
}
