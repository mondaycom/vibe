import React, { useCallback, useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Clickable from "../Clickable/Clickable";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import AvatarGroupCounterTooltipContentVirtualizedList from "./AvatarGroupCounterTooltipContentVirtualizedList";
import styles from "./AvatarGroupCounterTooltipContent.module.scss";

const AvatarGroupCounterTooltipContent = ({
  avatars,
  type,
  className,
  isVirtualizedList,
  tooltipContentContainerRef
}) => {
  const getTooltipContent = avatarProps => {
    return avatarProps?.tooltipProps?.content || avatarProps?.ariaLabel;
  };

  const { avatarItems, displayAsGrid } = useMemo(() => {
    const avatarItems = avatars.map(avatar => ({
      value: { ...avatar.props, tooltipContent: getTooltipContent(avatar.props) }
    }));
    const displayAsGrid = !avatarItems.some(item => item.value.tooltipContent);
    return { avatarItems, displayAsGrid };
  }, [avatars]);

  const avatarRenderer = useCallback(
    (item, index, style) => {
      const avatarProps = item.value;

      const ClickableWrapper = ({ children }) => {
        if (!avatarProps.onClick) {
          return children;
        }

        return (
          <Clickable onClick={avatarProps.onClick} tabIndex="-1">
            {children}
          </Clickable>
        );
      };

      const tooltipAvatarFlexItemClassName =
        isVirtualizedList || displayAsGrid ? "" : styles.tooltipAvatarFlexItemContainer;

      const labelId = `tooltip-item-${index}-label`;

      return (
        <ClickableWrapper key={index}>
          <div style={style}>
            <Flex
              direction={Flex.directions.ROW}
              gap={Flex.gaps.XS}
              className={tooltipAvatarFlexItemClassName}
              ariaLabelledby={labelId}
            >
              <Avatar
                {...avatarProps}
                tooltipProps={undefined}
                ariaLabel={""}
                size={Avatar.sizes.SMALL}
                type={type || avatarProps?.type}
                tabIndex="-1"
              />
              {!displayAsGrid && (
                <div id={labelId} className={styles.tooltipAvatarItemTitle}>
                  {avatarProps.tooltipContent}
                </div>
              )}
            </Flex>
          </div>
        </ClickableWrapper>
      );
    },
    [displayAsGrid, isVirtualizedList, type]
  );

  const renderedItems = useMemo(
    () => avatarItems.map((item, index) => avatarRenderer(item, index, { width: displayAsGrid ? undefined : "100%" })),
    [avatarRenderer, avatarItems, displayAsGrid]
  );

  const tooltipContainerAriaLabel = avatarItems.map(item => item.value.tooltipContent).join(",");

  if (isVirtualizedList) {
    return (
      <AvatarGroupCounterTooltipContentVirtualizedList
        avatarRenderer={avatarRenderer}
        tooltipContentContainerRef={tooltipContentContainerRef}
        tooltipContainerAriaLabel={tooltipContainerAriaLabel}
        avatarItems={avatarItems}
      />
    );
  }

  const flexProps = {
    ref: tooltipContentContainerRef,
    tabIndex: -1,
    ariaLabel: tooltipContainerAriaLabel,
    className: displayAsGrid
      ? cx(styles.scrollableContainer, styles.tooltipContainer, styles.tooltipGridContainer, className)
      : cx(styles.scrollableContainer, styles.tooltipContainer, className),
    role: "treegrid",
    gap: displayAsGrid ? Flex.gaps.XS : undefined,
    wrap: displayAsGrid,
    direction: displayAsGrid ? Flex.directions.ROW : Flex.directions.COLUMN
  };

  return <Flex {...flexProps}>{renderedItems}</Flex>;
};

AvatarGroupCounterTooltipContent.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  /**
   * Array of Avatar components
   */
  avatars: PropTypes.arrayOf(PropTypes.element),
  isVirtualizedList: PropTypes.bool,
  tooltipContentContainerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })])
};
AvatarGroupCounterTooltipContent.defaultProps = {
  className: undefined,
  type: undefined,
  avatars: [],
  isVirtualizedList: false,
  tooltipContentContainerRef: undefined
};

export default AvatarGroupCounterTooltipContent;
