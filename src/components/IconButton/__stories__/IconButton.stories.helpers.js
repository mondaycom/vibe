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

export const TipMenuButton = () => (
  <Tip>
    If you need to use an icon as a button that opens dialog or menu next to it, check out{" "}
    <StorybookLink page="Buttons/MenuButton" size="small">
      Menu button
    </StorybookLink>{" "}
    component.
  </Tip>
);
