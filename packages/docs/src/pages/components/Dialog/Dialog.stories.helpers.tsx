import React from "react";
import { Link, StorybookLink, Tip } from "vibe-storybook-components";

export const TipDialogContentContainer = () => (
  <Tip>
    For setting the dialog UI appearance, use{" "}
    <StorybookLink size={"small"} page="Popover" story="DialogContentContainer">
      DialogContentContainer
    </StorybookLink>{" "}
    component.
  </Tip>
);

export const TipDevTipPopperJs = () => (
  <Tip title="Dev tip">
    You can use the
    <Link size={"small"} href="https://popper.js.org/docs/v2/modifiers/">
      Popper.js modifiers
    </Link>
    for extended Dialog customization.
  </Tip>
);

export const TipModal = () => (
  <Tip title="Wishing to position your popover in the center of the page?">
    Exactly for this purpose, we created the{" "}
    <StorybookLink page="Components/Modal" size={"small"}>
      Modal
    </StorybookLink>{" "}
    component! Check it out.
  </Tip>
);

export const TipDevTipTechnicalPattern = () => (
  <Tip title="Dev tip">
    If you wish to implement a{" "}
    <StorybookLink page="Components/Dropdown" size={"small"}>
      Dropdown
    </StorybookLink>{" "}
    inside a Dialog container and need help displaying the Dropdowns popovers correctly, read more about our Dropdown in
    popovers technical pattern{" "}
    <StorybookLink page="Technical Patterns/Dropdowns inside pop-overs" size={"small"}>
      here
    </StorybookLink>
    .
  </Tip>
);
