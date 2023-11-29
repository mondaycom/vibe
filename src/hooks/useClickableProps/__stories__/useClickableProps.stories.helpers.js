import { Link, Tip } from "vibe-storybook-components";

export const TipClickable = () => (
  <Tip title="Check out our component solution for this use case">
    For more simple use cases, you also can use our
    <Link size={Link.sizes.SMALL} href="/?path=/docs/accessibility-clickable--docs">
      Clickable
    </Link>
    component wrapper.
  </Tip>
);
