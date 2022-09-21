import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { DIRECTIONS } from "./DividerConstants";
import styles from "./Divider.module.scss";

const Divider = ({
  // Backward compatibility for props naming
  classname,
  className,
  direction,
  id,
  "data-testid": dataTestId
}) => {
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

Divider.directions = DIRECTIONS;

Divider.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf([Divider.directions.HORIZONTAL, Divider.directions.VERTICAL])
};

Divider.defaultProps = {
  className: undefined,
  direction: DIRECTIONS.HORIZONTAL
};

export default Divider;
