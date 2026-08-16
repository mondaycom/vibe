import { Button } from "@vibe/core";
import { Bolt } from "@vibe/icons";
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
      { value: "xs", label: "XS" },
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
  {
    key: "leftIcon",
    label: "Left icon",
    type: "select",
    options: [
      { value: "none", label: "None" },
      { value: "left", label: "Left" },
    ],
  },
  {
    key: "rightIcon",
    label: "Right icon",
    type: "select",
    options: [
      { value: "none", label: "None" },
      { value: "right", label: "Right" },
    ],
  },
  { key: "disabled", label: "Disabled", type: "boolean" },
  { key: "loading", label: "Loading", type: "boolean" },
];

const defaultState = {
  kind: "primary",
  size: "medium",
  leftIcon: "none",
  rightIcon: "none",
  disabled: false,
  loading: false,
};

const Demo: Section["Demo"] = ({ state }) => (
  <Button
    kind={state.kind as "primary" | "secondary" | "tertiary"}
    size={state.size as "xs" | "small" | "medium" | "large"}
    leftIcon={state.leftIcon === "left" ? Bolt : undefined}
    rightIcon={state.rightIcon === "right" ? Bolt : undefined}
    disabled={Boolean(state.disabled)}
    loading={Boolean(state.loading)}
    onClick={() => {}}
  >
    Click me
  </Button>
);

const section: Section = {
  id: "button",
  title: "Button",
  defaultState,
  controls,
  Demo,
};

export default section;
