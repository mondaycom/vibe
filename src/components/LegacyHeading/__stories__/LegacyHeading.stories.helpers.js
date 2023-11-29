import { Link, Tip } from "vibe-storybook-components";

export const TipEditableHeading = () => (
  <Tip title="Not what you were looking for?">
    Please check out our
    <Link href="/?path=/docs/inputs-editableheading--docs" size={Link.sizes.SMALL}>
      EditableHeading
    </Link>
    component if you would like to allow users to edit the title text.
  </Tip>
);
