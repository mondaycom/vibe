import { SpacingSizes } from "./spacing-sizes/spacing-sizes";
import { StoryObj, Meta } from "@storybook/react";
import { SpacingUsageExamples } from "./spacing-usage-examples/spacing-usage-examples";

const meta: Meta = {
  title: "Foundations/Spacing",
  tags: ["internal"]
};
export default meta;

type Story = StoryObj;

export const Sizes: Story = {
  render: SpacingSizes
};

export const UsageExamples: Story = {
  render: SpacingUsageExamples
};
