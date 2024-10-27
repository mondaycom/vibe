import React from "react";
import { useCallback, useMemo, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Toast from "../Toast";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Button from "../../Button/Button";
import "./Toast.stories.scss";
import { ToastAction } from "../Toast.types";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Toast,
  iconPropNamesArray: ["icon"]
});

export default {
  title: "Feedback/Toast",
  component: Toast,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const toastTemplate = createComponentTemplate(Toast);

export const Overview = {
  render: toastTemplate.bind({}),
  name: "Overview",

  args: {
    children: "General message toast",
    open: true,
    className: "monday-storybook-toast_wrapper",

    actions: [
      {
        type: "button",
        content: "Button"
      }
    ]
  },
  parameters: { chromatic: { pauseAnimationAtEnd: false } }
};

export const DefaultWithButton = {
  render: () => {
    const actions: ToastAction[] = useMemo(
      () => [
        {
          type: "button",
          content: "Button"
        }
      ],
      []
    );

    return (
      <Toast open autoHideDuration={5000} actions={actions} className="monday-storybook-toast_wrapper">
        General message toast
      </Toast>
    );
  },

  name: "Default with button",
  parameters: { chromatic: { pauseAnimationAtEnd: false } }
};

export const ToastWithLink = {
  render: () => {
    const actions: ToastAction[] = useMemo(
      () => [
        {
          type: "link",
          text: "Link to action",
          href: "https://monday.com"
        }
      ],
      []
    );

    return (
      <Toast open actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        General message toast
      </Toast>
    );
  },

  name: "Toast with link"
};

export const ToastWithLoading = {
  render: () => {
    return (
      <Toast open loading className="monday-storybook-toast_wrapper">
        General message toast
      </Toast>
    );
  },

  name: "Toast with loading",
  parameters: { chromatic: { pauseAnimationAtEnd: true } }
};

export const SuccessMessage = {
  render: () => {
    const actions: ToastAction[] = useMemo(
      () => [
        {
          type: "button",
          content: "Undo 5"
        }
      ],
      []
    );

    return (
      <Toast open type="positive" actions={actions} autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        Positive message toast
      </Toast>
    );
  },

  name: "Success message"
};

export const ErrorMessage = {
  render: () => {
    const actions: ToastAction[] = useMemo(
      () => [
        {
          type: "button",
          content: "Button"
        }
      ],
      []
    );

    return (
      <Toast open actions={actions} type="negative" autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        Negative message toast
      </Toast>
    );
  },

  name: "Error message"
};

export const WarningMessage = {
  render: () => {
    const actions: ToastAction[] = useMemo(
      () => [
        {
          type: "button",
          content: "Button"
        }
      ],
      []
    );

    return (
      <Toast open actions={actions} type="warning" autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        Warning message toast
      </Toast>
    );
  },

  name: "Warning message",
  parameters: { chromatic: { pauseAnimationAtEnd: false } }
};

export const DarkMessage = {
  render: () => {
    const actions: ToastAction[] = useMemo(
      () => [
        {
          type: "button",
          content: "Button"
        }
      ],
      []
    );

    return (
      <Toast open actions={actions} type="dark" autoHideDuration={5000} className="monday-storybook-toast_wrapper">
        Dark message toast
      </Toast>
    );
  },

  name: "Dark message",
  parameters: { chromatic: { pauseAnimationAtEnd: false } }
};

export const FeedbackLoop = {
  render: () => {
    const actions = useMemo(
      () => [
        {
          type: Toast.actionTypes.BUTTON,
          content: "Undo"
        }
      ],
      []
    );

    return (
      <Toast open type={Toast.types.POSITIVE} actions={actions} className="monday-storybook-toast_wrapper">
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

    const actions = useMemo<ToastAction[]>(
      () => [
        {
          type: "button",
          content: "Undo"
        }
      ],
      []
    );

    return (
      <>
        <Button onClick={onSuccessClick} kind={Button.kinds.SECONDARY}>
          Success action
        </Button>
        <Button onClick={onFailureClick} kind={Button.kinds.SECONDARY}>
          Failure action
        </Button>
        <Toast
          open={successToastOpen}
          type={isDeleting ? "normal" : "positive"}
          actions={isDeleting ? [] : actions}
          onClose={() => setSuccessToastOpen(false)}
          autoHideDuration={2000}
          loading={isDeleting}
        >
          {isDeleting ? "Deleting 1 selected item..." : "We successfully deleted 1 item"}
        </Toast>
        <Toast
          open={failureToastOpen}
          type={isDeleting ? "normal" : "negative"}
          onClose={() => setFailureToastOpen(false)}
          autoHideDuration={2000}
          loading={isDeleting}
        >
          {isDeleting ? "Deleting 1 selected item..." : "Something went wrong"}
        </Toast>
      </>
    );
  }
};
