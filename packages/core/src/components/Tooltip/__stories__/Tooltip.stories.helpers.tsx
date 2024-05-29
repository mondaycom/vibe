import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const modifiers = [
  {
    name: "preventOverflow",
    options: {
      mainAxis: false
    }
  },
  {
    name: "flip",
    options: {
      // @ts-ignore
      fallbackPlacements: []
    }
  }
];

export const TipOtherComponents = () => (
  <Tip>
    As tooltips only surface from a hover, never include links or buttons in the copy. If your tooltip requires either
    of these, considers putting your content in a{" "}
    <StorybookLink page="Feedback/AttentionBox" size={StorybookLink.sizes.SMALL}>
      Attention box
    </StorybookLink>{" "}
    or{" "}
    <StorybookLink page="Popover/Dialog" size={StorybookLink.sizes.SMALL}>
      Dialog.
    </StorybookLink>
  </Tip>
);
