import React from "react";
import { MultipleStoryElementsWrapper } from "@ezds/storybook-blocks";
import cx from "classnames";
import styles from "./withGlobalStyle.module.scss";
import { type Decorator } from "@storybook/react";

const WithGlobalStyle: Decorator = (Story, { className, viewMode }) => {
  return (
    <MultipleStoryElementsWrapper className={cx({ [styles.storyWrapper]: viewMode === "docs" }, className)}>
      <Story />
    </MultipleStoryElementsWrapper>
  );
};

export default WithGlobalStyle;
