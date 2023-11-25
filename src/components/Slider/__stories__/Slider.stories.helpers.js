import { Link, Tip } from "vibe-storybook-components";

export const TipMultiStepIndicator = () => (
  <Tip title="Not what you were looking for?">
    If you need to visualize progress use
    <Link href="/?path=/docs/navigation-multistepindicator--overview" size={Link.sizes.SMALL}>
      MultiStepIndicator
    </Link>
    component instead
  </Tip>
);
