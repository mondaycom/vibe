import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import { slideAnimationVariants, slideAnimationTransition } from "./utils/animationVariants";
import { SlideTransitionProps } from "./SlideTransition.types";
import styles from "./SlideTransition.module.scss";

const SlideTransition = forwardRef(
  ({ direction, style, children, className }: SlideTransitionProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      // @ts-ignore - React 19 compatibility issue with framer motion types
      <motion.div
        ref={ref}
        custom={direction}
        variants={slideAnimationVariants}
        initial="initial"
        animate="enter"
        transition={slideAnimationTransition}
        className={cx(styles.slide, className)}
        style={style}
      >
        {children}
      </motion.div>
    );
  }
);

export default SlideTransition;
