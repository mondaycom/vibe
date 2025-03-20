import React from "react";
import { VibeComponentProps } from "../../../types";

export interface ModalMediaProps extends VibeComponentProps {
  /**
   * The media content displayed in the modal.
   */
  children: React.ReactNode;
}
