import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Icon from "../../components/Icon/Icon";
import { LINK_TARGET, ICON_POSITION } from "./LinkConsts";
import "./Link.scss";

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
      disableNavigation,
      inheritFontSize,
      inlineText
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
        className={cx("monday-style-link", overrideClassName, {
          "inherit-font-size": inheritFontSize,
          "inline-text": inlineText
        })}
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
  /** id added to the link component */
  id: PropTypes.string,
  /** class name to be added to the link component */
  className: PropTypes.string,
  /** Specifies the location (URL) of the external resource */
  href: PropTypes.string,
  /** The link text */
  text: PropTypes.string,
  /** Defines the relationship between a linked resource and the current document */
  rel: PropTypes.string,
  /** onClick function - MouseEvent */
  onClick: PropTypes.func,
  /** Specifies where to open the linked document */
  target: PropTypes.oneOf([Link.targets.NEW_WINDOW, Link.targets.PARENT, Link.targets.SELF, Link.targets.TOP]),
  /** Aria label description */
  ariaLabelDescription: PropTypes.string,
  /** element id to describe the counter accordingly */
  ariaLabeledBy: PropTypes.string,
  /** Icon to add to the link element */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** the position of the icon in relation to the etext */
  iconPosition: PropTypes.oneOf([Link.iconPositions.START, Link.iconPositions.END]),
  /** disable navigation */
  disableNavigation: PropTypes.bool,
  /** inherit text size */
  inheritFontSize: PropTypes.bool,
  /** if the link is in part of other text content */
  inlineText: PropTypes.bool
};

Link.defaultProps = {
  id: "",
  className: undefined,
  href: "",
  text: "",
  rel: "noreferrer",
  onClick: NOOP,
  target: Link.targets.NEW_WINDOW,
  ariaLabelDescription: "",
  icon: "",
  iconPosition: Link.position.START,
  ariaLabeledBy: "",
  disableNavigation: false,
  inheritFontSize: false,
  inlineText: false
};

export default Link;
