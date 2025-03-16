import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import CustomSvgIcon from "../Icon/CustomSvgIcon/CustomSvgIcon";
import { AvatarSize as AvatarSizeEnum } from "./AvatarConstants";
import { AvatarSize } from "./Avatar.types";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./AvatarBadge.module.scss";
import Icon from "../Icon/Icon";
import { SubIcon } from "../../types";

export interface AvatarBadgeProps extends VibeComponentProps {
  /**
   * The image source for the badge.
   */
  src?: string;
  /**
   * The icon displayed inside the badge.
   */
  icon?: SubIcon;
  /**
   * The tab index of the badge.
   */
  tabIndex?: string | number;
  /**
   * The size of the badge.
   */
  size?: AvatarSize;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> & {
  sizes?: typeof AvatarSizeEnum;
} = ({
  src,
  icon,
  tabIndex = 0,
  className,
  size = "large",
  id,
  "data-testid": dataTestId,
  ...otherProps
}: AvatarBadgeProps) => {
  const classNames = cx(getStyle(styles, camelCase("badge--" + size)), className);
  const testId = dataTestId || getTestId(ComponentDefaultTestId.AVATAR_BADGE, id);

  if (icon) {
    return <Icon icon={icon} className={classNames} {...otherProps} data-testid={testId} />;
  }

  return src ? (
    <CustomSvgIcon src={src} className={classNames} clickable={tabIndex === -1} {...otherProps} data-testid={testId} />
  ) : null;
};

Object.assign(AvatarBadge, {
  sizes: AvatarSizeEnum
});
