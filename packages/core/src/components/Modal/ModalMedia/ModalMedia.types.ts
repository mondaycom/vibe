import React from "react";
import { VibeComponentProps } from "../../../types";

export interface ModalMediaProps extends VibeComponentProps {
  /**
   * The media content displayed in the modal (e.g., image, video, Lottie animation).
   */
  children: React.ReactNode;
}
