import isNil from "lodash/isNil";
import classNames from "classnames";
import PropTypes from "prop-types";
import { SKELETON_ALLOWED_TYPES, SKELETON_RECTANGLE_TYPE, SKELETON_CSS_BASE_CLASS } from "./SkeletonConstants";

export const Skeleton = ({ type, className, width, height, children }) => {
  const skeletonType = SKELETON_ALLOWED_TYPES.indexOf(type) > -1 ? type : SKELETON_RECTANGLE_TYPE;
  const allClassNames = classNames(
    `${SKELETON_CSS_BASE_CLASS}`,
    `${SKELETON_CSS_BASE_CLASS}--${skeletonType}`,
    className
  );
  const fixedStyle = !isNil(width) && !isNil(height) ? { width, height } : undefined;
  return (
    <div className={allClassNames} style={fixedStyle}>
      {children}
    </div>
  );
};

Skeleton.propTypes = {
  type: PropTypes.oneOf(SKELETON_ALLOWED_TYPES).isRequired,
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
