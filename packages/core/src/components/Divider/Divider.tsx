import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import { DirectionType as DirectionTypeEnum } from "./DividerConstants";
import { DividerDirection } from "./Divider.types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { withStaticProps, VibeComponentProps } from "../../types";
import styles from "./Divider.module.scss";

export interface DividerProps extends VibeComponentProps {
  direction?: DividerDirection;
  withoutMargin?: boolean;
}

const Divider: React.FC<DividerProps> & {
  directions?: typeof DirectionTypeEnum;
} = ({
  className = undefined,
  withoutMargin = false,
  direction = "horizontal",
  id,
  "data-testid": dataTestId
}: DividerProps) => {
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
  directions: DirectionTypeEnum
});
