import type React from "react";
import { type EZDSComponentProps } from "../../../../types";

export interface ModalMediaLayoutProps extends EZDSComponentProps {
  /**
   * The content of the layout, structured as:
   * 1. Media content
   * 2. Header content
   * 3. Main content
   */
  children: React.ReactNode;
}
