import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Icon from "../../components/Icon/Icon";
import { ICON_POSITION, LINK_TARGET } from "./LinkConsts";
import styles from "./Link.module.scss";

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
      inlineText,
      "data-testid": dataTestId
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
        className={cx(styles.mondayStyleLink, "monday-style-link", overrideClassName, {
          [styles.inheritFontSize]: inheritFontSize,
          ["inherit-font-size"]: inheritFontSize,
          [styles.inlineText]: inlineText,
          ["inline-text"]: inlineText
        })}
        aria-label={ariaLabelDescription}
        aria-labelledby={ariaLabeledBy}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.LINK, id)}
      >
        {getIcon(isStart, icon, cx(styles.mondayStyleLinkIconStart, "monday-style-link--icon-start"))}
        <span className={cx(styles.mondayStyleLinkText, "monday-style-link--text")}>{text}</span>
        {getIcon(!isStart, icon, cx(styles.mondayStyleLinkIconEnd, "monday-style-link--icon-end"))}
      </a>
    );
  }
);

function getIcon(shouldShow, icon, className) {
  if (!shouldShow) return;
  return <Icon className={cx(className)} clickable={false} icon={icon} iconType={Icon.type.ICON_FONT} />;
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
