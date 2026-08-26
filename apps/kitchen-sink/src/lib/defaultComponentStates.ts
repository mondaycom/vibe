import type { ComponentStateMap } from "../types";

export const defaultComponentStates: ComponentStateMap = {
  "icon-button": { kind: "primary", size: "medium", disabled: false },
  button: {
    kind: "primary",
    size: "medium",
    leftIcon: "none",
    rightIcon: "none",
    disabled: false,
    loading: false,
  },
  "button-group": {
    kind: "primary",
    size: "medium",
    disabled: false,
    withIcons: false,
    fullWidth: false,
    disabledSegment: false,
  },
  "segmented-control": {
    size: "medium",
    withIcons: false,
    fullWidth: false,
    disabled: false,
    disabledSegment: false,
  },
  tabs: { size: "medium", activeTab: 0 },
  label: { color: "primary", size: "medium" },
  chip: { color: "primary", size: "medium", disabled: false, readOnly: true },
  "text-field": {
    size: "medium",
    disabled: false,
    validation: "none",
    withTitle: false,
  },
  dropdown: { size: "medium", disabled: false, multi: false },
  menu: { size: "medium", withIcons: false },
  toast: { type: "positive", withAction: false },
  "stroke-spotlight": { palette: "default", borderWidth: "1.5" },
};

export function mergeWithDefaults(
  stored: ComponentStateMap | undefined
): ComponentStateMap {
  const result: ComponentStateMap = {};
  for (const [id, defaults] of Object.entries(defaultComponentStates)) {
    result[id] = { ...defaults, ...(stored?.[id] ?? {}) };
  }
  return result;
}
