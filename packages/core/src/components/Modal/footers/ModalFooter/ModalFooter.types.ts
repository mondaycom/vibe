import type React from "react";
import { type ModalFooterBaseProps } from "../ModalFooterBase/ModalFooterBase.types";

export interface ModalFooterProps extends Omit<ModalFooterBaseProps, "renderAction"> {
  /**
   * Content displayed on the left side of the footer.
   */
  renderSideAction?: React.ReactNode;
}
