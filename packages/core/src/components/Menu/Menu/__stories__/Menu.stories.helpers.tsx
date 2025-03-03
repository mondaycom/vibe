import { StorybookLink, Tip } from "vibe-storybook-components";
import DialogContentContainer from "../../../DialogContentContainer/DialogContentContainer";
import Menu from "../../../Menu/Menu/Menu";
import MenuItem from "../../../Menu/MenuItem/MenuItem";
import Search from "../../../Search/Search";
import { Calendar, Filter, Wand } from "@vibe/icons";
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
