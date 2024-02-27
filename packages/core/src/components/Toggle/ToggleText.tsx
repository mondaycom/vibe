import React, { FC } from "react";
import cx from "classnames";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./ToggleText.module.scss";
import Text from "../Text/Text";

export interface ToggleTextProps extends VibeComponentProps {
  children: string;
  disabled: boolean;
}

const ToggleText: FC<ToggleTextProps> = ({ children, disabled }) => (
  <Text element="span" type={Text.types.TEXT2} className={cx(styles.text, { [styles.disabled]: disabled })}>
    {children}
  </Text>
);
export default ToggleText;
