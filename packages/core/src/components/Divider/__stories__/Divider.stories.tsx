import React from "react";
import Divider, { DividerProps } from "../Divider";
import { createStoryMetaSettingsDecorator } from "../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Divider
});

const dividerTemplate = (args: DividerProps) => (
  <div style={{ width: "400px", height: "40px" }}>
    <Divider {...args} />
  </div>
);

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: dividerTemplate.bind({}),
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
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
        style={{
          display: "flex",
          alignItems: "center",
          height: 40
        }}
      >
        <span
          style={{
            marginRight: "var(--sb-spacing-large)",
            alignSelf: "center"
          }}
        >
          Horizontal
        </span>
        <Divider direction="horizontal" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: 200
        }}
      >
        <span
          style={{
            marginRight: "var(--sb-spacing-large)",
            alignSelf: "center"
          }}
        >
          Vertical
        </span>
        <Divider direction="vertical" />
      </div>
    </div>
  ),

  name: "Directions"
};
