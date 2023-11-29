import { Link, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    For implementing a menu inside a dialog, please use our
    <Link href="/?path=/docs/navigation-menu--docs" size={Link.sizes.SMALL}>
      Menu
    </Link>
    component
  </Tip>
);
