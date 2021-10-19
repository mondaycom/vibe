import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import List from "../List";
import "./list-story.scss";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import ListTitle from "../../ListTitle/ListTitle";
import ListItem from "../../ListItem/ListItem";
import { Battery, Board, DueDate, Robot, Team, ThumbsUp, Time, Upgrade, Widgets } from "../../Icon/Icons";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";
const onClick = e => action(e);
export const Sandbox = () => (
  <div style={{ width: 220, border: "1px solid var(--ui-border-color)", borderRadius: "4px" }}>
    <List>
      <ListTitle>Categories</ListTitle>
      <ListItem onClick={console.log}>
        <ListItemIcon icon={Board} />
        Board Power up
      </ListItem>
      <ListItem onClick={console.log}>
        <ListItemIcon icon={Team} />
        Team Power up
      </ListItem>
      <ListItem onClick={console.log}>
        <ListItemIcon icon={ThumbsUp} />
        Essentials
      </ListItem>
    </List>
  </div>
);

export const ListWithScroll = () => (
  <div>
    <List className="list-class-with-sizes">
      <ListTitle>Categories</ListTitle>
      <ListItem selected>
        <ListItemIcon icon={Board} />
        Board Power up
      </ListItem>
      <ListItem disabled>
        <ListItemIcon icon={Team} />
        Team Power up
      </ListItem>
      <ListItem>
        <ListItemIcon icon={ThumbsUp} />
        Essentials
      </ListItem>
      <ListItem>
        <ListItemIcon icon={Upgrade} />
        Super Useful
      </ListItem>
      <ListItem>
        <ListItemIcon icon={DueDate} />
        Deadline Combo
      </ListItem>
      <ListItem>
        <ListItemIcon icon={Widgets} />
        Widgets
      </ListItem>
      <ListItem>
        <ListItemIcon icon={Time} />
        Time
      </ListItem>
      <ListItem>
        <ListItemIcon icon={Battery} />
        Battery
      </ListItem>
      <ListItem>
        <ListItemIcon icon={Robot} />
        Automations
      </ListItem>
    </List>
  </div>
);

export default {
  title: "Components|List/List",
  component: List,
  decorators: [withPerformance]
};
