import React, { type FC, type ReactElement } from "react";
import cx from "classnames";
import type EZDSComponentProps from "../../../types/EZDSComponentProps";
import styles from "./LegacyModalFooter.module.scss";

export interface LegacyModalFooterProps extends EZDSComponentProps {
  children: ReactElement | ReactElement[] | string;
}

const LegacyModalFooter: FC<LegacyModalFooterProps> = ({ className, children }) => {
  return <div className={cx(styles.container, className)}>{children}</div>;
};

Object.assign(LegacyModalFooter, {
  displayName: "ModalFooter"
});

export default LegacyModalFooter;
