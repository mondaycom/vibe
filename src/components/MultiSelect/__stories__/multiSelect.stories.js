import React from "react";
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
  const radiosCount = number("radiosCount", 5);
  return (
    <StoryWrapper>
      <FlexLayout direction="column">
        <MultiSelect
          className="multiselect-story"
          options={mockColorOptions}
          // value={["ocean", "blue"]}
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
