import { StorybookLink, Tip } from "vibe-storybook-components";
import { DialogContentContainer, Menu, MenuItem, Search } from "../../../index";
import { Calendar, Filter, Wand } from "../../../Icon/Icons";
import styles from "./Menu.stories.module.scss";
import React from "react";

export const TipCombobox = () => (
  <Tip>
    Need to place a search field to filter results? Use the{" "}
    <StorybookLink size={StorybookLink.sizes.SMALL} page="Inputs/Combobox">
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
    <Search size={Search.sizes.SMALL} wrapperClassName={styles["component-rule-search"]} />
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
  <DialogContentContainer className={styles["component-rule-large-dialog"]}>
    <Menu className={styles["component-rule-large-menu"]}>
      <MenuItem title="Item 1" icon={Calendar} />
      <MenuItem title="Item 2" icon={Filter} />
    </Menu>
  </DialogContentContainer>
);
