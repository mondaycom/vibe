import React, { ReactElement, Ref, useMemo } from "react";
import VirtualizedList from "../VirtualizedList/VirtualizedList";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarType } from "../Avatar/AvatarConstants";
import { AvatarProps } from "../Avatar/Avatar";
import styles from "./AvatarGroupCounterTooltipContentVirtualizedList.module.scss";

const LIST_OPTIONS = Object.freeze({
  maxItemsWithoutScroll: 10,
  itemLineHeight: 34,
  itemLineWidth: 150
});

interface AvatarGroupCounterTooltipContentVirtualizedListProps extends VibeComponentProps {
  /**
   * Array of Avatar components
   */
  avatarItems?: { value: AvatarProps & { tooltipContent: string | ReactElement } }[];
  avatarRenderer?: (
    item: { value: AvatarProps & { tooltipContent: string | ReactElement } },
    index: number,
    style: any,
    type: AvatarType,
    displayAsGrid: boolean
  ) => React.ReactNode;
  tooltipContainerAriaLabel?: string;
  tooltipContentContainerRef?: Ref<HTMLDivElement>;
  type?: AvatarType;
}

const AvatarGroupCounterTooltipContentVirtualizedList: React.FC<
  AvatarGroupCounterTooltipContentVirtualizedListProps
> = ({ avatarItems = [], avatarRenderer, type, tooltipContainerAriaLabel, tooltipContentContainerRef }) => {
  const virtualizedItems = useMemo(
    () => avatarItems.map(item => ({ ...item, height: LIST_OPTIONS.itemLineHeight })),
    [avatarItems]
  );

  const minCount = Math.min(avatarItems.length, LIST_OPTIONS.maxItemsWithoutScroll);
  const virtualizedListStyle = {
    height: LIST_OPTIONS.itemLineHeight * minCount,
    minWidth: LIST_OPTIONS.itemLineWidth
  };

  return (
    <div
      className={styles.virtualizedTooltipContainer}
      aria-label={tooltipContainerAriaLabel}
      ref={tooltipContentContainerRef}
      tabIndex={-1}
    >
      <VirtualizedList
        // @ts-ignore TODO ts-migration: solve when VirtualizedList is converted to TS
        items={virtualizedItems}
        itemRenderer={(item: any, index: number, style: any) => avatarRenderer(item, index, style, type, false)}
        role="treegrid"
        scrollableClassName={styles.scrollableContainer}
        getItemId={(item: any, index: number) => index}
        style={virtualizedListStyle}
      />
    </div>
  );
};

export default AvatarGroupCounterTooltipContentVirtualizedList;
