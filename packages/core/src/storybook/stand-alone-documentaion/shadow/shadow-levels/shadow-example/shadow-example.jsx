import React from "react";
import cx from "classnames";
import { capitalize } from "lodash-es";
import { useMemo } from "react";
import styles from "./shadow-example.module.scss";

export const ShadowExample = ({ size }) => {
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
};
