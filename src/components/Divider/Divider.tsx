import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { DirectionType } from "./DividerConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Divider.module.scss";

interface DividerProps extends VibeComponentProps {
  direction?: DirectionType;
  classname?: string;
  withoutMargin?: boolean;
}

const Divider: React.FC<DividerProps> & {
  directions?: typeof DirectionType;
} = ({
  // Backward compatibility for props naming
  classname,
  className = undefined,
  withoutMargin = false,
  direction = DirectionType.HORIZONTAL,
  id,
  "data-testid": dataTestId
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  return (
    <div
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.DIVIDER, id)}
      className={cx(styles.divider, overrideClassName, getStyle(styles, direction), {
        [styles.withoutMargin]: withoutMargin
      })}
    />
  );
};

Object.assign(Divider, {
  directions: DirectionType,
  defaultTestId: ComponentDefaultTestId.DIVIDER
});

export default Divider;
