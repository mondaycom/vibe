import React from "react";
import { VibeComponentProps } from "../../../types";

export interface ModalContentProps extends VibeComponentProps {
  /**
   * Main content of the modal.
   */
  children?: React.ReactNode;
}
