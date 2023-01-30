import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
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
        [`monday-style-divider--with-margin`]: !withoutMargin
      })}
    />
  );
};

Divider.directions = DirectionType;

Divider.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf([Divider.directions.HORIZONTAL, Divider.directions.VERTICAL])
};

export default Divider;
