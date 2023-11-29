import { Link, Tip } from "vibe-storybook-components";

export const TipLabel = () => (
  <Tip>
    Chips will always show up in context of a field. If you just need to add information, use
    <Link href="/?path=/docs/data-display-label--overview" size={Link.sizes.SMALL}>
      Label.
    </Link>
  </Tip>
);
