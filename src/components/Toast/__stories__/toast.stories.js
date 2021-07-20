import React, { useMemo, useState } from "react";
import { number, select, boolean } from "@storybook/addon-knobs";
import Toast from "../Toast";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import Send from "../../Icon/Icons/components/Send";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";

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
  const toggleToast = () => setToastOpen(open => !open);
  const closeToast = () => setToastOpen(false);
  let icon = knobs.icon;
  if (knobs.icon === "send") {
    icon = sendIconElement;
  }
  return (
    <section>
      <StoryStateRow>
        <StoryStateColumn>
          <Button onClick={() => toggleToast()}>Toggle Toast!</Button>
          <Toast
            open={toastOpen}
            onClose={() => closeToast()}
            action={
              <Button size={Button.sizes.SMALL} kind={Button.kinds.SECONDARY} color={Button.colors.ON_PRIMARY_COLOR}>
                Undo 5
              </Button>
            }
            type={knobs.type}
            icon={icon}
            closeable={knobs.closeable}
            autoHideDuration={knobs.autoHideDuration}
            hideIcon={knobs.hideIcon}
          >
            Something Happened!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          </Toast>
        </StoryStateColumn>
      </StoryStateRow>
    </section>
  );
};
export default {
  title: "Components|Toast",
  component: Toast
};
