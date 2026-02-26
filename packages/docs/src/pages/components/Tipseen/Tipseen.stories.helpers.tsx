import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const modifiers = [
  {
    name: "preventOverflow",
    options: {
      mainAxis: false
    }
  }
];

export const wizardContent = [
  <div>Message for the user will appear here, to give more information about the feature.</div>,
  <div>Message for the user will appear here, to give more information about the feature.</div>,
  <div>Message for the user will appear here, to give more information about the feature.</div>,
  <div>Message for the user will appear here, to give more information about the feature.</div>,
  <div>Message for the user will appear here, to give more information about the feature.</div>
];

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    If you need to provide additional information about a component, use the{" "}
    <StorybookLink page="Components/Tooltip" size={"small"}>
      Tooltip
    </StorybookLink>{" "}
    or{" "}
    <StorybookLink page="Components/AttentionBox" size={"small"}>
      Attention box.
    </StorybookLink>
  </Tip>
);
