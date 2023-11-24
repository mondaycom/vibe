import { Link, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    To display icons that do not have actions associated with them, use the{" "}
    <Link href="/?path=/docs/components-icon--overview" size={Link.sizes.SMALL} withoutSpacing>
      Icon component
    </Link>
    .
  </Tip>
);

export const TipMenuButton = () => (
  <Tip>
    If you need to use an icon as a button that opens dialog or menu next to it, check out
    <Link href="/?path=/docs/buttons-menubutton--overview" size={Link.sizes.SMALL}>
      Menu button
    </Link>
    component.
  </Tip>
);
