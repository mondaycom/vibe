import React, { type ForwardedRef, forwardRef } from "react";
import cx from "classnames";
import styles from "./ModalLayoutScrollableContent.module.scss";
import { type ModalLayoutScrollableContentProps } from "./ModalLayoutScrollableContent.types";

const ModalLayoutScrollableContent = forwardRef(
  ({ onScroll, className, children }: ModalLayoutScrollableContentProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={cx(styles.content, className)} onScroll={onScroll}>
        {children}
      </div>
    );
  }
);

export default ModalLayoutScrollableContent;
