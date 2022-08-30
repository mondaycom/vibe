import { camelCase } from "lodash";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import PropTypes from "prop-types";
import {
  SKELETON_ALLOWED_SIZES,
  SKELETON_ALLOWED_TYPES,
  SKELETON_CUSTOM_SIZE,
  SKELETON_SIZES,
  SKELETON_TYPES
} from "./SkeletonConstants";
import styles from "./Skeleton.module.scss";

const SKELETON_CSS_BASE_CLASS = "monday-style-skeleton";

const Skeleton = ({ type, size, className, width, height, id, "data-testid": dataTestId }) => {
  const skeletonType = SKELETON_ALLOWED_TYPES.indexOf(type) > -1 ? type : SKELETON_TYPES.RECTANGLE;
  const typeDescription = skeletonType.toUpperCase();
  const skeletonSize = SKELETON_ALLOWED_SIZES[typeDescription].indexOf(size) > -1 ? size : SKELETON_CUSTOM_SIZE;
  return (
    <div className={cx(SKELETON_CSS_BASE_CLASS)} data-testid={dataTestId || getTestId(ELEMENT_TYPES.SKELETON, id)}>
      <div
        className={cx(
          styles[skeletonType],
          `monday-style-skeleton_${skeletonType}`,
          styles[`${camelCase(skeletonType + "--" + skeletonSize)}`],
          `monday-style-skeleton_${skeletonType}--${skeletonSize}`,
          className
        )}
        style={{ width, height }}
      />
    </div>
  );
};

Skeleton.propTypes = {
  type: PropTypes.oneOf([SKELETON_TYPES.TEXT, SKELETON_TYPES.CIRCLE, SKELETON_TYPES.RECTANGLE]),
  size: PropTypes.oneOf(
    Object.values([
      ...SKELETON_ALLOWED_SIZES.RECTANGLE,
      ...SKELETON_ALLOWED_SIZES.CIRCLE,
      ...SKELETON_ALLOWED_SIZES.TEXT
    ])
  ),
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

Skeleton.defaultProps = {
  type: SKELETON_TYPES.RECTANGLE,
  size: SKELETON_SIZES.CUSTOM,
  className: "",
  width: undefined,
  height: undefined
};

Skeleton.types = SKELETON_TYPES;
Skeleton.sizes = SKELETON_SIZES;

export default Skeleton;
