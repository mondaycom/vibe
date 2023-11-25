import { Link, Tip } from "vibe-storybook-components";

export const TipAlertBanner = () => (
  <Tip title="Check yourself">
    Need to inform the user about a system’s action? Use an
    <Link href="/?path=/docs/feedback-alertbanner--overview" size={Link.sizes.SMALL}>
      AlertBanner
    </Link>
    instead.
  </Tip>
);
