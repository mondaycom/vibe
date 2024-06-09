import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipEditableText = () => (
  <Tip title="Am I using the right component?">
    This component is used for editing text size 18px and up. For editing smaller text sizes, consider using{" "}
    <StorybookLink page="Inputs/EditableText" size={StorybookLink.sizes.SMALL}>
      EditableText
    </StorybookLink>
  </Tip>
);
