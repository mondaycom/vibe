import { camelCase } from "lodash-es";
import React, { FC } from "react";
import cx from "classnames";
import {
  SKELETON_ALLOWED_SIZES,
  SKELETON_ALLOWED_TYPES,
  SKELETON_CUSTOM_SIZE,
  SKELETON_SIZES,
  SKELETON_TYPES
} from "./SkeletonConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import styles from "./Skeleton.module.scss";

const SKELETON_CSS_BASE_CLASS = "monday-style-skeleton";

interface SkeletonProps extends VibeComponentProps {
  type?: keyof typeof SKELETON_TYPES;
  size?: keyof typeof SKELETON_ALLOWED_SIZES;
  width?: number;
  height?: number;
  wrapperClassName?: string;
  /**
   * Is the skeleton wrapper width equal to its container
   */
  fullWidth?: boolean;
}

const Skeleton: FC<SkeletonProps> & {
  types?: typeof SKELETON_TYPES;
  sizes?: typeof SKELETON_SIZES;
} = ({
  type = SKELETON_TYPES.RECTANGLE,
  size = SKELETON_SIZES.CUSTOM,
  className,
  wrapperClassName,
  width,
  height,
  fullWidth = false,
  id,
  "data-testid": dataTestId
}) => {
  const skeletonType = SKELETON_ALLOWED_TYPES.indexOf(type) > -1 ? type : SKELETON_TYPES.RECTANGLE;
  const typeDescription = skeletonType.toUpperCase() as keyof typeof SKELETON_ALLOWED_SIZES;
  const skeletonSize = SKELETON_ALLOWED_SIZES[typeDescription].indexOf(size) > -1 ? size : SKELETON_CUSTOM_SIZE;
  return (
    <div
      className={cx(SKELETON_CSS_BASE_CLASS, styles.skeleton, wrapperClassName, { [styles.fullWidth]: fullWidth })}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.SKELETON, id)}
    >
      <div
        className={cx(
          getStyle(styles, skeletonType),
          `monday-style-skeleton_${skeletonType}`,
          getStyle(styles, camelCase(skeletonType + "--" + skeletonSize)),
          `monday-style-skeleton_${skeletonType}--${skeletonSize}`,
          className
        )}
        style={{ width, height }}
      />
    </div>
  );
};

Object.assign(Skeleton, {
  types: SKELETON_TYPES,
  sizes: SKELETON_SIZES
});

export default Skeleton;
