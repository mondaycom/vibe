import cx from "classnames";
import PropTypes from "prop-types";
import {
  AVATAR_ICON_TYPE,
  AVATAR_IMAGE_TYPE,
  AVATAR_LARGE_SIZE,
  AVATAR_MEDIUM_SIZE,
  AVATAR_SMALL_SIZE,
  AVATAR_TEXT_TYPE
} from "./AvatarConstants";

export const AVATAR_CSS_BASE_CLASS = "monday-style-avatar";
export const Avatar = ({ className, alt, size, type, isSupportEmptyState }) => {
  return <div className={cx(AVATAR_CSS_BASE_CLASS)} />;
};
Avatar.PropTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf([AVATAR_LARGE_SIZE, AVATAR_MEDIUM_SIZE, AVATAR_SMALL_SIZE]),
  type: PropTypes.oneOf([AVATAR_ICON_TYPE, AVATAR_IMAGE_TYPE, AVATAR_TEXT_TYPE]),
  isSupportEmptyState: PropTypes.bool
};
Avatar.defaultProps = {
  className: "",
  alt: "",
  size: AVATAR_MEDIUM_SIZE,
  type: AVATAR_IMAGE_TYPE,
  isSupportEmptyState: true
};
