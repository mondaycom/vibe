import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import cx from "classnames";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./Toggle.module.scss";

interface ToggleTextProps extends VibeComponentProps {
  children: string;
}

const ToggleText: FC<ToggleTextProps> = ({ children, id, "data-testid": dataTestId }) => (
  <span
    className={cx(styles.text, "monday-style-toggle_text")}
    data-testid={dataTestId || getTestId(ELEMENT_TYPES.TOGGLE_TEXT, id)}
  >
    {children}
  </span>
);
export default ToggleText;
