import React from "react";
import styles from "./Section.module.scss";
import cx from "classnames";

export default function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cx(styles.section, className)}>{children}</h2>;
}
