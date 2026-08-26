import { TextField } from "@vibe/core";
import type { Section } from "../section";

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
  {
    key: "validation",
    label: "Validation",
    type: "select",
    options: [
      { value: "none", label: "None" },
      { value: "success", label: "Success" },
      { value: "error", label: "Error" },
    ],
  },
  { key: "disabled", label: "Disabled", type: "boolean" },
  { key: "withTitle", label: "Show title", type: "boolean" },
];

const defaultState = {
  size: "medium",
  disabled: false,
  validation: "none",
  withTitle: false,
};

const Demo: Section["Demo"] = ({ state }) => {
  const validation =
    state.validation === "success"
      ? { status: "success" as const, text: "Looks good" }
      : state.validation === "error"
        ? { status: "error" as const, text: "This field needs attention" }
        : undefined;

  return (
    <TextField
      title={state.withTitle ? "Project name" : undefined}
      placeholder="Enter a project name"
      size={state.size as "small" | "medium" | "large"}
      disabled={Boolean(state.disabled)}
      validation={validation}
    />
  );
};

const section: Section = {
  id: "text-field",
  title: "Text Field",
  defaultState,
  controls,
  Demo,
};

export default section;
