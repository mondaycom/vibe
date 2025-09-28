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
        return <SidebarItem status={statusType.toLowerCase()}>{name.replace(statusMatch, "").trim()}</SidebarItem>;
      }

      const { status: storyStatus } = parameters;
      if (!storyStatus) {
        return name;
      }

      return <SidebarItem status={parameters.status}>{name.replace(storyStatus, "").trim()}</SidebarItem>;
    },
    filters: {
      patterns: shouldShowStory
    },
    showRoots: false
  }
});

/**
 * In order to hide stories you need to add `tags: ['internal']` to the stories file metadata.
 * In order to hide MDX, you need to add `Internal` to the title in the MDX's `Meta` declaration `title` or to the `title` in the stories file metadata.
 *
 * Notice that all stories are available in development mode and in Chromatic.
 */
function shouldShowStory(item) {
  const isDev = isChromatic() || process.env.NODE_ENV === "development";
  const isPublic =
    !item.tags?.includes?.("internal") &&
    !item.title?.startsWith?.("Internal") &&
    !item.title?.startsWith?.("Storybook Blocks");
  return isDev || isPublic;
}
