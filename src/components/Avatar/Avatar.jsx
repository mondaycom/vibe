import PropTypes from "prop-types";
import cx from "classnames";
import { useMemo } from "react";
import { BEMClass } from "../../helpers/bem-helper";
import { AVATAR_SIZES } from "./AvatarConstants";
import "./Avatar.scss";
import { getSelectedColor, elementColorsNames } from "../../general-stories/colors/colors-vars-map";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

export const Avatar = ({
  className,
  size,
  img,
  text,
  role,
  ariaLabel,
  backgroundColor,
  isSquare,
  isDisabled,
  topLeftIcon,
  topRightIcon,
  bottomLeftIcon,
  bottomRightIcon
}) => {
  let avatarContent = useMemo(() => {
    if (img) avatarContent = <img role={role} alt={ariaLabel} src={img} className={bemHelper({ element: "image" })} />;
    else
      avatarContent = (
        <span className={bemHelper({ element: "text" })} aria-label={ariaLabel} role={role}>
          {text}
        </span>
      );
    return avatarContent;
  }, [role, ariaLabel, img, text]);

  const backgroundColorStyle = useMemo(() => {
    return { backgroundColor: getSelectedColor(backgroundColor) };
  }, [backgroundColor]);

  return (
    <div
      className={cx(AVATAR_CSS_BASE_CLASS, bemHelper({ state: size }), className, {
        [bemHelper({ state: "is-disabled" })]: isDisabled,
        [bemHelper({ state: "is-square" })]: isSquare
      })}
      style={backgroundColorStyle}
    >
      {avatarContent}
    </div>
  );
};
Avatar.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.oneOf(elementColorsNames),
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf([AVATAR_SIZES.LARGE, AVATAR_SIZES.MEDIUM, AVATAR_SIZES.SMALL]),
  isDisabled: PropTypes.bool,
  isSquare: PropTypes.bool,
  topLeftIcon: PropTypes.element,
  topRightIcon: PropTypes.element,
  bottomLeftIcon: PropTypes.element,
  bottomRightIcon: PropTypes.element
};

Avatar.defaultProps = {
  className: "",
  backgroundColor: elementColorsNames.PRIMARY,
  role: undefined,
  ariaLabel: "",
  size: AVATAR_SIZES.LARGE,
  isDisabled: false,
  isSquare: false,
  topLeftIcon: undefined,
  topRightIcon: undefined,
  bottomLeftIcon: undefined,
  bottomRightIcon: undefined
};

Avatar.sizes = AVATAR_SIZES;
Avatar.colors = elementColorsNames;
