import { Link, Tip } from "vibe-storybook-components";

export const TipSkeleton = () => (
  <Tip>
    While loading content consider using
    <Link href="/?path=/docs/feedback-skeleton--overview" size={Link.sizes.SMALL}>
      Skeleton loading
    </Link>
  </Tip>
);
