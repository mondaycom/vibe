import React, { FC, ReactElement } from "react";
import cx from "classnames";
import VibeComponentProps from "../../types/VibeComponentProps";
import classes from "./ModalContent.module.scss";

interface ModalContentProps extends VibeComponentProps {
  children: ReactElement | ReactElement[] | string;
}

const ModalContent: FC<ModalContentProps> = ({ className, children }) => {
  return <div className={cx(classes.container, className)}>{children}</div>;
};

Object.assign(ModalContent, {
  displayName: "ModalContent"
});

export default ModalContent;
