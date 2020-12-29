import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number } from "@storybook/addon-knobs";
import Checkbox from "../Checkbox";
import { StoryStateRow } from "../../storybook-helpers";
import { renderCheckboxes } from "./checkbox.stories.renderCheckboxes";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import "./checkbox.stories.scss";
import { withPerformance } from "storybook-addon-performance";

export const Sandbox = () => {
  const checkedCount = number("Checkboxes (checked prop) Count", 5);

  const checkedComps = renderCheckboxes(checkedCount, "Checkboxes with checked prop", "checked", true);

  return checkedComps;
};

export const States = () => {
  return (
    <StoryWrapper componentClassName="monday-style-story-checkbox__state-wrapper">
      <StoryStateRow componentDescription="Regular" componentClassName="monday-style-story-checkbox__state">
        <Checkbox value="1" label="Option" name="regular" disabled={false} />
      </StoryStateRow>
      <StoryStateRow componentDescription="Selected" componentClassName="monday-style-story-checkbox__state">
        <Checkbox
          value="1"
          label="Option"
          name="selected"
          defaultChecked={true}
          disabled={false}
          componentClassName="monday-style-selected"
        />
      </StoryStateRow>
      <StoryStateRow
        componentDescription="Hover"
        componentClassName="monday-style-story-checkbox__state monday-style-story-checkbox__state--hover"
      >
        <Checkbox
          value="1"
          label="Option"
          name="selected"
          disabled={false}
          componentClassName="monday-style-story-selected"
        />
      </StoryStateRow>
      <StoryStateRow
        componentDescription="Hover selected"
        componentClassName="monday-style-story-checkbox__state monday-style-story-checkbox__state--selected-hover"
      >
        <Checkbox
          value="1"
          label="Option"
          name="selected"
          defaultChecked={true}
          disabled={false}
          componentClassName="monday-style-selected"
        />
      </StoryStateRow>
      <StoryStateRow componentDescription="Selected" componentClassName="monday-style-story-checkbox__state">
        <Checkbox
          value="1"
          label="Option"
          name="selected"
          defaultChecked={true}
          disabled={false}
          componentClassName="monday-style-selected"
        />
      </StoryStateRow>

      <StoryStateRow componentDescription="Disabled" componentClassName="monday-style-story-checkbox__state">
        <Checkbox value="1" label="Option" name="disabledRadio" disabled={true} />
      </StoryStateRow>
      <StoryStateRow componentDescription="Disabled selected" componentClassName="monday-style-story-checkbox__state">
        <Checkbox value="1" label="Option" name="disabledSelected" disabled={true} defaultChecked={true} />
      </StoryStateRow>
    </StoryWrapper>
  );
};

export const OnChange = () => {
  const [selected, setsSelected] = useState(true);
  return (
    <StoryWrapper>
      <Checkbox
        id="Knobs"
        label={text("label", "text")}
        checked={selected}
        disabled={boolean("isDisabled", false)}
        onChange={e => {
          action("onChange")(e);
          setsSelected(!selected);
        }}
      />
    </StoryWrapper>
  );
};

export const RTLSupport = () => [
  <div className="monday-style-story-checkbox__directions-wrapper" style={{ direction: "rtl" }}>
    <Checkbox id="RTLKnobs" label={text("LTR label", "טקסט בעברית")} disabled={boolean("disabled", false)} />
  </div>,
  <div className="monday-style-story-checkbox__directions-wrapper" style={{ direction: "ltr" }}>
    <Checkbox id="LTRKnobs" label={text("RTL label", "English text")} disabled={boolean("disabled", false)} />
  </div>
];

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: { onClick: { action: "onChange" } },
  decorators: [withPerformance]
};
