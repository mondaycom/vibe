import React, { useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Clickable from "../Clickable/Clickable";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import styles from "./AvatarGroupCounterTooltipContent.module.scss";

const AvatarGroupCounterTooltipContent = ({ avatars, type, className }) => {
  const getTooltipContent = avatarProps => {
    return avatarProps?.tooltipProps?.content || avatarProps?.ariaLabel;
  };

  const displayAsGrid = !avatars.some(avatar => getTooltipContent(avatar.props));

  const renderedItems = useMemo(() => {
    const avatarRenderer = (item, index, style) => {
      const avatarProps = item.value;

      const ClickableWrapper = ({ children }) => {
        if (!avatarProps.onClick) {
          return children;
        }

        return <Clickable onClick={avatarProps.onClick}>{children}</Clickable>;
      };

      const tooltipAvatarFlexItemClassName = displayAsGrid ? "" : styles.tooltipAvatarFlexItemContainer;

      const labelId = `tooltip-item-${index}-label`;

      return (
        <ClickableWrapper key={index}>
          <div className={styles.tooltipAvatarItemClickableContainer} style={style}>
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
              />
              {!displayAsGrid && (
                <div id={labelId} className={styles.tooltipAvatarItemTitle}>
                  {getTooltipContent(avatarProps)}
                </div>
              )}
            </Flex>
          </div>
        </ClickableWrapper>
      );
    };

    return avatars.map((avatar, index) =>
      avatarRenderer({ value: avatar.props }, index, { width: displayAsGrid ? undefined : "100%" })
    );
  }, [avatars, displayAsGrid, type]);

  if (displayAsGrid) {
    return (
      <Flex
        className={cx(styles.scrollableContainer, styles.tooltipContainer, styles.tooltipGridContainer, className)}
        role="treegrid"
        direction={Flex.directions.ROW}
        gap={Flex.gaps.XS}
        wrap
      >
        {renderedItems}
      </Flex>
    );
  }

  return (
    <Flex
      className={cx(styles.scrollableContainer, styles.tooltipContainer, className)}
      role="treegrid"
      direction={Flex.directions.COLUMN}
    >
      {renderedItems}
    </Flex>
  );
};

AvatarGroupCounterTooltipContent.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  /**
   * Array of Avatar components
   */
  avatars: PropTypes.arrayOf(PropTypes.element)
};
AvatarGroupCounterTooltipContent.defaultProps = {
  className: undefined,
  type: undefined,
  avatars: []
};

export default AvatarGroupCounterTooltipContent;
