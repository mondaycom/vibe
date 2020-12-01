import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { Checkbox } from "../Checkbox";

export const renderCheckboxes = (count, legend, includeKnobs = true) => {
  const checkboxes = [];

  for (let i = 0; i < count; i++) {
    checkboxes.push(
      <Checkbox
        key={i}
        label={includeKnobs ? text(`Label - ${i}`, `Checkbox ${i}`) : i}
        disabled={includeKnobs ? boolean(`Disabled - ${i}`, false) : false}
        checked={includeKnobs ? boolean(`Checked - ${i}`, true) : true}
      />
    );
  }

  return (
    <div>
      <fieldset className="monday-style-story-checkbox__sandbox-wrapper">
        <legend>{legend}</legend>
        {checkboxes}
      </fieldset>
    </div>
  );
};
