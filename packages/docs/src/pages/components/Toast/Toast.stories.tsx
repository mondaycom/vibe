import React from "react";
import { useCallback, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { Toast, Button, Flex } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { type Decorator, type Meta, type StoryObj } from "@storybook/react";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Toast,
  iconPropNamesArray: ["icon"]
});

const toastStoryDecorators: Decorator[] = [
  Story => (
    <div
      style={{
        padding: "40px",
        position: "static",
        transform: "translate(0, 0)",
        marginRight: "auto",
        marginLeft: "auto"
      }}
    >
      <Story />
    </div>
  )
];

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: metaSettings.argTypes,
  decorators: [...metaSettings.decorators, ...toastStoryDecorators]
} as Meta<typeof Toast>;

const toastTemplate = createComponentTemplate(Toast);

export const Overview: StoryObj<typeof Toast> = {
  render: toastTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-toast",
    children: "General message toast",
    open: true,
    actions: [
      {
        type: "button",
        content: "Button"
      }
    ]
  },
  parameters: {
    chromatic: { pauseAnimationAtEnd: false },
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const DefaultWithButton = {
  render: () => {
    return (
      <Toast id="default-with-button" open actions={[{ type: "button", content: "Button" }]}>
        General message toast
      </Toast>
    );
  },
  name: "Default with button",
  parameters: { chromatic: { pauseAnimationAtEnd: false } }
};

export const ToastWithLink = {
  render: () => {
    return (
      <Toast id="toast-with-link" open actions={[{ type: "link", text: "Link to action", href: "https://monday.com" }]}>
        General message toast
      </Toast>
    );
  },
  name: "Toast with link"
};

export const ToastWithLoading = {
  render: () => {
    return (
      <Toast id="toast-loading" open loading>
        General message toast
      </Toast>
    );
  },
  name: "Toast with loading",
  parameters: { chromatic: { pauseAnimationAtEnd: true } }
};

export const SuccessMessage = {
  render: () => {
    return (
      <Toast id="success-message" open type="positive" actions={[{ type: "button", content: "Undo 5" }]}>
        Positive message toast
      </Toast>
    );
  },
  name: "Success message"
};

export const ErrorMessage = {
  render: () => {
    return (
      <Toast id="error-message" open actions={[{ type: "button", content: "Button" }]} type="negative">
        Negative message toast
      </Toast>
    );
  },
  name: "Error message"
};

export const WarningMessage = {
  render: () => {
    return (
      <Toast id="warning-message" open actions={[{ type: "button", content: "Button" }]} type="warning">
        Warning message toast
      </Toast>
    );
  },
  name: "Warning message",
  parameters: { chromatic: { pauseAnimationAtEnd: false } }
};

export const DarkMessage = {
  render: () => {
    return (
      <Toast id="dark-message" open actions={[{ type: "button", content: "Button" }]} type="dark">
        Dark message toast
      </Toast>
    );
  },
  name: "Dark message",
  parameters: { chromatic: { pauseAnimationAtEnd: false } }
};

export const FeedbackLoop = {
  render: () => {
    return (
      <Toast id="feedback-loop" open type="positive" actions={[{ type: "button", content: "Undo" }]}>
        We successfully deleted 1 item
      </Toast>
    );
  },
  parameters: { chromatic: { pauseAnimationAtEnd: false } }
};

export const Animation = {
  render: () => {
    const [successToastOpen, setSuccessToastOpen] = useState(false);
    const [failureToastOpen, setFailureToastOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const onSuccessClick = useCallback(() => {
      setSuccessToastOpen(true);
      setIsDeleting(true);

      setTimeout(() => {
        setIsDeleting(false);
      }, 1000);
    }, []);

    const onFailureClick = useCallback(() => {
      setFailureToastOpen(true);
      setIsDeleting(true);

      setTimeout(() => {
        setIsDeleting(false);
      }, 1000);
    }, []);

    return (
      <Flex gap="medium">
        <Button
          id="animation-success-button"
          ariaLabel="Trigger success toast"
          onClick={onSuccessClick}
          kind={Button.kinds.SECONDARY}
        >
          Success action
        </Button>
        <Button
          id="animation-failure-button"
          ariaLabel="Trigger failure toast"
          onClick={onFailureClick}
          kind={Button.kinds.SECONDARY}
        >
          Failure action
        </Button>
        <Toast
          id="animation-success-toast"
          open={successToastOpen}
          type={isDeleting ? "normal" : "positive"}
          actions={isDeleting ? [] : [{ type: "button", content: "Undo" }]}
          onClose={() => setSuccessToastOpen(false)}
          autoHideDuration={2000}
          loading={isDeleting}
        >
          {isDeleting ? "Deleting 1 selected item..." : "We successfully deleted 1 item"}
        </Toast>
        <Toast
          id="animation-failure-toast"
          open={failureToastOpen}
          type={isDeleting ? "normal" : "negative"}
          onClose={() => setFailureToastOpen(false)}
          autoHideDuration={2000}
          loading={isDeleting}
        >
          {isDeleting ? "Deleting 1 selected item..." : "Something went wrong"}
        </Toast>
      </Flex>
    );
  }
};
