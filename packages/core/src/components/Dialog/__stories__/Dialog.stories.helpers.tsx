import React from "react";
import { Link, StorybookLink, Tip } from "vibe-storybook-components";

export const TipDialogContentContainer = () => (
  <Tip>
    For setting the dialog UI appearance, use{" "}
    <StorybookLink size={StorybookLink.sizes.SMALL} page="Popover" story="DialogContentContainer">
      DialogContentContainer
    </StorybookLink>{" "}
    component.
  </Tip>
);

export const TipDevTipPopperJs = () => (
  <Tip title="Dev tip">
    You can use the
    <Link size={Link.sizes.SMALL} href="https://popper.js.org/docs/v2/modifiers/">
      Popper.js modifiers
    </Link>
    for extended Dialog customization.
  </Tip>
);

export const TipModal = () => (
  <Tip title="Wishing to position your popover in the center of the page?">
    Exactly for this purpose, we created the{" "}
    <StorybookLink page="Feedback/Modal" size={StorybookLink.sizes.SMALL}>
      Modal
    </StorybookLink>{" "}
    component! Check it out.
  </Tip>
);

export const TipDevTipTechnicalPattern = () => (
  <Tip title="Dev tip">
    If you wish to implement a{" "}
    <StorybookLink page="Inputs/Dropdown" size={StorybookLink.sizes.SMALL}>
      Dropdown
    </StorybookLink>{" "}
    inside a Dialog container and need help displaying the Dropdowns popovers correctly, read more about our Dropdown in
    popovers technical pattern{" "}
    <StorybookLink page="Technical Patterns/Dropdowns inside pop-overs" size={StorybookLink.sizes.SMALL}>
      here
    </StorybookLink>
    .
  </Tip>
);
