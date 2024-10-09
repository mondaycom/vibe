import React from "react";
import { ModalFooterBaseProps } from "../ModalFooterBase/ModalFooterBase.types";

export interface ModalFooterProps extends Omit<ModalFooterBaseProps, "renderAction"> {
  renderSideAction?: React.ReactNode;
}
