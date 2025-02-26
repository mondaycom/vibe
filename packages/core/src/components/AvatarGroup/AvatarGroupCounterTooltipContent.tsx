import React, { ReactElement, Ref, useCallback, useMemo } from "react";
import cx from "classnames";
import Flex from "../Flex/Flex";
import { AvatarProps } from "../Avatar/Avatar";
import AvatarGroupCounterTooltipContentVirtualizedList from "./AvatarGroupCounterTooltipContentVirtualizedList";
import { avatarRenderer } from "./AvatarGroupCounterTooltipHelper";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarType } from "../Avatar/Avatar.types";
import styles from "./AvatarGroupCounterTooltipContent.module.scss";

export interface AvatarGroupCounterTooltipContentProps extends VibeComponentProps {
  /**
   * Class name applied to the tooltip content container.
   */
  className?: string;
  /**
   * The type of avatars displayed inside the tooltip.
   */
  type?: AvatarType;
  /**
   * The list of avatars shown in the tooltip.
   */
  avatars?: ReactElement<AvatarProps>[];
  /**
   * If true, the tooltip uses a virtualized list for performance optimization.
   */
  isVirtualizedList?: boolean;
  /**
   * Ref for the tooltip content container.
   */
  tooltipContentContainerRef?: Ref<HTMLDivElement>;
}

const AvatarGroupCounterTooltipContent: React.FC<AvatarGroupCounterTooltipContentProps> = ({
  avatars = [],
  type,
  className,
  isVirtualizedList = false,
  tooltipContentContainerRef
}) => {
  const getTooltipContent = useCallback((avatarProps: AvatarProps) => {
    return avatarProps?.tooltipProps?.content || avatarProps?.ariaLabel;
  }, []);

  const { avatarItems, displayAsGrid, tooltipContainerAriaLabel } = useMemo(() => {
    const avatarItems = avatars.map(avatar => ({
      value: { ...avatar.props, tooltipContent: getTooltipContent(avatar.props) }
    }));
    const displayAsGrid = !avatarItems.some(item => item.value.tooltipContent);
    const tooltipContainerAriaLabel = !displayAsGrid
      ? avatarItems.map(item => item.value.tooltipContent).join(",")
      : undefined;
    return { avatarItems, displayAsGrid, tooltipContainerAriaLabel };
  }, [avatars, getTooltipContent]);

  const renderedItems = useMemo(
    () => avatarItems.map((item, index) => avatarRenderer(item, index, undefined, type, displayAsGrid)),
    [avatarItems, displayAsGrid, type]
  );

  if (isVirtualizedList) {
    return (
      <AvatarGroupCounterTooltipContentVirtualizedList
        avatarRenderer={avatarRenderer}
        tooltipContentContainerRef={tooltipContentContainerRef}
        tooltipContainerAriaLabel={tooltipContainerAriaLabel}
        avatarItems={avatarItems}
        type={type}
      />
    );
  }

  const flexProps = {
    ref: tooltipContentContainerRef,
    tabIndex: -1,
    role: "treegrid",
    ariaLabel: tooltipContainerAriaLabel,
    className: displayAsGrid
      ? cx(styles.scrollableContainer, styles.tooltipContainer, styles.tooltipGridContainer, className)
      : cx(styles.scrollableContainer, styles.tooltipContainer, className),
    direction: displayAsGrid ? Flex.directions.ROW : Flex.directions.COLUMN,
    gap: displayAsGrid ? Flex.gaps.XS : Flex.gaps.SMALL,
    wrap: displayAsGrid
  };

  return <Flex {...flexProps}>{renderedItems}</Flex>;
};

export default AvatarGroupCounterTooltipContent;
