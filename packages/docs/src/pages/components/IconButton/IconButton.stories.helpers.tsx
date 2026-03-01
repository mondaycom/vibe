import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    To display icons that do not have actions associated with them, use the{" "}
    <StorybookLink page="Components/Icon" size="small">
      Icon component
    </StorybookLink>
    .
  </Tip>
);

export const TipInfo = () => (
  <Tip>
    If you need to use an icon as a button that opens info dialog with additional information, check out{" "}
    <StorybookLink page="Components/Info" size="small">
      Info
    </StorybookLink>{" "}
    component.
  </Tip>
);

export const TipMenuButton = () => (
  <Tip>
    If you need to use an icon as a button that opens menu next to it, check out{" "}
    <StorybookLink page="Components/MenuButton" size="small">
      Menu button
    </StorybookLink>{" "}
    component.
  </Tip>
);
