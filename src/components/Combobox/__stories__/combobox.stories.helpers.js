import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipOtherComponents = () => (
  <Tip>
    When there are fewer than five items, consider using{" "}
    <StorybookLink page="Inputs/RadioButton" size="small">
      Radio buttons
    </StorybookLink>{" "}
    (if only one item can be selected) or{" "}
    <StorybookLink page="Inputs/Checkbox" size="small">
      Checkboxes
    </StorybookLink>{" "}
    (if multiple items can be selected).
  </Tip>
);
