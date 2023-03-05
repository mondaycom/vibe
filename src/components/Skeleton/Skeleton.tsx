import React, { FC } from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import {
  SKELETON_SIZES,
  SkeletonSizeType,
  SkeletonType,
  SKELETON_CUSTOM_SIZE,
  TextSkeletonSize
} from "./SkeletonConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./Skeleton.module.scss";
import "./Skeleton.scss";

const SKELETON_CSS_BASE_CLASS = "monday-style-skeleton";
const bemHelper = BEMClass(SKELETON_CSS_BASE_CLASS);

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
  fullWidth = false
}) => {
  const skeletonType = Object.values(SkeletonType).includes(type) ? type : SkeletonType.RECTANGLE;

  // Skeleton has sizes only for text type, other types support only custom size
  const skeletonSize = (Object.values(TextSkeletonSize) as string[]).includes(size) ? size : SKELETON_CUSTOM_SIZE;
  return (
    <div className={cx(SKELETON_CSS_BASE_CLASS, wrapperClassName, { [styles.fullWidth]: fullWidth })}>
      <div
        className={cx(
          bemHelper({ element: skeletonType }),
          bemHelper({ element: skeletonType, state: skeletonSize }),
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
  sizes: SKELETON_SIZES
});

export default Skeleton;
