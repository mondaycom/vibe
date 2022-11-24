import React, { ReactElement, Ref, useCallback, useMemo } from "react";
import cx from "classnames";
import Flex from "../Flex/Flex";
import { AvatarProps } from "../Avatar/Avatar";
import AvatarGroupCounterTooltipContentVirtualizedList from "./AvatarGroupCounterTooltipContentVirtualizedList";
import { avatarRenderer } from "./AvatarGroupCounterTooltipHelper";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarType } from "../Avatar/AvatarConstants";
import { FlexDirection, FlexGap } from "../Flex/FlexConstants";
import styles from "./AvatarGroupCounterTooltipContent.module.scss";

interface AvatarGroupCounterTooltipContentProps extends VibeComponentProps {
  className?: string;
  type?: AvatarType;
  /**
   * Array of Avatar components
   */
  avatars?: ReactElement<AvatarProps>[];
  isVirtualizedList?: boolean;
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
    // TODO replace with enum when Flex is converted to TS
    direction: displayAsGrid ? FlexDirection.ROW : FlexDirection.COLUMN,
    gap: displayAsGrid ? FlexGap.XS : FlexGap.SMALL,
    wrap: displayAsGrid
  };

  return <Flex {...flexProps}>{renderedItems}</Flex>;
};

export default AvatarGroupCounterTooltipContent;
