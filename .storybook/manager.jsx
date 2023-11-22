import { addons } from "@storybook/manager-api";
// import React from "react";
// import { SidebarItem } from "vibe-storybook-components";
// import "vibe-storybook-components/index.css";
import theme from "./theme";

window.STORYBOOK_GA_ID = "UA-308574295";
window.STORYBOOK_REACT_GA_OPTIONS = {};

addons.setConfig({
  theme: theme
  // TODO sidebar tags not working (at least without additional efforts) in storybook 7
  // sidebar: {
  //   renderLabel: ({ name, parameters = {} }) => {
  //     const statusRegex = /\[([^)]+)]/gi;
  //     const [statusMatch, statusType] = statusRegex.exec(name) || [];
  //
  //     if (statusMatch) {
  //       return <SidebarItem status={statusType}>{name.replace(statusMatch, "").trim()}</SidebarItem>;
  //     }
  //
  //     const { status: storyStatus } = parameters;
  //     if (!storyStatus) {
  //       return name;
  //     }
  //
  //     return <SidebarItem status={parameters.status}>{name.replace(storyStatus, "").trim()}</SidebarItem>;
  //   }
  // }
});
