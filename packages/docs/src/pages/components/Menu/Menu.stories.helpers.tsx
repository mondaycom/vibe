import { StorybookLink, Tip } from "@ezds/storybook-blocks";
import { DialogContentContainer, Menu, MenuItem, Search } from "@ezds/core";
import { Calendar, Filter, Wand } from "@ezds/icons";
import React from "react";

export const TipCombobox = () => (
  <Tip>
    Need to place a search field to filter results? Use the{" "}
    <StorybookLink size={StorybookLink.sizes.SMALL} page="Components/Combobox">
      Combobox
    </StorybookLink>{" "}
    component instead
  </Tip>
);

export const ComponentRuleSimpleActions = () => (
  <DialogContentContainer>
    <Menu>
      <MenuItem title="Item 1" icon={Calendar} />
      <MenuItem title="Item 2" icon={Wand} />
      <MenuItem title="Item 3" icon={Filter} />
    </Menu>
  </DialogContentContainer>
);

export const ComponentRuleWithSearch = () => (
  <DialogContentContainer>
    <div style={{ marginBottom: "var(--sb-spacing-small)" }}>
      <Search size="small" />
    </div>
    <Menu>
      <MenuItem title="Item 1" icon={Calendar} />
      <MenuItem title="Item 2" icon={Wand} />
      <MenuItem title="Item 3" icon={Filter} />
    </Menu>
  </DialogContentContainer>
);

export const ComponentRuleDefaultWidth = () => (
  <DialogContentContainer>
    <Menu>
      <MenuItem title="Item 1" icon={Calendar} />
      <MenuItem title="Item 2" icon={Filter} />
    </Menu>
  </DialogContentContainer>
);

export const ComponentRuleLargeWidth = () => (
  <DialogContentContainer style={{ width: "348px" }}>
    <Menu>
      <MenuItem title="Item 1" icon={Calendar} />
      <MenuItem title="Item 2" icon={Filter} />
    </Menu>
  </DialogContentContainer>
);
