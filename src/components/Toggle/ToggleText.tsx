import React, { FC } from "react";
import cx from "classnames";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./ToggleText.module.scss";

interface ToggleTextProps extends VibeComponentProps {
  children: string;
  disabled: boolean;
}

const ToggleText: FC<ToggleTextProps> = ({ children, disabled }) => (
  <span className={cx(styles.text, { [styles.disabled]: disabled })}>{children}</span>
);
export default ToggleText;
