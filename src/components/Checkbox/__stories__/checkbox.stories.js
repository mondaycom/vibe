import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number } from "@storybook/addon-knobs";
import Checkbox from "../Checkbox";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import { renderCheckboxes } from "./checkbox.stories.renderCheckboxes";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";


export const Sandbox = () => {
  const checkboxesCount = number("Checkboxes Count", 5);
  return renderCheckboxes(checkboxesCount, { includeKnobs: true });
};

export const States = () => {
  return (
    <StoryWrapper>
      <StoryStateRow componentDescription="Regular">
        <Checkbox
          value="1"
          label="Option"
          name="regular"
          componentClassName="monday-style-regular"
          disabled={false}
        />
      </StoryStateRow>
      <StoryStateRow componentDescription="Selected">
        <Checkbox
          value="1"
          label="Option"
          name="selected"
          defaultChecked={true}
          disabled={false}
          componentClassName="monday-style-selected"
        />
      </StoryStateRow>
      <StoryStateRow componentDescription="Disabled">
        <Checkbox
          value="1"
          label="Option"
          name="disabledRadio"
          disabled={true}
        />
      </StoryStateRow>
      <StoryStateRow componentDescription="Disabled selected">
        <Checkbox
          value="1"
          label="Option"
          name="disabledSelected"
          disabled={true}
          defaultChecked={true}
        />
      </StoryStateRow>
    </StoryWrapper>
  );
};

export const OnChange = () => {
    const [selected, setsSelected] = useState(true);
    return (
        <div>
            <Checkbox
                id="Knobs"
                label={text("label", "text")}
                checked={selected}
                disabled={boolean("isDisabled", false)}
                onChange={() => setsSelected(!selected)}
            />
        </div>
    );
};

export const check = () => (
    <section className="checkboxes-section">
        <h3>Option #1: Use fieldsets to group options</h3>
        <fieldset>
            <legend>Who is your favorite 19th century scientist</legend>
            <div className="checkbox column">
                <Checkbox id="bell" name="scientist" value="bell" label="Alexander Graham Bell"/>
                <Checkbox id="bell" name="scientist" value="curry" label="Marie Curie"/>
                <Checkbox id="bell" name="scientist" value="nobel" label="Alfred Nobel"/>
            </div>
        </fieldset>
    </section>
);


export const RTLSupport = () => (
  <div>
    <div style={{ direction: "rtl" }}>
      <Checkbox
        id="RTLKnobs"
        label={text("label", "text")}
        checked={boolean("checked", true)}
        disabled={boolean("disabled", false)}
      />
    </div>
    <div style={{ direction: "ltr" }}>
      <Checkbox
        id="LTRKnobs"
        label={text("label", "text")}
        checked={boolean("checked", true)}
        disabled={boolean("disabled", false)}
      />
    </div>
  </div>
);

export default {
  title: "Components/Checkbox",
  component: Checkbox
};
