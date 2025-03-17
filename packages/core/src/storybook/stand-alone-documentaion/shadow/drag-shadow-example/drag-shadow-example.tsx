import React from "react";
import { Frame } from "vibe-storybook-components";
import { Drag } from "@vibe/icons";
import Icon from "../../../../components/Icon/Icon";
import classes from "./drag-shadow-example.module.scss";

const CSS_BASE_CLASS = "drag-shadow-example";

export const DragShadowExample = () => (
  <Frame className={classes[`${CSS_BASE_CLASS}-frame`]}>
    <Icon className={classes[`${CSS_BASE_CLASS}-icon`]} icon={Drag} />
    <div className={classes[`${CSS_BASE_CLASS}-draggable`]}>Drag me</div>
  </Frame>
);
