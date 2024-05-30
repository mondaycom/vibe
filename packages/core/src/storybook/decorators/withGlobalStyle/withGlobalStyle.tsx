import React from "react";
import { MultipleStoryElementsWrapper } from "vibe-storybook-components";
import cx from "classnames";
import styles from "./withGlobalStyle.module.scss";
import { Decorator } from "@storybook/react";

const WithGlobalStyle: Decorator = (Story, { className, viewMode }) => {
  return (
    <MultipleStoryElementsWrapper className={cx({ [styles.storyWrapper]: viewMode === "docs" }, className)}>
      <Story />
    </MultipleStoryElementsWrapper>
  );
};

export default WithGlobalStyle;
