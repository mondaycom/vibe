import React from "react";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { DirectionType } from "./DividerConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import "./Divider.scss";

interface DividerProps extends VibeComponentProps {
  direction?: DirectionType;
  classname?: string;
  withoutMargin?: boolean;
}

const Divider = ({
  // Backward compatibility for props naming
  classname,
  className = undefined,
  withoutMargin = false,
  direction = DirectionType.HORIZONTAL
}: DividerProps) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  return (
    <div
      className={cx("monday-style-divider", overrideClassName, `monday-style-divider--${direction}`, {
        [`monday-style-divider--without-margin`]: withoutMargin
      })}
    />
  );
};

Divider.directions = DirectionType;

export default Divider;
