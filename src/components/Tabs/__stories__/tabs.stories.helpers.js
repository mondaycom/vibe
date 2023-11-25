import { Link, Tip } from "vibe-storybook-components";

export const TipButtonGroup = () => (
  <Tip>
    Use tabs to navigate between different contents, if switching between states within the same content use
    <Link href="/?path=/docs/buttons-buttongroup--overview" size={Link.sizes.SMALL}>
      Button group
    </Link>
    instead
  </Tip>
);
