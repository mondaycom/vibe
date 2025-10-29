import React from "react";
import { DialogContentContainer, Menu, MenuItem } from "@vibe/core";

export const ComponentRuleWithLabelDo = () => (
  <DialogContentContainer>
    <Menu>
      <MenuItem title="Menu item 1" label="New" />
      <MenuItem title="Menu item 2" />
      <MenuItem title="Menu item 3" />
    </Menu>
  </DialogContentContainer>
);

export const ComponentRuleWithLabelDont = () => (
  <DialogContentContainer>
    <Menu>
      <MenuItem title="Menu Item 1" label="Long menu item label" />
      <MenuItem title="Menu Item 2" />
      <MenuItem title="Menu Item 3" />
    </Menu>
  </DialogContentContainer>
);
