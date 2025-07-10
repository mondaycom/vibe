import React from "react";
import DialogContentContainer from "../DialogContentContainer";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import Box from "../../Box/Box";

const metaSettings = createStoryMetaSettingsDecorator({
  component: DialogContentContainer,
  ignoreControlsPropNamesArray: ["children"]
});

const dialogContentContainerTemplate = createComponentTemplate(DialogContentContainer);

export default {
  title: "Components/DialogContentContainer",
  component: DialogContentContainer,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: dialogContentContainerTemplate.bind({}),
  name: "Overview",

  args: {
    children: <Box margin="medium" padding="medium" />
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Popover = {
  render: () => (
    <DialogContentContainer type="popover">
      <Box margin="medium" padding="medium" />
    </DialogContentContainer>
  )
};

export const Modal = {
  render: () => (
    <DialogContentContainer type="modal">
      <Box margin="medium" padding="medium" />
    </DialogContentContainer>
  )
};
