import { Link, Tip } from "vibe-storybook-components";

export const TipIconButton = () => (
  <Tip>
    If you need to use icon as button with no text, check out
    <Link href="/?path=/docs/buttons-iconbutton--docs" size={Link.sizes.SMALL}>
      IconButton
    </Link>
    component
  </Tip>
);
