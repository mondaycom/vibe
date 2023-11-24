import { Link, Tip } from "vibe-storybook-components";

export const TipDevTipPopover = () => (
  <Tip title="Dev tip">
    For more details about dropdowns APIs for displaying correctly inside
    <Link href="/?path=/docs/components-dialog-dialog--overview" size={Link.sizes.SMALL}>
      Dialogs,
    </Link>
    <Link href="/?path=/docs/feedback-modal--overview" size={Link.sizes.SMALL}>
      Modals
    </Link>
    and other popovers click{" "}
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
