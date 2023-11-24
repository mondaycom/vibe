import { Link, Tip } from "vibe-storybook-components";

export const TipOtherComponents = () => (
  <Tip>
    When there are fewer than five items, consider using
    <Link href="/?path=/docs/inputs-radiobutton--overview" size={Link.sizes.SMALL}>
      Radio buttons
    </Link>
    (if only one item can be selected) or
    <Link href="/?path=/docs/inputs-checkbox--overview" size={Link.sizes.SMALL}>
      Checkboxes
    </Link>
    (if multiple items can be selected).
  </Tip>
);
