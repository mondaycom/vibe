import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import { DirectionType } from "./DividerConstants";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { withStaticProps, VibeComponentProps } from "../../types";
import styles from "./Divider.module.scss";

export interface DividerProps extends VibeComponentProps {
  direction?: DirectionType;
  withoutMargin?: boolean;
}

const Divider: React.FC<DividerProps> & {
  directions?: typeof DirectionType;
} = ({
  className = undefined,
  withoutMargin = false,
  direction = DirectionType.HORIZONTAL,
  id,
  "data-testid": dataTestId
}) => {
  return (
    <div
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.DIVIDER, id)}
      className={cx(styles.divider, className, getStyle(styles, direction), {
        [styles.withoutMargin]: withoutMargin
      })}
    />
  );
};

export default withStaticProps(Divider, {
  directions: DirectionType
});
