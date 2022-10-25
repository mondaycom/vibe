import { ReactElement } from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";

export enum ModalWidth {
  DEFAULT = "default",
  FULL_WIDTH = "full_width"
}

export const isModalHeader = (child: ReactElement) => child.type === ModalHeader;
export const isModalContent = (child: ReactElement) => child.type === ModalContent;
export const isModalFooter = (child: ReactElement) => child.type === ModalFooter;

export const validateTitleProp = (title: string, childrenArray: ReactElement[]) => {
  const hasHeaderComponent = childrenArray.some(isModalHeader);
  if (hasHeaderComponent) return;

  if (!title) {
    throw new Error(`Title prop is mandatory for Modal when HeaderModal isn't provided. Validation failed.`);
  }
};
