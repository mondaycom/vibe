import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import { slideAnimationVariants, slideAnimationTransition } from "./utils/animationVariants";
import { SlideTransitionProps } from "./SlideTransition.types";
import styles from "./SlideTransition.module.scss";

const SlideTransition = forwardRef(
  ({ direction, children, className }: SlideTransitionProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <motion.div
        ref={ref}
        custom={direction}
        variants={slideAnimationVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={slideAnimationTransition}
        className={cx(styles.slide, className)}
      >
        {children}
      </motion.div>
    );
  }
);

export default SlideTransition;
