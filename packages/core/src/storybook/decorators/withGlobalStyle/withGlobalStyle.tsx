import { MultipleStoryElementsWrapper } from "vibe-storybook-components";
import cx from "classnames";
import styles from "./withGlobalStyle.module.scss";
import { StoryFn } from "@storybook/react";

const WithGlobalStyle = (Story: StoryFn, { className }: { className: string }) => {
  return (
    <MultipleStoryElementsWrapper className={cx(styles.storyWrapper, className)}>
      <Story />
    </MultipleStoryElementsWrapper>
  );
};

export default WithGlobalStyle;
