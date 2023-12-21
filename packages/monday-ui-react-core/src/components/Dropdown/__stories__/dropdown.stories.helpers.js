import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipDevTipPopover = () => (
  <Tip title="Dev tip">
    For more details about dropdowns APIs for displaying correctly inside{" "}
    <StorybookLink page="Components/Dialog/Dialog" size={StorybookLink.sizes.SMALL}>
      Dialogs,
    </StorybookLink>{" "}
    <StorybookLink page="Feedback/Modal" size={StorybookLink.sizes.SMALL}>
      Modals
    </StorybookLink>{" "}
    and other popovers click{" "}
    <StorybookLink
      page="Technical patterns/Dropdowns inside pop overs"
      story="Modal with damaged dropdown"
      size={StorybookLink.sizes.SMALL}
    >
      here
    </StorybookLink>
    .
  </Tip>
);
