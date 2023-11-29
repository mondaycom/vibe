import { Link, Tip } from "vibe-storybook-components";

export const modifiers = [
  {
    name: "preventOverflow",
    options: {
      mainAxis: false
    }
  },
  {
    name: "flip",
    options: {
      fallbackPlacements: []
    }
  }
];

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    If you need to provide additional information about a component, use the
    <Link href="/?path=/docs/popover-tooltip--docs" size={Link.sizes.SMALL}>
      Tooltip
    </Link>
    or
    <Link href="/?path=/docs/feedback-attentionbox--docs" size={Link.sizes.SMALL}>
      Attention box.
    </Link>
  </Tip>
);
