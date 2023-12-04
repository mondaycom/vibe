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
    <StorybookLink page="Popover/Tooltip" size="small">
      Tooltip
    </StorybookLink>{" "}
    or{" "}
    <StorybookLink href="Feedback/AttentionBox" size="small">
      Attention box.
    </StorybookLink>
  </Tip>
);
