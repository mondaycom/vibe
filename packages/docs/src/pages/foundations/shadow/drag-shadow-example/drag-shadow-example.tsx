import React from "react";
import { Frame } from "@ezds/storybook-blocks";
import { Drag } from "@ezds/icons";
import { Icon } from "@ezds/icon";
import classes from "./drag-shadow-example.module.scss";

const CSS_BASE_CLASS = "drag-shadow-example";

export const DragShadowExample = () => (
  <Frame className={classes[`${CSS_BASE_CLASS}-frame`]}>
    <Icon className={classes[`${CSS_BASE_CLASS}-icon`]} icon={Drag} />
    <div className={classes[`${CSS_BASE_CLASS}-draggable`]}>Drag me</div>
  </Frame>
);
