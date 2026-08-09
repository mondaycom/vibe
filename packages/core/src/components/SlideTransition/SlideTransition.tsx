import React, { forwardRef } from "react";
import cx from "classnames";
import { type SlideTransitionProps } from "./SlideTransition.types";
import styles from "./SlideTransition.module.scss";

const SlideTransition = forwardRef(
  ({ direction, style, children, className }: SlideTransitionProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className={cx(styles.slide, direction === "forward" ? styles.slideForward : styles.slideBackward, className)}
        style={style}
      >
        {children}
      </div>
    );
  }
);

export default SlideTransition;
