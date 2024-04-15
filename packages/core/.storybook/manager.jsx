import React from "react";
import { addons } from "@storybook/manager-api";
import { SidebarItem } from "vibe-storybook-components";
import "vibe-storybook-components/index.css";
import theme from "./theme";
import isChromatic from "chromatic/isChromatic";

window.STORYBOOK_GA_ID = "UA-308574295";
window.STORYBOOK_REACT_GA_OPTIONS = {};

addons.setConfig({
  theme: theme,
  sidebar: {
    renderLabel: ({ name, parameters = {} }) => {
      const statusRegex = /\[([^)]+)]/gi;
      const [statusMatch, statusType] = statusRegex.exec(name) || [];

      if (statusMatch) {
        return <SidebarItem status={statusType}>{name.replace(statusMatch, "").trim()}</SidebarItem>;
      }

      const { status: storyStatus } = parameters;
      if (!storyStatus) {
        return name;
      }

      return <SidebarItem status={parameters.status}>{name.replace(storyStatus, "").trim()}</SidebarItem>;
    },
    filters: {
      patterns: filterStory
    }
  }
});

function filterStory(item) {
  const isDev = isChromatic() || process.env.NODE_ENV === "development";
  const isInternal = !item.tags?.includes?.("internal") && !item.title?.startsWith?.("Internal");
  return isDev || isInternal;
}
