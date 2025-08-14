import { type VibeComponentProps } from "../../../../types";
import type React from "react";

export interface ModalSideBySideLayoutProps extends VibeComponentProps {
  /**
   * The content of the layout, structured as:
   * 1. Header content
   * 2. Main content
   * 3. Media content
   */
  children: React.ReactNode;
}
