import React from "react";
import RadioButton from "../RadioButton";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider,
} from "../../storybook-helpers";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

export const Sandbox = () => {
  const radiosCount = number("radiosCount", 5);
  return <div>{renderRadioButtons(radiosCount)}</div>;
};

const renderRadioButtons = (count) => {
  const radioButtons = [];
  for (let i = 0; i < count; i++) {
    radioButtons.push(
      <RadioButton
        value={text(`Value${i}`, `Value ${i}`)}
        text={text(`Text${i}`, `Option ${i}`)}
        name={text(`Name${i}`, "radios")}
        disabled={boolean(`Disabled${i}`, false)}
      />
    );
  }

  return radioButtons;
};

export default {
  title: "Components/RadioButton",
  component: RadioButton,
};
