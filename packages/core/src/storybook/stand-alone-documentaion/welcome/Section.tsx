import React from "react";
import styles from "./Section.module.scss";
import cx from "classnames";
import { motion, type MotionProps } from "framer-motion";

export default function Section({
  children,
  className,
  ...motionProps
}: {
  children: React.ReactNode;
  className?: string;
} & MotionProps) {
  return (
    <motion.h2 className={cx(styles.section, className)} {...motionProps}>
      {children}
    </motion.h2>
  );
}
