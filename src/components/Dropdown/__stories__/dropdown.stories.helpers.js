import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipDevTipPopover = () => (
  <Tip title="Dev tip">
    For more details about dropdowns APIs for displaying correctly inside
    <StorybookLink href="/?path=/docs/components-dialog-dialog--docs" size="small">
      Dialogs,
    </StorybookLink>
    <StorybookLink href="Feedback/Modal--docs" size="small">
      Modals
    </StorybookLink>
    and other popovers click{" "}
    <StorybookLink page="Technical patterns/Dropdowns inside pop overs/Modal with damaged dropdown" size="small">
      here
    </StorybookLink>
    .
  </Tip>
);
