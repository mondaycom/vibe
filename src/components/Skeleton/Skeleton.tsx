import { camelCase } from "lodash-es";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { FC } from "react";
import {
  SKELETON_SIZES,
  SkeletonSizeType,
  SkeletonType,
  SKELETON_CUSTOM_SIZE,
  TextSkeletonSize
} from "./SkeletonConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./Skeleton.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";

const SKELETON_CSS_BASE_CLASS = "monday-style-skeleton";

interface SkeletonProps extends VibeComponentProps {
  type?: SkeletonType;
  size?: SkeletonSizeType;
  width?: number;
  height?: number;
  wrapperClassName?: string;
  /**
   * Is the skeleton wrapper width equal to its container
   */
  fullWidth?: boolean;
}

const Skeleton: FC<SkeletonProps> & {
  types?: typeof SkeletonType;
  sizes?: typeof SKELETON_SIZES;
} = ({
  type = SkeletonType.RECTANGLE,
  size = SKELETON_SIZES.CUSTOM,
  className,
  wrapperClassName,
  width,
  height,
  fullWidth = false,
  id,
  "data-testid": dataTestId
}) => {
  const skeletonType = Object.values(SkeletonType).includes(type) ? type : SkeletonType.RECTANGLE;

  // Skeleton has sizes only for text type, other types support only custom size
  const skeletonSize = (Object.values(TextSkeletonSize) as string[]).includes(size) ? size : SKELETON_CUSTOM_SIZE;
  return (
    <div
      className={cx(styles.skeleton, SKELETON_CSS_BASE_CLASS, wrapperClassName, { [styles.fullWidth]: fullWidth })}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.SKELETON, id)}
    >
      <div
        className={cx(
          styles[skeletonType],
          `monday-style-skeleton_${skeletonType}`,
          getStyle(styles, camelCase(skeletonType + "-" + skeletonSize)),
          `monday-style-skeleton_${skeletonType}--${skeletonSize}`,
          className,
          {
            [styles.fullWidth]: fullWidth
          }
        )}
        style={{ width, height }}
      />
    </div>
  );
};

Object.assign(Skeleton, {
  types: SkeletonType,
  sizes: SKELETON_SIZES,
  skeleton: ComponentDefaultTestId.SKELETON
});

export default Skeleton;
