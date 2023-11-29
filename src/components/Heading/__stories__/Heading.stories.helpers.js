import { Link, Tip } from "vibe-storybook-components";

export const TipEditableHeading = () => (
  <Tip title="Heading components are not editable">
    Check out our
    <Link href="/?path=/docs/inputs-editableheading--docs" size={Link.sizes.SMALL}>
      EditableHeading
    </Link>
    component if you would like to allow users to edit the title text.
  </Tip>
);
