import React from "react";
import cx from "classnames";
import styles from "./Example.module.scss";
import { type ElementContent } from "../../../types";

interface ComponentRuleProps {
  children: ElementContent;
  className?: string;
}

const ComponentRule: React.FC<ComponentRuleProps> = ({ children, className }) => {
  return <figure className={cx(styles.example, className)}>{children}</figure>;
};

export default ComponentRule;
