import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import "./Link.scss";
import { LINK_TARGET, ICON_POSITION } from "./LinkConsts";
import Icon from "../Icon/Icon";

const Link = ({
  componentClassName,
  href,
  text,
  rel,
  onClick,
  target,
  ariaLabelDescription,
  iconName,
  iconPosition
}) => {
  const isStart = iconPosition === ICON_POSITION.START;

  return (
    <a
      href={href}
      rel={rel}
      onClick={onClick}
      target={target}
      className={cx("monday-style-link", componentClassName)}
      aria-label={ariaLabelDescription}
    >
      {isStart && (
        <Icon
          className="monday-style-link--icon-start"
          clickable={false}
          iconName={iconName}
        />
      )}
      <span className="monday-style-link--text">{text}</span>
      {!isStart && (
        <Icon
          className="monday-style-link--icon-end"
          clickable={false}
          iconName={iconName}
        />
      )}
    </a>
  );
};

Link.target = LINK_TARGET;
Link.position = ICON_POSITION;

Link.propTypes = {
  componentClassName: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.oneOf([
    LINK_TARGET.NEW_WINDOW,
    LINK_TARGET.PARENT,
    LINK_TARGET.SELF,
    LINK_TARGET.TOP
  ]),
  ariaLabelDescription: PropTypes.string,
  iconName: PropTypes.string,
  iconPosition: PropTypes.oneOf([ICON_POSITION.START, ICON_POSITION.END])
};

Link.defaultProps = {
  componentClassName: "",
  href: "",
  text: "",
  rel: "noreferrer",
  onClick: NOOP,
  target: LINK_TARGET.NEW_WINDOW,
  ariaLabelDescription: "",
  iconName: "",
  iconPosition: ICON_POSITION.START
};

export default Link;
