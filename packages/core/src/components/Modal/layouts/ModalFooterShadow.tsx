import React from "react";
import cx from "classnames";
import styles from "./ModalFooterShadow.module.scss";
import { type ModalFooterShadowProps } from "./ModalFooterShadow.types";

const ModalFooterShadow = ({ show }: ModalFooterShadowProps) => {
  return <div className={cx(styles.shadowWrapper, { [styles.show]: show })} />;
};

export default ModalFooterShadow;
