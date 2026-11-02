import { IconButton } from "@vibe/core";
import { Add } from "@vibe/icons";
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
  <IconButton
    icon={Add}
    aria-label="Trigger action"
    kind={state.kind as "primary" | "secondary" | "tertiary"}
    size={state.size as "small" | "medium" | "large"}
    disabled={Boolean(state.disabled)}
    onClick={() => {}}
  />
);

const section: Section = {
  id: "icon-button",
  title: "Icon Button",
  defaultState,
  controls,
  Demo,
};

export default section;
