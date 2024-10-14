import { Meta, StoryObj } from "@storybook/react";
import { SemanticColors } from "./semantic-colors/semantic-colors";
import { BackgroundColors } from "./background-colors/background-colors";
import TextColors from "./text-colors/text-colors";
import { BorderColors } from "./border-colors/border-colors";
import { ContentColors } from "./content-colors/content-colors";

const meta: Meta = {
  title: "Foundations/Colors"
};
export default meta;

type Story = StoryObj;

export const Semantic: Story = {
  render: SemanticColors
};

export const Background: Story = {
  render: BackgroundColors
};

export const Text: Story = {
  render: TextColors
};

export const Border: Story = {
  render: BorderColors
};

export const Content: Story = {
  render: ContentColors
};
