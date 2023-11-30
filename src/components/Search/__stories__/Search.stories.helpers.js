import { Link, Tip } from "vibe-storybook-components";

export const TipCombobox = () => (
  <Tip title="Not what you were looking for?">
    If you need to filter results from a long list, consider using the
    <Link href="/?path=/docs/inputs-combobox--docs" size={Link.sizes.SMALL}>
      Combobox
    </Link>
    component.
  </Tip>
);
