import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    Button group will always have one button selected. If you need to display adjacent buttons without selected mode,
    use the{" "}
    <StorybookLink page="Docs/Buttons/Button" size={StorybookLink.sizes.SMALL}>
      Button
    </StorybookLink>
    {` component with "Flat" props.`}
  </Tip>
);
