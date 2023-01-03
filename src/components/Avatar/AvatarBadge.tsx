import cx from "classnames";
import React from "react";
import CustomSvgIcon from "../Icon/CustomSvgIcon/CustomSvgIcon";
import { AvatarSize } from "./AvatarConstants";
import VibeComponentProps from "src/types/VibeComponentProps";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./AvatarBadge.module.scss";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar-badge";

export interface AvatarBadgeProps extends VibeComponentProps {
  src?: string;
  ariaLabel?: string;
  tabIndex?: string | number;
  className?: string;
  size?: string;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> & {
  sizes?: typeof AvatarSize;
} = ({
  src,
  ariaLabel,
  tabIndex = 0,
  className,
  size = AvatarSize.LARGE,
  id,
  "data-testid": dataTestId,
  ...otherProps
}) => {
  return src ? (
    <CustomSvgIcon
      src={src}
      ariaLabel={ariaLabel}
      className={cx(AVATAR_CSS_BASE_CLASS, getStyle(styles, size), `${AVATAR_CSS_BASE_CLASS}--${size}`, className)}
      clickable={tabIndex === -1}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.AVATAR_BADGE, id)}
      {...otherProps}
    />
  ) : null;
};

Object.assign(AvatarBadge, {
  sizes: AvatarSize
});
