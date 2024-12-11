import React from "react";
import { VibeComponentProps } from "../../../types";

export interface ModalMediaProps extends VibeComponentProps {
  /**
   * Media content to be displayed in the modal (image, video, Lottie, etc.).
   */
  children: React.ReactNode;
}
