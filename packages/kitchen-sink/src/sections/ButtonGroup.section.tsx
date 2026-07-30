import { ButtonGroup } from "@vibe/core";
import type { Section } from "../section";

const controls: Section["controls"] = [
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

const defaultState = {
  kind: "primary",
  size: "medium",
  disabled: false,
};

const Demo: Section["Demo"] = ({ state }) => (
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

const section: Section = {
  id: "button-group",
  title: "Button Group",
  defaultState,
  controls,
  Demo,
};

export default section;
