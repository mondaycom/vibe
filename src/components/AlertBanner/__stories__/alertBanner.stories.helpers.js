import { Link, Tip } from "vibe-storybook-components";

export const TipWhenToUse = () => (
  <Tip title="When to use?">
    Alert banners should be reserved only for high-signal, system-level alert messages. For in-app notifications use a
    <Link href="/?path=/docs/feedback-toast--docs" size={Link.sizes.SMALL}>
      Toast.
    </Link>
  </Tip>
);
