import { camelCase } from "lodash-es";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { FC } from "react";
import {
  SKELETON_SIZES,
  SkeletonType as SkeletonTypeEnum,
  SKELETON_CUSTOM_SIZE,
  TextSkeletonSize as TextSkeletonSizeEnum
} from "./SkeletonConstants";

import { SkeletonType, SkeletonSizeType } from "./Skelton.types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { withStaticProps, VibeComponentProps } from "../../types";
import styles from "./Skeleton.module.scss";

export interface SkeletonProps extends VibeComponentProps {
  /**
   * The type of skeleton.
   */
  type?: SkeletonType;
  /**
   * The predefined size of the skeleton.
   */
  size?: SkeletonSizeType;
  /**
   * The width of the skeleton in pixels.
   */
  width?: number;
  /**
   * The height of the skeleton in pixels.
   */
  height?: number;
  /**
   * Class name applied to the wrapper element.
   */
  wrapperClassName?: string;
  /**
   * If true, the skeleton will take up the full width of its container.
   */
  fullWidth?: boolean;
}

const Skeleton: FC<SkeletonProps> & {
  types?: typeof SkeletonTypeEnum;
  sizes?: typeof SKELETON_SIZES;
} = ({
  type = "rectangle",
  size = "custom",
  className,
  wrapperClassName,
  width,
  height,
  fullWidth = false,
  id,
  "data-testid": dataTestId
}) => {
  const skeletonType = (Object.values(SkeletonTypeEnum) as string[]).includes(type) ? type : "rectangle";

  // Skeleton has sizes only for text type, other types support only custom size
  const skeletonSize = (Object.values(TextSkeletonSizeEnum) as string[]).includes(size) ? size : SKELETON_CUSTOM_SIZE;

  return (
    <div
      id={id}
      className={cx(styles.skeleton, wrapperClassName, { [styles.fullWidth]: fullWidth })}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.SKELETON, id)}
    >
      <div
        className={cx(styles[skeletonType], getStyle(styles, camelCase(skeletonType + "-" + skeletonSize)), className, {
          [styles.fullWidth]: fullWidth
        })}
        style={{ width, height }}
      />
    </div>
  );
};

export default withStaticProps(Skeleton, {
  types: SkeletonTypeEnum,
  sizes: SKELETON_SIZES
});
