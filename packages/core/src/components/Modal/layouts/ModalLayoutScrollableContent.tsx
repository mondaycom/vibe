import React from "react";
import cx from "classnames";
import styles from "./ModalLayoutScrollableContent.module.scss";
import { ModalLayoutScrollableContentProps } from "./ModalLayoutScrollableContent.types";

const ModalLayoutScrollableContent = ({ onScroll, className, children }: ModalLayoutScrollableContentProps) => {
  return (
    <div className={cx(styles.content, className)} onScroll={onScroll}>
      {children}
    </div>
  );
};

export default ModalLayoutScrollableContent;
