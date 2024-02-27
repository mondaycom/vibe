import React, { FC, ReactElement } from "react";
import cx from "classnames";
import VibeComponentProps from "../../../types/VibeComponentProps";
import styles from "./ModalFooter.module.scss";

export interface ModalFooterProps extends VibeComponentProps {
  children: ReactElement | ReactElement[] | string;
}

const ModalFooter: FC<ModalFooterProps> = ({ className, children }) => {
  return <div className={cx(styles.container, className)}>{children}</div>;
};

Object.assign(ModalFooter, {
  displayName: "ModalFooter"
});

export default ModalFooter;
