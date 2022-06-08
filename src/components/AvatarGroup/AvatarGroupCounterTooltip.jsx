import React from "react";
import Clickable from "../Clickable/Clickable";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import cx from "classnames";
import PropTypes from "prop-types";
import { AVATAR_TYPES } from "components/Avatar/AvatarConstants";
import styles from "./AvatarGroupCounterTooltip.module.scss";

const AvatarGroupCounterTooltip = ({ children, max, type, className }) => {
  const avatarRenderer = (avatar, index) => {
    if (index < max) {
      return;
    }

    const ClickableContainer = ({ children }) => {
      if (!avatar.props.onClick) {
        return <>{children}</>;
      }

      return <Clickable onClick={avatar.props.onClick}>{children}</Clickable>;
    };

    const ariaLabel =
      typeof avatar.props?.tooltipProps?.content === "string" ? avatar.props.tooltipProps.content : undefined;

    return (
      <ClickableContainer key={`tooltip-item-${index}`}>
        <div className={styles.tooltipAvatarItemClickableContainer}>
          <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} className={styles.tooltipAvatarFlexItemContainer}>
            <Avatar
              {...avatar.props}
              tooltipProps={undefined}
              size={Avatar.sizes.SMALL}
              type={type || avatar.props.type}
              ariaLabel={ariaLabel}
            />
            <div>{avatar.props?.tooltipProps?.content}</div>
          </Flex>
        </div>
      </ClickableContainer>
    );
  };

  if (!children || !children.length) {
    return null;
  }

  const renderedAvatars = children.map(avatarRenderer).filter(a => !!a);

  if (!renderedAvatars.length) {
    return null;
  }

  return (
    <Flex
      className={cx(styles.scrollableContainer, styles.tooltipContainer, className)}
      role="treegrid"
      direction={Flex.directions.COLUMN}
    >
      {renderedAvatars}
    </Flex>

    // TODO VirtualizedList?
    // <VirtualizedList
    //   className={cx(styles.optionsContainer, className)}
    //   items={children}
    //   itemRenderer={avatarRenderer}
    //   role="treegrid"
    //   scrollableClassName={styles.scrollableContainer}
    // />
  );
};

AvatarGroupCounterTooltip.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([AVATAR_TYPES.TEXT, AVATAR_TYPES.ICON, AVATAR_TYPES.IMG]),
  max: PropTypes.number,
  /**
   * Array of Avatar components
   */
  children: PropTypes.arrayOf(PropTypes.element)
};
AvatarGroupCounterTooltip.defaultProps = {
  className: undefined,
  type: undefined,
  max: undefined,
  children: []
};

export default AvatarGroupCounterTooltip;
