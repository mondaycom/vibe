import React, { ReactElement, useMemo } from "react";
import cx from "classnames";
import { AvatarProps } from "../Avatar/Avatar";
import AvatarGroupCounter from "./AvatarGroupCounter";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarSizes, AvatarTypes } from "../Avatar/AvatarConstants";
import { CounterColor } from "../Counter/CounterConstants";
import { avatarOnClick } from "./AvatarGroupHelper";
import styles from "./AvatarGroup.module.scss";

export type AvatarGroupCounterVisualProps = {
  color?: CounterColor.LIGHT | CounterColor.DARK;
  count?: number;
  prefix?: string;
  maxDigits?: number;
  ariaLabelItemsName?: string;
};

interface AvatarGroupProps extends VibeComponentProps {
  className?: string;
  avatarClassName?: string;
  id?: string;
  /**
   * Array of `Avatar` components
   */
  children?: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
  size?: AvatarSizes;
  type?: AvatarTypes;
  max?: number;
  /**
   * 4 `Counter.props` for customization + ariaLabelItemsName for specifying the "items" name in aria label
   */
  counterProps?: AvatarGroupCounterVisualProps;
  /**
   * `Tooltip.props`: props for custom counter tooltip
   */
  // TODO ts-migration replace with TooltipProps when Tooltip is converted to TS
  counterTooltipCustomProps?: any;
  /**
   * Using counter default tooltip virtualized list for rendering only visible items (performance optimization)
   */
  counterTooltipIsVirtualizedList?: boolean;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  className,
  avatarClassName,
  id,
  children,
  size,
  type,
  max = 5,
  counterProps,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList = false
}) => {
  const { displayAvatars, counterTooltipAvatars } = useMemo(() => {
    const childrenArray = Array.isArray(children) ? children : [children];
    return {
      displayAvatars: childrenArray.slice(0, max),
      counterTooltipAvatars: childrenArray.slice(max)
    };
  }, [children, max]);

  if (!children) {
    return null;
  }

  return (
    <div className={cx(styles.avatarGroupContainer, className)} id={id}>
      {displayAvatars.map((avatar, index) => {
        return React.cloneElement(avatar, {
          key: index,
          ...avatar?.props,
          size: size || avatar?.props?.size,
          type: type || avatar?.props?.type,
          className: cx(styles.avatarContainer, avatarClassName),
          onClick: (event: React.MouseEvent | React.KeyboardEvent) => avatarOnClick(event, avatar.props)
        });
      })}
      <AvatarGroupCounter
        counterTooltipAvatars={counterTooltipAvatars}
        counterProps={counterProps}
        counterTooltipCustomProps={counterTooltipCustomProps}
        counterTooltipIsVirtualizedList={counterTooltipIsVirtualizedList}
        size={size}
        type={type}
      />
    </div>
  );
};

export default AvatarGroup;
