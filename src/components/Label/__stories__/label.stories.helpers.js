import { Link, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    Need to count or indicate numbers? Use the
    <Link href="/?path=/docs/feedback-counter--overview" size={Link.sizes.SMALL}>
      Counter
    </Link>
    component instead.
  </Tip>
);
