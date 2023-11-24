import { Link, Tip } from "vibe-storybook-components";

export const TipButton = () => (
  <Tip>
    If you need an action that does not have context with text{" "}
    <Link href="/?path=/docs/inputs-combobox--overview" size={Link.sizes.SMALL} withoutSpacing>
      Button
    </Link>
    .
  </Tip>
);
