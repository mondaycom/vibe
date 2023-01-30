import React, { FC } from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import {
  SKELETON_ALLOWED_SIZES,
  SKELETON_ALLOWED_TYPES,
  SKELETON_CUSTOM_SIZE,
  SKELETON_SIZES,
  SKELETON_TYPES
} from "./SkeletonConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import "./Skeleton.scss";

const SKELETON_CSS_BASE_CLASS = "monday-style-skeleton";
const bemHelper = BEMClass(SKELETON_CSS_BASE_CLASS);

interface SkeletonProps extends VibeComponentProps {
  type?: keyof typeof SKELETON_TYPES;
  size?: keyof typeof SKELETON_ALLOWED_SIZES;
  width?: number;
  height?: number;
  wrapperClassName?: string;
  /**
   * Is wrapper width = 100%
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
  fullWidth
}) => {
  const skeletonType = SKELETON_ALLOWED_TYPES.indexOf(type) > -1 ? type : SKELETON_TYPES.RECTANGLE;
  const typeDescription = skeletonType.toUpperCase() as keyof typeof SKELETON_ALLOWED_SIZES;
  const skeletonSize = SKELETON_ALLOWED_SIZES[typeDescription].indexOf(size) > -1 ? size : SKELETON_CUSTOM_SIZE;
  return (
    <div className={cx(SKELETON_CSS_BASE_CLASS, wrapperClassName, { "full-width": fullWidth })}>
      <div
        className={cx(
          bemHelper({ element: skeletonType }),
          bemHelper({ element: skeletonType, state: skeletonSize }),
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
