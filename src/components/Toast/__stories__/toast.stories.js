import React, { useMemo, useState } from "react";
import { number, select, boolean } from "@storybook/addon-knobs";
import Toast from "../Toast";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import Send from "../../Icon/Icons/components/Send";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import ToastButton from "../ToastButton";
import ToastLink from "../ToastLink";

export const Sandbox = () => {
  const sendIconElement = (
    <Icon iconType={Icon.type.SVG} clickable={false} icon={Send} iconSize="20px" ignoreFocusStyle />
  );

  const knobs = {
    type: select("type", {
      Normal: Toast.types.NORMAL,
      Positive: Toast.types.POSITIVE,
      Negative: Toast.types.NEGATIVE
    }),
    closeable: boolean("closeable", true),
    autoHideDuration: number("autoHideDuration", 0),
    icon: select("icon", {
      default: null,
      star: "fa fa-star",
      send: "send"
    }),
    hideIcon: boolean("hideIcon", false)
  };
  const [toastOpen, setToastOpen] = useState(false);
  const [toastOpenButton, setToastOpenButton] = useState(false);
  const [toastOpenLink, setToastOpenLink] = useState(false);
  const [toastOpenLinkButton, setToastOpenLinkButton] = useState(false);

  const toggleToast = () => setToastOpen(open => !open);
  const closeToast = () => setToastOpen(false);
  const toggleToastButton = () => setToastOpenButton(open => !open);
  const closeToastButton = () => setToastOpenButton(false);
  const toggleToastLink = () => setToastOpenLink(open => !open);
  const closeToastLink = () => setToastOpenLink(false);
  const toggleToastLinkButton = () => setToastOpenLinkButton(open => !open);
  const closeToastLinkButton = () => setToastOpenLinkButton(false);
  let icon = knobs.icon;
  if (knobs.icon === "send") {
    icon = sendIconElement;
  }
  return (
    <section>
      <StoryStateColumn>
        <Button onClick={() => toggleToast()}>Toggle Toast!</Button>
        <Toast
          open={toastOpen}
          onClose={() => closeToast()}
          type={knobs.type}
          icon={icon}
          closeable={knobs.closeable}
          autoHideDuration={knobs.autoHideDuration}
          hideIcon={knobs.hideIcon}
        >
          Something Happened
        </Toast>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button onClick={() => toggleToastButton()}>Toggle toast with button!</Button>
        <Toast
          open={toastOpenButton}
          onClose={() => closeToastButton()}
          action={<ToastButton>Undo 5</ToastButton>}
          type={knobs.type}
          icon={icon}
          closeable={knobs.closeable}
          autoHideDuration={knobs.autoHideDuration}
          hideIcon={knobs.hideIcon}
        >
          Something Happened
        </Toast>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button onClick={() => toggleToastLink()}>Toggle Toast with link!</Button>
        <Toast
          open={toastOpenLink}
          onClose={() => closeToastLink()}
          action={<ToastLink text="Lorem ipsum" href="https://monday.com" />}
          type={knobs.type}
          icon={icon}
          closeable={knobs.closeable}
          autoHideDuration={knobs.autoHideDuration}
          hideIcon={knobs.hideIcon}
        >
          Something Happened
        </Toast>
      </StoryStateColumn>
      <StoryStateColumn>
        <Button onClick={() => toggleToastLinkButton()}>Toggle Toast with link and button!</Button>
        <Toast
          open={toastOpenLinkButton}
          onClose={() => closeToastLinkButton()}
          action={[<ToastLink text="Lorem ipsum" href="https://monday.com" />, <ToastButton>Undo 5</ToastButton>]}
          type={knobs.type}
          icon={icon}
          closeable={knobs.closeable}
          autoHideDuration={knobs.autoHideDuration}
          hideIcon={knobs.hideIcon}
        >
          Something Happened
        </Toast>
      </StoryStateColumn>
    </section>
  );
};
export default {
  title: "Components|Toast",
  component: Toast
};
