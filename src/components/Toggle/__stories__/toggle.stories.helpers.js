import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipOtherComponents = () => (
  <Tip>
    If the user needs to choose an item from a set of options, use{" "}
    <StorybookLink page="Inputs/RadioButton" size="small">
      Radio button
    </StorybookLink>{" "}
    or{" "}
    <StorybookLink page="Inputs/Checkbox" size="small">
      Checkboxes
    </StorybookLink>{" "}
    instead.
  </Tip>
);
