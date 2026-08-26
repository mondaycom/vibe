import { Label } from "@vibe/core";
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
      { value: "dark", label: "Dark" },
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
];

const defaultState = {
  color: "primary",
  size: "medium",
};

const Demo: Section["Demo"] = ({ state }) => (
  <Label
    text="New"
    color={state.color as "primary" | "positive" | "negative" | "dark"}
    size={state.size as "small" | "medium"}
  />
);

const section: Section = {
  id: "label",
  title: "Label",
  defaultState,
  controls,
  Demo,
};

export default section;
