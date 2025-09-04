import React from "react";
import cx from "classnames";
import { capitalize } from "es-toolkit";
import { useMemo } from "react";
import styles from "./shadow-example.module.scss";

interface ShadowExampleProps {
  size: "xs" | "small" | "medium" | "large";
}

export const ShadowExample = ({ size }: ShadowExampleProps) => {
  const sizeName = useMemo(() => capitalize(size), [size]);
  return (
    <div className={styles.shadow}>
      <div className={cx(styles.example, styles[size])} />
      <span className={styles.title}>{sizeName}</span>
      <span className={styles.code}>{`var(--box-shadow-${size})`}</span>
    </div>
  );
};

ShadowExample.size = {
  XS: "xs",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;
