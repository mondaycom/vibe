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
      fallbackPlacements: []
    }
  }
];

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    If you need to provide additional information about a component, use the{" "}
    <StorybookLink page="Popover/Tooltip" size={StorybookLink.sizes.SMALL}>
      Tooltip
    </StorybookLink>{" "}
    or{" "}
    <StorybookLink page="Feedback/AttentionBox" size={StorybookLink.sizes.SMALL}>
      Attention box.
    </StorybookLink>
  </Tip>
);
