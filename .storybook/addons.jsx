import React from "react";
import "@storybook/addon-docs/register";
import "@storybook/addon-interactions/register";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";
import logo from "./logo.png";
import SidebarItem from "./SidebarItem";

window.STORYBOOK_GA_ID = "UA-308574295";
window.STORYBOOK_REACT_GA_OPTIONS = {};

const theme = create({
  base: "light",
  brandImage: logo,
  brandUrl: "https://style.monday.com",
  barSelectedColor: "#5034ff",
  brandTitle: "Vibe Design",
  background: {
    hoverable: "rgba(80, 52, 255, 0.1)"
  },
  hoverable: "rgba(80, 52, 255, 0.1)"
});

addons.setConfig({
  theme,
  sidebar: {
    renderLabel: ({ name, parameters = {} }) => {
      const statusRegex = /\[([^)]+)\]/gi;
      const [statusMatch, statusType] = statusRegex.exec(name) || [];

      if (statusMatch) {
        return <SidebarItem status={statusType}>{name.replace(statusMatch, "").trim()}</SidebarItem>;
      }

      const { status: storyStatus } = parameters;
      if (!storyStatus) {
        return name;
      }

      return <SidebarItem status={parameters.status}>{storyStatus}</SidebarItem>;
    }
  }
});
