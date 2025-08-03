import React from "react";
import { CatalogTemplate } from "./Catalog/Catalog.stories.templates";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CatalogTemplate>;

export default {
  title: "Catalog"
} satisfies Meta<typeof CatalogTemplate>;

export const Catalog: Story = {
  render: () => <CatalogTemplate />,
  parameters: {
    docs: {
      sourceState: "none"
    },
    chromatic: {
      pauseAnimationAtEnd: true
    }
  },
  tags: ["!dev"]
};
