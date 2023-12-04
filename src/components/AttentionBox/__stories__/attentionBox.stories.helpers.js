import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    If the information about a component isn’t critical for the user, use a{" "}
    <StorybookLink page="Popover/Tooltip" size="small">
      Tooltip
    </StorybookLink>
    instead.
  </Tip>
);
