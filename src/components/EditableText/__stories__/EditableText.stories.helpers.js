import { Link, Tip } from "vibe-storybook-components";

export const TipTextField = () => (
  <Tip title="Am I using the right component?">
    This component is used for editing existing text. To allow users to fill empty text fields, for example in a form,
    consider using
    <Link href="/?path=/docs/inputs-textfield--docs" target={Link.targets.PARENT} size="small">
      TextField
    </Link>
  </Tip>
);
