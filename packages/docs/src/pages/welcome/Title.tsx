import React from "react";
import styles from "./Title.module.scss";
import cx from "classnames";

export default function Title({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cx(styles.title, className)}>{children}</h3>;
}
