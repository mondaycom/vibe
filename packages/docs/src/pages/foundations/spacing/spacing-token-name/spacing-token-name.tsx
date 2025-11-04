import React from "react";
import styles from "./spacing-usage-examples.module.scss";

export const TokenName = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.tokenName}>{children}</span>
);
