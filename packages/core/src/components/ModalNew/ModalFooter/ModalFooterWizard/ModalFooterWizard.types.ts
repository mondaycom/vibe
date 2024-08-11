import { ModalFooterBaseProps } from "../ModalFooterBase/ModalFooterBase.types";

export type ModalFooterWizardProps = Omit<ModalFooterBaseProps, "renderSideAction" | "children" | "secondaryButton"> & {
  secondaryButton: ModalFooterBaseProps["secondaryButton"];
};
