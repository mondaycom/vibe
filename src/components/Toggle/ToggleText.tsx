import React, { FC } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./Toggle.module.scss";

interface ToggleTextProps extends VibeComponentProps {
  children: string;
}

const ToggleText: FC<ToggleTextProps> = ({ children, id, "data-testid": dataTestId }) => (
  <span
    className={cx(styles.text, "monday-style-toggle_text")}
    data-testid={dataTestId || getTestId(ComponentDefaultTestId.TOGGLE_TEXT, id)}
  >
    {children}
  </span>
);
export default ToggleText;
