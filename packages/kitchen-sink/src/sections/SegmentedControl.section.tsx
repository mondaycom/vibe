import { SegmentedControl, type SegmentedControlSize } from "@vibe/core";
import { useState } from "react";
import type { Section } from "../section";

const controls: Section["controls"] = [
  {
    key: "size",
    label: "Size",
    type: "select",
    options: [
      { value: "xs", label: "XS" },
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
  { key: "fullWidth", label: "Full width", type: "boolean" },
  { key: "disabled", label: "Disabled", type: "boolean" },
  { key: "disabledSegment", label: "Disable 'Month'", type: "boolean" },
];

const defaultState = {
  size: "medium",
  fullWidth: false,
  disabled: false,
  disabledSegment: false,
};

const Demo: Section["Demo"] = ({ state }) => {
  const [value, setValue] = useState("week");

  return (
    <SegmentedControl
      ariaLabel="View options"
      options={[
        { value: "day", label: "Day" },
        { value: "week", label: "Week" },
        { value: "month", label: "Month", disabled: Boolean(state.disabledSegment) },
      ]}
      value={value}
      onChange={setValue}
      size={state.size as SegmentedControlSize}
      fullWidth={Boolean(state.fullWidth)}
      disabled={Boolean(state.disabled)}
    />
  );
};

const section: Section = {
  id: "segmented-control",
  title: "Segmented Control",
  defaultState,
  controls,
  Demo,
};

export default section;
