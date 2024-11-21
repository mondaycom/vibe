import React, { FC, ReactElement } from "react";
import cx from "classnames";
import VibeComponentProps from "../../../types/VibeComponentProps";
import styles from "./LegacyModalFooter.module.scss";

export interface LegacyModalFooterProps extends VibeComponentProps {
  children: ReactElement | ReactElement[] | string;
}

const LegacyModalFooter: FC<LegacyModalFooterProps> = ({ className, children }) => {
  return <div className={cx(styles.container, className)}>{children}</div>;
};

Object.assign(LegacyModalFooter, {
  displayName: "ModalFooter"
});

export default LegacyModalFooter;
