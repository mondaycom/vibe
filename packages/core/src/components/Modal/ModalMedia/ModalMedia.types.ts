import type React from "react";
import { type EZDSComponentProps } from "../../../types";

export interface ModalMediaProps extends EZDSComponentProps {
  /**
   * The media content displayed in the modal.
   */
  children: React.ReactNode;
}
