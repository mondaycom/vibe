import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import { DirectionType as DirectionTypeEnum } from "./DividerConstants";
import { type DividerDirection } from "./Divider.types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { withStaticPropsWithoutForwardRef } from "../../types";
import { type VibeComponentProps } from "@vibe/shared";
import styles from "./Divider.module.scss";
import { ComponentVibeId } from "../../tests/constants";

export interface DividerProps extends VibeComponentProps {
  /**
   * The direction of the divider.
   */
  direction?: DividerDirection;
  /**
   * If true, removes margin from the divider.
   */
  withoutMargin?: boolean;
}

const Divider = ({
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
      data-vibe={ComponentVibeId.DIVIDER}
      className={cx(styles.divider, className, getStyle(styles, direction), {
        [styles.withoutMargin]: withoutMargin
      })}
    />
  );
};

interface DividerStaticProps {
  directions: typeof DirectionTypeEnum;
}

export default withStaticPropsWithoutForwardRef<DividerProps, DividerStaticProps>(Divider, {
  directions: DirectionTypeEnum
});
