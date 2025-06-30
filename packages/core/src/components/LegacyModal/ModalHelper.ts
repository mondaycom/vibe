import { ReactElement } from "react";
import ModalHeader from "./LegacyModalHeader/LegacyModalHeader";
import ModalContent from "./LegacyModalContent/LegacyModalContent";
import ModalFooter from "./LegacyModalFooter/LegacyModalFooter";
import ModalFooterButtons from "./LegacyModalFooter/LegacyModalFooterButtons/LegacyModalFooterButtons";

/**
 * @deprecated
 */
export enum ModalWidth {
  DEFAULT = "default",
  FULL_WIDTH = "full-width"
}

// the type A11yDialog is not exported from a11y-dialog, so mocking it with any for now
export type A11yDialogType = any;

export const isModalHeader = (child: ReactElement<any>) => child.type === ModalHeader;
export const isModalContent = (child: ReactElement<any>) => child.type === ModalContent;
export const isModalFooter = (child: ReactElement<any>) =>
  [ModalFooter, ModalFooterButtons].some(component => child.type === component);
export const validateTitleProp = (title: string, childrenArray: ReactElement<any>[]) => {
  const hasHeaderComponent = childrenArray.some(isModalHeader);
  if (hasHeaderComponent) return;

  if (!title) {
    throw new Error(`Title prop is mandatory for Modal when HeaderModal isn't provided. Validation failed.`);
  }
};
