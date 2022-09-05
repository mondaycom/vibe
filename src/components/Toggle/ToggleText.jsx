import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import styles from "./Toggle.module.scss";

const ToggleText = ({ children, id, "data-testid": dataTestId }) => (
  <span
    className={cx(styles.text, "monday-style-toggle_text")}
    data-testid={dataTestId || getTestId(ELEMENT_TYPES.TOGGLE_TEXT, id)}
  >
    {children}
  </span>
);
export default ToggleText;
