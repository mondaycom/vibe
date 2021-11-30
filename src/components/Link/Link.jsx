import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import "./Link.scss";
import { LINK_TARGET, ICON_POSITION } from "./LinkConsts";
import Icon from "../Icon/Icon";

const Link = forwardRef(
  (
    {
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
    const isStart = iconPosition === ICON_POSITION.START;

    const onClickWrapper = useCallback(
      e => {
        if (disableNavigation) {
          e.preventDefault();
        }
        onClick && onClick();
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
        className={cx("monday-style-link", componentClassName)}
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

Link.target = LINK_TARGET;
Link.position = ICON_POSITION;

Link.propTypes = {
  componentClassName: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.oneOf([Link.target.NEW_WINDOW, Link.target.PARENT, Link.target.SELF, Link.target.TOP]),
  /** Aria label description */
  ariaLabelDescription: PropTypes.string,
  /** element id to describe the counter accordingly */
  ariaLabeledBy: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf([Link.position.START, Link.position.END]),
  id: PropTypes.string,
  disableNavigation: PropTypes.bool
};

Link.defaultProps = {
  componentClassName: "",
  href: "",
  text: "",
  rel: "noreferrer",
  onClick: NOOP,
  target: Link.target.NEW_WINDOW,
  ariaLabelDescription: "",
  icon: "",
  iconPosition: Link.position.START,
  id: "",
  ariaLabeledBy: "",
  disableNavigation: false
};

export default Link;
