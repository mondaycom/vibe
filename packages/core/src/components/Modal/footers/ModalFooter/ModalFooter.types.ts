import React from "react";
import { ModalFooterBaseProps } from "../ModalFooterBase/ModalFooterBase.types";

export interface ModalFooterProps extends Omit<ModalFooterBaseProps, "renderAction"> {
  /**
   * Optional content to render on the left side of the footer.
   */
  renderSideAction?: React.ReactNode;
}
