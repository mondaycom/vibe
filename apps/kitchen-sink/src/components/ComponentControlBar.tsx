import { Flex, Text, Toggle } from "@vibe/core";
import { Dropdown } from "@vibe/core/next";
import type { Section } from "../types";

// The control bar is pinned to the bottom, so menus must open upward. At runtime Vite aliases
// @vibe/core to the local v3 build, whose Dropdown honors menuPlacement; the v4 types resolved
// from node_modules don't declare it, hence the untyped spread.
const MENU_ABOVE = { menuPlacement: "top" } as Record<string, unknown>;

type Props = {
  section: Section;
  state: Record<string, unknown>;
  onChange: (patch: Record<string, unknown>) => void;
  status?: "enter" | "exit";
};

export function ComponentControlBar({ section, state, onChange, status }: Props) {
  const statusClass = status ? ` control-bar--${status}` : "";

  return (
    <div className={`control-bar${statusClass}`}>
      <span className="control-bar-label">{section.title} controls</span>
      <Flex gap="medium" wrap>
        {section.controls.map((control) => {
          if (control.type === "boolean") {
            return (
              <Flex key={control.key} gap="small" align="center">
                <Text>{control.label}</Text>
                <Toggle
                  isSelected={Boolean(state[control.key])}
                  onChange={(val) => onChange({ [control.key]: val })}
                />
              </Flex>
            );
          }

          const options = control.options.map((o) => ({ value: o.value, label: o.label }));
          const selected = options.find((o) => o.value === String(state[control.key])) ?? options[0];

          return (
            <Flex key={control.key} gap="small" align="center">
              <Text>{control.label}</Text>
              <div style={{ width: 160 }}>
                <Dropdown
                  options={options}
                  value={selected}
                  onChange={(opt) => onChange({ [control.key]: opt?.value })}
                  clearable={false}
                  {...MENU_ABOVE}
                />
              </div>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
}
