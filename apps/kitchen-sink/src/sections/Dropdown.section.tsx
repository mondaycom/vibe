import { Dropdown } from "@vibe/core/next";
import type { Section } from "../section";

const options = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

const controls: Section["controls"] = [
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
  { key: "multi", label: "Multi select", type: "boolean" },
];

const defaultState = {
  size: "medium",
  disabled: false,
  multi: false,
};

const Demo: Section["Demo"] = ({ state }) => (
  <div style={{ width: 280 }}>
    {state.multi ? (
      <Dropdown
        options={options}
        placeholder="Select priorities"
        size={state.size as "small" | "medium" | "large"}
        disabled={Boolean(state.disabled)}
        multi
      />
    ) : (
      <Dropdown
        options={options}
        placeholder="Select priority"
        size={state.size as "small" | "medium" | "large"}
        disabled={Boolean(state.disabled)}
      />
    )}
  </div>
);

const section: Section = {
  id: "dropdown",
  title: "Dropdown",
  defaultState,
  controls,
  Demo,
};

export default section;
