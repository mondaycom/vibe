import React from "react";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { DirectionType } from "./DividerConstants";
import "./Divider.scss";
import VibeComponentProps from "src/types/VibeComponentProps";

interface DividerProps extends VibeComponentProps {
  direction?: DirectionType;
  classname?: string;
}

const Divider = ({
  // Backward compatibility for props naming
  classname,
  className = undefined,
  direction = DirectionType.HORIZONTAL
} : DividerProps) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  return <div className={cx("monday-style-divider", overrideClassName, `monday-style-divider--${direction}`)} />;
};

Divider.directions = DirectionType

export default Divider;
