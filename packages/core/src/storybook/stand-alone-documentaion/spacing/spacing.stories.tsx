import { SpacingSizes } from "./spacing-sizes/spacing-sizes";
import { type StoryObj, type Meta } from "@storybook/react";
import { SpacingUsageExamples } from "./spacing-usage-examples/spacing-usage-examples";

const meta: Meta = {
  title: "Foundations/Spacing"
};
export default meta;

type Story = StoryObj;

export const Sizes: Story = {
  render: SpacingSizes,
  tags: ["!dev"]
};

export const UsageExamples: Story = {
  render: SpacingUsageExamples,
  tags: ["!dev"]
};
