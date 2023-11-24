import { Link, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    Button group will always have one button selected. If you need to display adjacent buttons without selected mode,
    use the
    <Link href="/?path=/docs/buttons-button--overview" size={Link.sizes.SMALL}>
      Button
    </Link>
  </Tip>
);
