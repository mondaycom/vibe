import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    If you are taking users through a multistep process, use the{" "}
    <StorybookLink page="Navigation/MultiStepIndicator" size="small">
      MultiStepIndicator
    </StorybookLink>
    component instead.
  </Tip>
);
