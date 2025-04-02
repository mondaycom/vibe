import React, { ReactElement, useMemo } from "react";
import cx from "classnames";
import { AvatarProps } from "../Avatar/Avatar";
import AvatarGroupCounter from "./AvatarGroupCounter";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarSize, AvatarType } from "../Avatar/Avatar.types";
import { avatarOnClick } from "./AvatarGroupHelper";
import { TooltipProps } from "../Tooltip/Tooltip";
import styles from "./AvatarGroup.module.scss";
import { AvatarGroupCounterVisualProps } from "./AvatarGroup.types";

export interface AvatarGroupProps extends VibeComponentProps {
  /**
   * Class name applied to each avatar.
   */
  avatarClassName?: string;
  /**
   * The avatars displayed in the group.
   */
  children?: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
  /**
   * The size of the avatars in the group.
   */
  size?: AvatarSize;
  /**
   * The type of the avatars in the group.
   */
  type?: AvatarType;
  /**
   * The maximum number of avatars displayed before showing a counter.
   */
  max?: number;
  /**
   * Props for customizing the counter display.
   */
  counterProps?: AvatarGroupCounterVisualProps;
  /**
   * Props passed to the Tooltip component. See full options in the [Tooltip documentation](https://vibe.monday.com/?path=/docs/components-tooltip--docs).
   */
  counterTooltipCustomProps?: Partial<TooltipProps>;
  /**
   * If true, the counter tooltip uses a virtualized list for performance optimization.
   */
  counterTooltipIsVirtualizedList?: boolean;
  /**
   * If true, the component is disabled and non-interactive.
   */
  disabled?: boolean;
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
  counterTooltipIsVirtualizedList = false,
  disabled
}) => {
  const { displayAvatars, counterTooltipAvatars } = useMemo(() => {
    if (!children) {
      return {};
    }
    const childrenArray = Array.isArray(children) ? children : [children];
    return {
      displayAvatars: childrenArray.slice(0, max).map((avatar, index) => {
        return React.cloneElement(avatar, {
          key: index,
          ...avatar?.props,
          size: size || avatar?.props?.size,
          type: type || avatar?.props?.type,
          className: cx(styles.avatarContainer, avatarClassName),
          onClick: (event: React.MouseEvent | React.KeyboardEvent) => avatarOnClick(event, avatar.props),
          disabled
        });
      }),
      counterTooltipAvatars: childrenArray.slice(max)
    };
  }, [avatarClassName, children, disabled, max, size, type]);

  if (!children) {
    return null;
  }

  return (
    <div className={cx(styles.avatarGroupContainer, className)} id={id}>
      {displayAvatars}
      <AvatarGroupCounter
        counterTooltipAvatars={counterTooltipAvatars}
        counterProps={counterProps}
        counterTooltipCustomProps={counterTooltipCustomProps}
        counterTooltipIsVirtualizedList={counterTooltipIsVirtualizedList}
        size={size}
        type={type}
        disabled={disabled}
      />
    </div>
  );
};

export default AvatarGroup;
