import { Link, Tip } from "vibe-storybook-components";

export const TipTooltip = () => (
  <Tip title={"What to do when overflow is detected?"}>
    You might want to use
    <Link size={Link.sizes.SMALL} href="/?path=/docs/popover-tooltip--docs">
      Tooltip
    </Link>
    to display all the content.
  </Tip>
);
