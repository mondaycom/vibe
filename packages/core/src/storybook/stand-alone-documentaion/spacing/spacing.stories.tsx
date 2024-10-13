import { SpacingSizes } from "./spacing-sizes/spacing-sizes";
import { StoryObj , Meta } from "@storybook/blocks";

const meta: Meta = {
    title: "Foundations/Spacing"
  };
  export default meta;
  
  type Story = StoryObj;
  
  export const Sizes: Story = {
    render: SpacingSizes
  };