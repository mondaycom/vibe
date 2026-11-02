import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { Calendar, Board, Chart } from "@vibe/icons";
import { type Meta, type StoryObj } from "@storybook/react";
import SegmentedControl from "../SegmentedControl";

type Story = StoryObj<typeof SegmentedControl>;

export default {
  title: "Components/SegmentedControl",
  component: SegmentedControl
} satisfies Meta<typeof SegmentedControl>;

const segmentedControlTemplate = createComponentTemplate(SegmentedControl);

export const Overview: Story = {
  render: segmentedControlTemplate.bind({}),
  args: {
    ariaLabel: "View options",
    defaultValue: "week",
    options: [
      { value: "day", label: "Day" },
      { value: "week", label: "Week" },
      { value: "month", label: "Month" }
    ]
  }
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(["xs", "small", "medium", "large"] as const).map(size => (
        <SegmentedControl
          key={size}
          ariaLabel={`${size} size`}
          size={size}
          defaultValue="week"
          options={[
            { value: "day", label: "Day" },
            { value: "week", label: "Week" },
            { value: "month", label: "Month" }
          ]}
        />
      ))}
    </div>
  )
};

export const FullWidth: Story = {
  render: segmentedControlTemplate.bind({}),
  args: {
    ariaLabel: "View options",
    fullWidth: true,
    defaultValue: "week",
    options: [
      { value: "day", label: "Day" },
      { value: "week", label: "Week" },
      { value: "month", label: "Month" }
    ]
  }
};

export const WithIcons: Story = {
  render: segmentedControlTemplate.bind({}),
  args: {
    ariaLabel: "View options",
    defaultValue: "board",
    options: [
      { value: "calendar", label: "Calendar", icon: Calendar },
      { value: "board", label: "Board", icon: Board },
      { value: "chart", label: "Chart", icon: Chart }
    ]
  }
};

export const Disabled: Story = {
  render: segmentedControlTemplate.bind({}),
  args: {
    ariaLabel: "View options",
    defaultValue: "week",
    options: [
      { value: "day", label: "Day" },
      { value: "week", label: "Week" },
      { value: "month", label: "Month", disabled: true }
    ]
  }
};

export const DisabledGroup: Story = {
  render: segmentedControlTemplate.bind({}),
  args: {
    ariaLabel: "View options",
    defaultValue: "week",
    disabled: true,
    options: [
      { value: "day", label: "Day" },
      { value: "week", label: "Week" },
      { value: "month", label: "Month" }
    ]
  }
};
