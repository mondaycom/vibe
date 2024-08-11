import React from "react";
import Divider, { DividerProps } from "../Divider";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import styles from "./Divider.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Divider
});

const dividerTemplate = (args: DividerProps) => (
  <div style={{ width: "400px", height: "40px" }}>
    <Divider {...args} />
  </div>
);

export default {
  title: "Data display/Divider",
  component: Divider,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: dividerTemplate.bind({}),
  name: "Overview"
};

export const Directions = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px"
      }}
    >
      <div
        className={styles["divider-description-container"]}
        style={{
          height: 40
        }}
      >
        <span className={styles["divider-description-text"]}>Horizontal</span>
        <Divider direction="horizontal" />
      </div>
      <div className={styles["divider-description-container"]}>
        <span className={styles["divider-description-text"]}>Vertical</span>
        <Divider direction="vertical" className={styles["divider-description-horizontal"]} />
      </div>
    </div>
  ),

  name: "Directions"
};
