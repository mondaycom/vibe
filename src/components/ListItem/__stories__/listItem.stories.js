import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import ListItem from "../ListItem";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { SIZES } from "../../../constants/sizes";
import { Send } from "../../Icon/Icons";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";

export const Sandbox = () => {
  const content = text("Item Text Content", "Board Power-Up");
  const selected = boolean("Selected", false);
  const disabled = boolean("Disabled", false);
  const onClick = (event, id) => action(event, id);
  const size = select("List Item Size", SIZES, SIZES.SMALL);
  return (
    <div role="list">
      <ListItem id="Knobs" selected={selected} disabled={disabled} onClick={onClick} size={size}>
        {content}
      </ListItem>
    </div>
  );
};

export const ListItemWithIcon = () => {
  return (
    <div role="list">
      <ListItem id="Knobs" size={ListItem.sizes.SMALL}>
        <ListItemIcon icon={Send} />
        Productivity
      </ListItem>
    </div>
  );
};

export default {
  title: "Components|List/ListItem",
  component: ListItem,
  decorators: [withPerformance]
};
