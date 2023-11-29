import { Link, Tip } from "vibe-storybook-components";

export const TipDialogContentContainer = () => (
  <Tip>
    For setting the dialog UI appearance, use
    <Link size={Link.sizes.SMALL} href="/?path=/docs/popover-dialogcontentcontainer--docs">
      DialogContentContainer
    </Link>
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
    Exactly for this purpose, we created the
    <Link href="/?path=/docs/feedback-modal--docs" size={Link.sizes.SMALL}>
      Modal
    </Link>
    component! Check it out.
  </Tip>
);

export const TipDevTipTechnicalPattern = () => (
  <Tip title="Dev tip">
    If you wish to implement a
    <Link href="/?path=/docs/inputs-dropdown--docs" size={Link.sizes.SMALL}>
      Dropdown
    </Link>
    inside a Dialog container and need help displaying the Dropdowns popovers correctly, read more about our Dropdown in
    popovers technical pattern
    <Link
      href="/?path=/docs/technical-patterns-dropdowns-inside-pop-overs--modal-with-damaged-dropdown"
      size={Link.sizes.SMALL}
      withoutSpacing
    >
      here
    </Link>
    .
  </Tip>
);
