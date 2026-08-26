import { DialogContentContainer, Menu, MenuDivider, MenuItem, MenuTitle } from "@vibe/core";
import { Delete, Email, Info } from "@vibe/icons";
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
  { key: "withIcons", label: "With icons", type: "boolean" },
];

const defaultState = {
  size: "medium",
  withIcons: false,
};

const Demo: Section["Demo"] = ({ state }) => {
  const size = state.size as "small" | "medium" | "large";
  const withIcons = Boolean(state.withIcons);

  return (
    <DialogContentContainer>
      <Menu size={size}>
        <MenuTitle caption="Actions" />
        <MenuDivider />
        <MenuItem icon={withIcons ? Email : undefined} title="Send" />
        <MenuItem icon={withIcons ? Delete : undefined} title="Delete" disabled />
        <MenuItem icon={withIcons ? Info : undefined} title="More info" />
      </Menu>
    </DialogContentContainer>
  );
};

const section: Section = {
  id: "menu",
  title: "Menu",
  defaultState,
  controls,
  Demo,
};

export default section;
