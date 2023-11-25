import { Link, Tip } from "vibe-storybook-components";

export const TipLoader = () => (
  <Tip>
    Using loader after the pages are fully loaded consider using the
    <Link href="/?path=/docs/feedback-loader--overview" size={Link.sizes.SMALL}>
      loader component.
    </Link>
  </Tip>
);
