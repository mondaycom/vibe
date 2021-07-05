import isNil from "lodash/isNil";
import cx from "classnames";
import PropTypes from "prop-types";
import {
  SKELETON_TYPES,
  SKELETON_SIZES,
  SKELETON_ALLOWED_TYPES,
  SKELETON_ALLOWED_SIZES,
  SKELETON_COSTUME_SIZE
} from "./SkeletonConstants";
import "./Skeleton.scss";
import { BEMClass } from "../../helpers/bem-helper";

const SKELETON_CSS_BASE_CLASS = "monday-style-skeleton";
const HIDDEN_CHILD_CSS_ELEMENT = "hidden-child";
const bemHelper = BEMClass(SKELETON_CSS_BASE_CLASS);

export const Skeleton = ({ type, size, className, width, height, children }) => {
  const skeletonType = SKELETON_ALLOWED_TYPES.indexOf(type) > -1 ? type : SKELETON_TYPES.RECTANGLE;
  const typeDescription = skeletonType.toUpperCase();
  const skeletonSize = SKELETON_ALLOWED_SIZES[typeDescription].indexOf(size) > -1 ? size : SKELETON_COSTUME_SIZE;
  return (
    <div
      className={cx(SKELETON_CSS_BASE_CLASS, {
        [bemHelper({ state: "adjust-child" })]: !isNil(children)
      })}
    >
      <div
        className={cx(
          bemHelper({ element: skeletonType }),
          bemHelper({ element: skeletonType, state: skeletonSize }),
          className
        )}
        style={{ width, height }}
      >
        {children ? <div className={bemHelper({ element: HIDDEN_CHILD_CSS_ELEMENT })}>{children}</div> : null}
      </div>
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
  ).isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Skeleton.defaultProps = {
  className: "",
  width: undefined,
  height: undefined,
  children: null
};

Skeleton.types = SKELETON_TYPES;
Skeleton.sizes = SKELETON_SIZES;
