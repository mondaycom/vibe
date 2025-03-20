import React from "react";
import { ModalFooterBaseProps } from "../ModalFooterBase/ModalFooterBase.types";

export interface ModalFooterProps extends Omit<ModalFooterBaseProps, "renderAction"> {
  /**
   * Content displayed on the left side of the footer.
   */
  renderSideAction?: React.ReactNode;
}
