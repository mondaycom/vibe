import React from "react";
import { useCallback, useMemo, useState } from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Toast from "../Toast";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Button from "../../Button/Button";
import { Delete } from "../../Icon/Icons";
import "./Toast.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Toast,
  enumPropNamesArray: ["type"],
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
        type: Toast.actionTypes.BUTTON,
        content: "Button"
      }
    ]
  }
};

export const DefaultWithButton = {
  render: () => {
    const actions = useMemo(
      () => [
        {
          type: Toast.actionTypes.BUTTON,
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

  name: "Default with button"
};

export const ToastWithLink = {
  render: () => {
    const actions = useMemo(
      () => [
        {
          type: Toast.actionTypes.LINK,
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
    const actions = useMemo(
      () => [
        {
          type: Toast.actionTypes.BUTTON,
          content: "Undo 5"
        }
      ],
      []
    );

    return (
      <Toast
        open
        type={Toast.types.POSITIVE}
        actions={actions}
        autoHideDuration={5000}
        className="monday-storybook-toast_wrapper"
      >
        Positive message toast
      </Toast>
    );
  },

  name: "Success message"
};

export const ErrorMessage = {
  render: () => {
    const actions = useMemo(
      () => [
        {
          type: Toast.actionTypes.BUTTON,
          content: "Button"
        }
      ],
      []
    );

    return (
      <Toast
        open
        actions={actions}
        type={Toast.types.NEGATIVE}
        autoHideDuration={5000}
        className="monday-storybook-toast_wrapper"
      >
        Negative message toast
      </Toast>
    );
  },

  name: "Error message"
};

export const WarningMessage = {
  render: () => {
    const actions = useMemo(
      () => [
        {
          type: Toast.actionTypes.BUTTON,
          content: "Button"
        }
      ],
      []
    );

    return (
      <Toast
        open
        actions={actions}
        type={Toast.types.WARNING}
        autoHideDuration={5000}
        className="monday-storybook-toast_wrapper"
      >
        Warning message toast
      </Toast>
    );
  },

  name: "Warning message"
};

export const DarkMessage = {
  render: () => {
    const actions = useMemo(
      () => [
        {
          type: Toast.actionTypes.BUTTON,
          content: "Button"
        }
      ],
      []
    );

    return (
      <Toast
        open
        actions={actions}
        type={Toast.types.DARK}
        autoHideDuration={5000}
        className="monday-storybook-toast_wrapper"
      >
        Dark message toast
      </Toast>
    );
  },

  name: "Dark message"
};

// TODO storybook 7 migration: toast isn't opening at the top of the page, but inside of the story instead
export const FeedbackLoop = {
  render: () => {
    const [toastOpen, setToastOpen] = useState(false);
    const onClickCallback = useCallback(() => setToastOpen(toastOpen => !toastOpen), [setToastOpen]);
    const onCloseCallback = useCallback(() => setToastOpen(false), [setToastOpen]);

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
      <>
        <Button leftIcon={Delete} onClick={onClickCallback}>
          Delete item
        </Button>
        <Toast
          open={toastOpen}
          type={Toast.types.POSITIVE}
          actions={actions}
          onClose={onCloseCallback}
          autoHideDuration={5000}
          className="monday-storybook-toast_box"
        >
          We successfully deleted 1 item
        </Toast>
      </>
    );
  },

  name: "Feedback loop"
};
