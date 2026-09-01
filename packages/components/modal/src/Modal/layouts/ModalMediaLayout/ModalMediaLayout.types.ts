import type React from "react";
import { type VibeComponentProps } from "@vibe/shared";

export interface ModalMediaLayoutProps extends VibeComponentProps {
  /**
   * The content of the layout, structured as:
   * 1. Media content
   * 2. Header content
   * 3. Main content
   */
  children: React.ReactNode;
}
