import { ButtonGroup, SegmentedControl, type SegmentedControlSize } from "@vibe/core";
import { Board, Calendar, Chart } from "@vibe/icons";
import { useEffect, useState } from "react";
import type { Section } from "../section";
import { isCurrentVibeSource } from "../lib/vibeSource";

const buttonGroupControls: Section["controls"] = [
  {
    key: "kind",
    label: "Kind",
    type: "select",
    options: [
      { value: "primary", label: "Primary" },
      { value: "secondary", label: "Secondary" },
      { value: "tertiary", label: "Tertiary" },
    ],
  },
  {
    key: "size",
    label: "Size",
    type: "select",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
  { key: "disabled", label: "Disabled", type: "boolean" },
];

const buttonGroupDefaultState = {
  kind: "primary",
  size: "medium",
  disabled: false,
};

const ButtonGroupDemo: Section["Demo"] = ({ state }) => (
  <ButtonGroup
    groupAriaLabel="View options"
    options={[
      { value: "day", text: "Day" },
      { value: "week", text: "Week" },
      { value: "month", text: "Month" },
    ]}
    value="week"
    kind={state.kind === "tertiary" ? "tertiary" : "secondary"}
    size={state.size as "small" | "medium" | "large"}
    disabled={Boolean(state.disabled)}
  />
);

const segmentedControlControls: Section["controls"] = [
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
  { key: "withIcons", label: "With icons", type: "boolean" },
  { key: "fullWidth", label: "Full width", type: "boolean" },
  { key: "disabled", label: "Disabled", type: "boolean" },
  { key: "disabledSegment", label: "Disable last option", type: "boolean" },
];

const segmentedControlDefaultState = {
  size: "medium",
  withIcons: false,
  fullWidth: false,
  disabled: false,
  disabledSegment: false,
};

const SegmentedControlDemo: Section["Demo"] = ({ state }) => {
  const withIcons = Boolean(state.withIcons);
  const [value, setValue] = useState(withIcons ? "board" : "week");

  useEffect(() => {
    setValue(withIcons ? "board" : "week");
  }, [withIcons]);

  const options = withIcons
    ? [
        { value: "calendar", label: "Calendar", icon: Calendar },
        { value: "board", label: "Board", icon: Board },
        { value: "chart", label: "Chart", icon: Chart, disabled: Boolean(state.disabledSegment) },
      ]
    : [
        { value: "day", label: "Day" },
        { value: "week", label: "Week" },
        { value: "month", label: "Month", disabled: Boolean(state.disabledSegment) },
      ];

  return (
    <SegmentedControl
      ariaLabel="View options"
      options={options}
      value={value}
      onChange={setValue}
      size={state.size as SegmentedControlSize}
      fullWidth={Boolean(state.fullWidth)}
      disabled={Boolean(state.disabled)}
    />
  );
};

const section: Section = {
  id: "button-group",
  title: "Button Group",
  defaultState: isCurrentVibeSource ? segmentedControlDefaultState : buttonGroupDefaultState,
  controls: isCurrentVibeSource ? segmentedControlControls : buttonGroupControls,
  Demo: isCurrentVibeSource ? SegmentedControlDemo : ButtonGroupDemo,
};

export default section;
