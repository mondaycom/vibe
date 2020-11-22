import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import Checkbox from "../Checkbox";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

export const Sandbox = () => (
  <div>
    <Checkbox
      id="Knobs"
      label={text("label", "text")}
      isSelected={boolean("isSelected", true)}
      isDisabled={boolean("isDisabled", false)}
    />
  </div>
);

export const OnChange = () => {
  const [selected, setsSelected] = useState(true);
  return (
    <div>
      <Checkbox
        id="Knobs"
        label={text("label", "text")}
        isSelected={selected}
        isDisabled={boolean("isDisabled", false)}
        onChange={() => setsSelected(!selected)}
      />
    </div>
  );
};

export const RTLSupport = () => (
    <div>
        <div style={{"direction": "rtl"}}>
            <Checkbox
                id="RTLKnobs"
                label={text("label", "text")}
                isSelected={boolean("isSelected", true)}
                isDisabled={boolean("isDisabled", false)}
            />
        </div>
        <div style={{"direction": "ltr"}}>
            <Checkbox
                id="LTRKnobs"
                label={text("label", "text")}
                isSelected={boolean("isSelected", true)}
                isDisabled={boolean("isDisabled", false)}
            />
        </div>
    </div>
);

export default {
  title: "Components/Checkbox",
  component: Checkbox
};
