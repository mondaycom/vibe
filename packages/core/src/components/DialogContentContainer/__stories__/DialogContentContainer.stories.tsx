import React from "react";
import DialogContentContainer from "../DialogContentContainer";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import DialogContentContainerExample from "./DialogContentContainerExample";

const metaSettings = createStoryMetaSettingsDecorator({
  component: DialogContentContainer,
  ignoreControlsPropNamesArray: ["children"]
});

const dialogContentContainerTemplate = createComponentTemplate(DialogContentContainer);

export default {
  title: "Components/DialogContentContainer",
  component: DialogContentContainer,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { DialogContentContainerExample }
      }
    }
  }
};

export const Overview = {
  render: dialogContentContainerTemplate.bind({}),
  name: "Overview",

  args: {
    children: <DialogContentContainerExample />
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
    <DialogContentContainer type={DialogContentContainer.types.POPOVER}>
      <DialogContentContainerExample />
    </DialogContentContainer>
  )
};

export const Modal = {
  render: () => (
    <DialogContentContainer type={DialogContentContainer.types.MODAL}>
      <DialogContentContainerExample />
    </DialogContentContainer>
  )
};
