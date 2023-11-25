import { Link, Tip } from "vibe-storybook-components";

export const TipDropdown = () => (
  <Tip>
    When there’s limited space or no default selection, consider using a select
    <Link href="/?path=/docs/inputs-dropdown--overview" size={Link.sizes.SMALL}>
      Dropdown
    </Link>
    instead.
  </Tip>
);
