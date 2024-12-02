import { SpacingSizes } from "./spacing-sizes/spacing-sizes";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Spacing",
  tags: ["internal"]
};
export default meta;

type Story = StoryObj;

export const Sizes: Story = {
  render: SpacingSizes
};
