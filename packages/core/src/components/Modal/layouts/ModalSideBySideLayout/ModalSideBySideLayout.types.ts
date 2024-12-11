import { VibeComponentProps } from "../../../../types";
import React from "react";

export interface ModalSideBySideLayoutProps extends VibeComponentProps {
  /**
   * Layout children in the following order:
   * 1. Header content
   * 2. Main content
   * 3. Media content
   */
  children: React.ReactNode;
}
