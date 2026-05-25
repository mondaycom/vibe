import React, { type FC } from "react";
import cx from "classnames";
import type VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./ToggleText.module.scss";
import { Text } from "@vibe/typography";

export interface ToggleTextProps extends VibeComponentProps {
  /**
   * The text content inside the toggle.
   */
  children: string;
  /**
   * If true, applies a disabled style to the text.
   */
  disabled: boolean;
}

const ToggleText: FC<ToggleTextProps> = ({ children, disabled }) => (
  <Text element="span" type="text2" className={cx(styles.text, { [styles.disabled]: disabled })}>
    {children}
  </Text>
);
export default ToggleText;
