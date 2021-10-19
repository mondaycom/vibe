import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import ListItemIcon from "../ListItemIcon";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider,
  selectIcon
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

export const Sandbox = () => {
  const icon = selectIcon("Icon", "Send");
  return (
    <div
      style={{
        padding: "var(--spacing-small)",
        width: 100,
        height: 40,
        display: "flex",
        alignItems: "center",
        borderRadius: "4px",
        border: "1px solid var(--ui-border-color)"
      }}
    >
      <ListItemIcon
        icon={icon}
        id="Knobs"
        margin={select("Margin Position", ListItemIcon.margin, ListItemIcon.margin.START)}
      />
    </div>
  );
};

export default {
  title: "Components|List/ListItemIcon",
  component: ListItemIcon,
  decorators: [withPerformance]
};
