import { Link, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    If you are taking users through a multistep process, use the
    <Link href="/?path=/docs/navigation-multistepindicator--overview" size={Link.sizes.SMALL}>
      MultiStepIndicator
    </Link>
    component instead.
  </Tip>
);
