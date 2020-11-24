import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { Checkbox } from "../Checkbox";

export const renderCheckboxes = (count, options = {}) => {
  const { includeKnobs } = options;
  const checkboxes = [];
  for (let i = 0; i < count; i++) {
    checkboxes.push(
      <Checkbox
        label={includeKnobs ? text(`Label ${i}`, `Checkbox ${i}`) : i}
        disabled={includeKnobs ? boolean(`Disabled ${i}`, false) : false}
        checked={includeKnobs ? boolean(`Checked ${i}`, true) : true}
      />
    );
  }

  return checkboxes;
};
