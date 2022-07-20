import cx from "classnames";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import {
  SKELETON_TYPES,
  SKELETON_SIZES,
  SKELETON_ALLOWED_TYPES,
  SKELETON_ALLOWED_SIZES,
  SKELETON_CUSTOM_SIZE
} from "./SkeletonConstants";
import "./Skeleton.scss";

const SKELETON_CSS_BASE_CLASS = "monday-style-skeleton";
const bemHelper = BEMClass(SKELETON_CSS_BASE_CLASS);

const Skeleton = ({ type, size, className, width, height }) => {
  const skeletonType = SKELETON_ALLOWED_TYPES.indexOf(type) > -1 ? type : SKELETON_TYPES.RECTANGLE;
  const typeDescription = skeletonType.toUpperCase();
  const skeletonSize = SKELETON_ALLOWED_SIZES[typeDescription].indexOf(size) > -1 ? size : SKELETON_CUSTOM_SIZE;
  return (
    <div className={SKELETON_CSS_BASE_CLASS}>
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
