import { Link, Tip } from "vibe-storybook-components";

export const TipHeading = () => (
  <Tip>
    Check out our
    <Link href="/?path=/docs/text-heading--overview" size={Link.sizes.SMALL}>
      Heading
    </Link>
    component for text headlines.
  </Tip>
);

export const TipLink = () => (
  <Tip>
    If you need to place a link outside of the textual flow, please use our
    <Link href="/?path=/docs/navigation-link--overview" size={Link.sizes.SMALL}>
      Link
    </Link>
    component.
  </Tip>
);
