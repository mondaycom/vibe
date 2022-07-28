import React, { useMemo } from "react";
import PropTypes from "prop-types";
import VirtualizedList from "../VirtualizedList/VirtualizedList";
import Avatar from "../Avatar/Avatar";
import styles from "./AvatarGroupCounterTooltipContentVirtualizedList.module.scss";

const LIST_OPTIONS = Object.freeze({
  maxItemsWithoutScroll: 10,
  itemLineHeight: 34,
  itemLineWidth: 150
});

const AvatarGroupCounterTooltipContentVirtualizedList = ({
  avatarItems,
  avatarRenderer,
  type,
  tooltipContainerAriaLabel,
  tooltipContentContainerRef
}) => {
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
        items={virtualizedItems}
        itemRenderer={(item, index, style) => avatarRenderer(item, index, style, type, false)}
        role="treegrid"
        scrollableClassName={styles.scrollableContainer}
        getItemId={(item, index) => index}
        style={virtualizedListStyle}
      />
    </div>
  );
};

AvatarGroupCounterTooltipContentVirtualizedList.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.element),
  avatarRenderer: PropTypes.func,
  tooltipContainerAriaLabel: PropTypes.string,
  tooltipContentContainerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG])
};
AvatarGroupCounterTooltipContentVirtualizedList.defaultProps = {
  avatars: [],
  avatarRenderer: undefined,
  tooltipContainerAriaLabel: undefined,
  tooltipContentContainerRef: undefined,
  type: undefined
};

export default AvatarGroupCounterTooltipContentVirtualizedList;
