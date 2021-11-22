import React, { useState } from "react";
import { text, boolean, number } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { StoryStateColumn, FlexLayout } from "../../storybook-helpers";
import MultiSelect from "../MultiSelect";
import "./multiSelect.stories.scss";

const mockColorOptions = [
  { value: "English", label: "English", isFixed: true },
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" }
];

export const Sandbox = () => {
  const [options, setOptions] = useState(["ocean", "blue", "purple"]);
  const onAdd = value => setOptions([...options, value]);
  const onRemove = value => setOptions(options.filter(val => val !== value));
  const onClear = () => setOptions([]);

  return (
    <StoryWrapper>
      <FlexLayout direction="column">
        <MultiSelect
          className="multiselect-story"
          options={mockColorOptions}
          value={options}
          onAdd={onAdd}
          onRemove={onRemove}
          onClear={onClear}
        />
      </FlexLayout>
    </StoryWrapper>
  );
};

export default {
  title: "Components|MultiSelect",
  component: MultiSelect,
  decorators: [withPerformance]
};
