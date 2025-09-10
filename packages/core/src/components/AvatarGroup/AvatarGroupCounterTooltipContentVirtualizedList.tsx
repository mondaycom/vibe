import React, { type CSSProperties, type ReactElement, type Ref, useMemo } from "react";
import { VirtualizedList, type VirtualizedListItem } from "../VirtualizedList";
import { type VibeComponentProps } from "@vibe/shared";
import { type AvatarType } from "../Avatar/Avatar.types";
import { type AvatarProps } from "../Avatar/Avatar";
import { type ElementContent } from "../../types";
import styles from "./AvatarGroupCounterTooltipContentVirtualizedList.module.scss";

const LIST_OPTIONS = Object.freeze({
  maxItemsWithoutScroll: 10,
  itemLineHeight: 34,
  itemLineWidth: 150
});

export type AvatarItem = {
  value: AvatarProps & { tooltipContent: ElementContent };
};

export interface AvatarGroupCounterTooltipContentVirtualizedListProps extends VibeComponentProps {
  /**
   * The list of avatars displayed in the virtualized tooltip.
   */
  avatarItems?: AvatarItem[];
  /**
   * Function to render each avatar item.
   */
  avatarRenderer?: (
    item: AvatarItem,
    index: number,
    style: CSSProperties,
    type: AvatarType,
    displayAsGrid: boolean
  ) => ReactElement;
  /**
   * The ARIA label of the tooltip container.
   */
  tooltipContainerAriaLabel?: string;
  /**
   * Ref for the tooltip content container.
   */
  tooltipContentContainerRef?: Ref<HTMLDivElement>;
  /**
   * The type of avatars in the tooltip.
   */
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
