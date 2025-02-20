import React from "react";
import cx from "classnames";
import styles from "./withGlobalStyle.module.scss";
import { Decorator } from "@storybook/react";

const WithGlobalStyle: Decorator = (Story, { className, viewMode }) => {
  return (
    <div className={cx({ [styles.storyWrapper]: viewMode === "docs" }, className)}>
      <div data-testid="focusTrap" className={styles.focusTrap} />
      <Story />
    </div>
  );
};

export default WithGlobalStyle;
