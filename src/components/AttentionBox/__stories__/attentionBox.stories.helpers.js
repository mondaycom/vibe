import { Link, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    If the information about a component isn’t critical for the user, use a
    <Link href="/?path=/docs/popover-tooltip--docs" size={Link.sizes.SMALL}>
      Tooltip
    </Link>
    instead.
  </Tip>
);
