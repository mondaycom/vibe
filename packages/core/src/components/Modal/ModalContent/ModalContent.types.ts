import type React from "react";
import { type EZDSComponentProps } from "../../../types";

export interface ModalContentProps extends EZDSComponentProps {
  /**
   * The main content of the modal.
   */
  children?: React.ReactNode;
}
