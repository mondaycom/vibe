import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipDropdown = () => (
  <Tip>
    When there’s limited space or no default selection, consider using a select{" "}
    <StorybookLink page="Inputs/Dropdown" size="small">
      Dropdown
    </StorybookLink>{" "}
    instead.
  </Tip>
);
