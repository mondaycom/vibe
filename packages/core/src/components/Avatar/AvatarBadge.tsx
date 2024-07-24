import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import CustomSvgIcon from "../Icon/CustomSvgIcon/CustomSvgIcon";
import { AvatarSize } from "./AvatarConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./AvatarBadge.module.scss";
import Icon from "../Icon/Icon";
import { SubIcon } from "../../types";

export interface AvatarBadgeProps extends VibeComponentProps {
  src?: string;
  /**
   * Use to provide SVG Components
   */
  icon?: SubIcon;
  // TODO Remove in next major as breaking change
  ariaLabel?: string;
  tabIndex?: string | number;
  className?: string;
  size?: string;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> & {
  sizes?: typeof AvatarSize;
} = ({
  src,
  icon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ariaLabel,
  tabIndex = 0,
  className,
  size = AvatarSize.LARGE,
  id,
  "data-testid": dataTestId,
  ...otherProps
}) => {
  const classNames = cx(getStyle(styles, camelCase("badge--" + size)), className);
  const testId = dataTestId || getTestId(ComponentDefaultTestId.AVATAR_BADGE, id);

  if (icon) {
    return <Icon icon={icon} className={classNames} clickable={false} {...otherProps} data-testid={testId} />;
  }

  return src ? (
    <CustomSvgIcon src={src} className={classNames} clickable={tabIndex === -1} {...otherProps} data-testid={testId} />
  ) : null;
};

Object.assign(AvatarBadge, {
  sizes: AvatarSize
});
