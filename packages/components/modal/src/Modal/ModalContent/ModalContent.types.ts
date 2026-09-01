import type React from "react";
import { type VibeComponentProps } from "@vibe/shared";

export interface ModalContentProps extends VibeComponentProps {
  /**
   * The main content of the modal.
   */
  children?: React.ReactNode;
}
