import { Link, Tip } from "vibe-storybook-components";

export const TipAmIUsingTheRightComponent = () => (
  <Tip title="Am I using the right component?">
    For settings that are immediately applied, consider using a
    <Link href="/?path=/docs/inputs-toggle--docs" size={Link.sizes.SMALL}>
      toggle switch
    </Link>
    instead.
  </Tip>
);
