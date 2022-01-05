import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import "./Link.scss";
import { LINK_TARGET, ICON_POSITION } from "./LinkConsts";
import Icon from "../Icon/Icon";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";

const Link = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      href,
      text,
      rel,
      onClick,
      target,
      ariaLabelDescription,
      icon,
      iconPosition,
      id,
      ariaLabeledBy,
      disableNavigation
    },
    ref
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const isStart = iconPosition === ICON_POSITION.START;

    const onClickWrapper = useCallback(
      e => {
        if (disableNavigation) {
          e.preventDefault();
        }
        onClick && onClick(e);
      },
      [disableNavigation, onClick]
    );

    return (
      <a
        id={id}
        href={href}
        rel={rel}
        ref={ref}
        onClick={onClickWrapper}
        target={target}
        className={cx("monday-style-link", overrideClassName)}
        aria-label={ariaLabelDescription}
        aria-labelledby={ariaLabeledBy}
      >
        {getIcon(isStart, icon, "monday-style-link--icon-start")}
        <span className="monday-style-link--text">{text}</span>
        {getIcon(!isStart, icon, "monday-style-link--icon-end")}
      </a>
    );
  }
);

function getIcon(shouldShow, icon, className) {
  if (!shouldShow) return;
  return <Icon className={className} clickable={false} icon={icon} iconType={Icon.type.ICON_FONT} />;
}

// Backward compatibility for enum naming
Link.position = ICON_POSITION;
Link.target = LINK_TARGET;

Link.iconPositions = ICON_POSITION;
Link.targets = LINK_TARGET;

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.oneOf([Link.targets.NEW_WINDOW, Link.targets.PARENT, Link.targets.SELF, Link.targets.TOP]),
  /** Aria label description */
  ariaLabelDescription: PropTypes.string,
  /** element id to describe the counter accordingly */
  ariaLabeledBy: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconPosition: PropTypes.oneOf([Link.iconPositions.START, Link.iconPositions.END]),
  id: PropTypes.string,
  disableNavigation: PropTypes.bool
};

Link.defaultProps = {
  /**
   * Id to add to the
   */
  id: "",
  /**
   * Classname to be added to the component container
   */
  className: undefined,
  /**
   * the href to link the component to
   */
  href: "",
  /**
   * the link text
   */
  text: "",
  /**
   * The rel attribute defines the relationship between a linked resource and the current document
   */
  rel: "noreferrer",
  /**
   * on link click callback
   */
  onClick: NOOP,
  /**
   * the target window where the link should be open
   */
  target: Link.targets.NEW_WINDOW,
  /**
   * Aria label
   */
  ariaLabelDescription: "",
  /**
   * icon to add to the link
   */
  icon: "",
  /**
   * where the icon should be located
   */
  iconPosition: Link.position.START,
  /**
   * Id to add to the link element
   */
  ariaLabeledBy: "",
  /**
   * Disable navigation on click
   */
  disableNavigation: false
};

export default Link;
