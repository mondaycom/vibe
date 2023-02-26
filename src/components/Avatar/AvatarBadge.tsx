import React from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import CustomSvgIcon from "../Icon/CustomSvgIcon/CustomSvgIcon";
import { AvatarSize } from "./AvatarConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import "./AvatarBadge.scss";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar-badge";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

export interface AvatarBadgeProps extends VibeComponentProps {
  src?: string;
  ariaLabel?: string;
  tabIndex?: string | number;
  className?: string;
  size?: string;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> & {
  sizes?: typeof AvatarSize;
} = ({ src, ariaLabel, tabIndex = 0, className, size = AvatarSize.LARGE, ...otherProps }) => {
  return src ? (
    <CustomSvgIcon
      src={src}
      ariaLabel={ariaLabel}
      className={cx(AVATAR_CSS_BASE_CLASS, bemHelper({ state: size }), className)}
      clickable={tabIndex === -1}
      {...otherProps}
    />
  ) : null;
};

Object.assign(AvatarBadge, {
  sizes: AvatarSize
});
