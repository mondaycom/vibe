import { Chips } from "@vibe/core";
import type { Section } from "../section";

const controls: Section["controls"] = [
  {
    key: "color",
    label: "Color",
    type: "select",
    options: [
      { value: "primary", label: "Primary" },
      { value: "positive", label: "Positive" },
      { value: "negative", label: "Negative" },
      { value: "warning", label: "Warning" },
    ],
  },
  {
    key: "size",
    label: "Size",
    type: "select",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
    ],
  },
  { key: "disabled", label: "Disabled", type: "boolean" },
  { key: "readOnly", label: "Read only", type: "boolean" },
];

const defaultState = {
  color: "primary",
  size: "medium",
  disabled: false,
  readOnly: true,
};

const Demo: Section["Demo"] = ({ state }) => (
  <Chips
    label="Design"
    color={state.color as "primary" | "positive" | "negative" | "warning"}
    size={state.size as "small" | "medium"}
    disabled={Boolean(state.disabled)}
    readOnly={Boolean(state.readOnly)}
  />
);

const section: Section = {
  id: "chip",
  title: "Chip",
  defaultState,
  controls,
  Demo,
};

export default section;
