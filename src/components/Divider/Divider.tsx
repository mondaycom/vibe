import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { DirectionType } from "./DividerConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./Divider.module.scss";

interface DividerProps extends VibeComponentProps {
  direction?: DirectionType;
  classname?: string;
}

const Divider = ({
  // Backward compatibility for props naming
  classname,
  className = undefined,
  direction = DirectionType.HORIZONTAL,
  id,
  "data-testid": dataTestId
}: DividerProps) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  return (
    <div
      className={cx(
        styles.divider,
        "monday-style-divider",
        overrideClassName,
        styles[direction],
        `monday-style-divider--${direction}`
      )}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.DIVIDER, id)}
    />
  );
};

Divider.directions = DirectionType;

Divider.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf([Divider.directions.HORIZONTAL, Divider.directions.VERTICAL])
};

export default Divider;
