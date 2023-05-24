import React, { CSSProperties, ReactElement, Ref, useMemo } from "react";
import VirtualizedList, { VirtualizedListItem } from "../VirtualizedList/VirtualizedList";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarType } from "../Avatar/AvatarConstants";
import { AvatarProps } from "../Avatar/Avatar";
import styles from "./AvatarGroupCounterTooltipContentVirtualizedList.module.scss";
import { ElementContent } from "../../types";

const LIST_OPTIONS = Object.freeze({
  maxItemsWithoutScroll: 10,
  itemLineHeight: 34,
  itemLineWidth: 150
});

export type AvatarItem = {
  value: AvatarProps & { tooltipContent: ElementContent | ElementContent[] };
};

interface AvatarGroupCounterTooltipContentVirtualizedListProps extends VibeComponentProps {
  /**
   * Array of Avatar components
   */
  avatarItems?: AvatarItem[];
  avatarRenderer?: (
    item: AvatarItem,
    index: number,
    style: CSSProperties,
    type: AvatarType,
    displayAsGrid: boolean
  ) => ReactElement;
  tooltipContainerAriaLabel?: string;
  tooltipContentContainerRef?: Ref<HTMLDivElement>;
  type?: AvatarType;
}

const AvatarGroupCounterTooltipContentVirtualizedList: React.FC<
  AvatarGroupCounterTooltipContentVirtualizedListProps
> = ({ avatarItems = [], avatarRenderer, type, tooltipContainerAriaLabel, tooltipContentContainerRef }) => {
  const virtualizedItems: VirtualizedListItem[] = useMemo(
    () => avatarItems.map(item => ({ value: item, height: LIST_OPTIONS.itemLineHeight } as VirtualizedListItem)),
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
        items={virtualizedItems}
        itemRenderer={(item: VirtualizedListItem, index: number, style: CSSProperties) =>
          avatarRenderer(item.value as AvatarItem, index, style, type, false)
        }
        role="treegrid"
        scrollableClassName={styles.scrollableContainer}
        getItemId={(item: VirtualizedListItem, index: number) => String(index)}
        style={virtualizedListStyle}
      />
    </div>
  );
};

export default AvatarGroupCounterTooltipContentVirtualizedList;
