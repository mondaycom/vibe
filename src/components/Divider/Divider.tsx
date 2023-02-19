import cx from "classnames";
import React from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { DirectionType } from "./DividerConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./Divider.module.scss";

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
        `monday-style-divider--${direction}`,
        {
          [styles.withoutMargin]: withoutMargin,
          [`monday-style-divider--without-margin`]: withoutMargin
        }
      )}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.DIVIDER, id)}
    />
  );
};

Divider.directions = DirectionType;

export default Divider;
