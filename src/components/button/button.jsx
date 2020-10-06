/* eslint-disable react/jsx-props-no-spreading,no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.scss";

const NOOP = () => {};

const propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  outline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // eslint-disable-next-line react/require-default-props
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  size: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  style: PropTypes.any,
  successIcon: PropTypes.string,
  successText: PropTypes.string,
  rightIcon: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  success: PropTypes.bool
};

const defaultProps = {
  color: "primary",
  tag: "button",
  active: false,
  block: false,
  disabled: false,
  loading: false,
  outline: false,
  onClick: NOOP,
  successIcon: "",
  successText: "",
  rightIcon: false
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { disabled, loading, onClick, success } = this.props;
    if (disabled || loading || success) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
  }

  renderText(text) {
    return <span>{text}</span>;
  }

  renderIcon(icon, className) {
    if (typeof icon === "function")
      return <span className="icon-component-container">{icon()}</span>;

    return <span className={classNames("ds-i", className, icon)} />;
  }

  renderContentWithIcon(text, icon, isIconOnRightSide) {
    if (isIconOnRightSide) {
      return (
        <span className="ds-text-container">
          {this.renderText(text)} {this.renderIcon(icon, "right")}
        </span>
      );
    }
    return (
      <span className="ds-text-container">
        {this.renderIcon(icon, "left")} {this.renderText(text)}
      </span>
    );
  }

  renderContent() {
    const {
      loading,
      icon,
      rightIcon,
      children,
      successIcon,
      successText,
      success
    } = this.props;

    if (loading) {
      return <div className="loader" />;
    }
    if (success) {
      return this.renderContentWithIcon(successText, successIcon, rightIcon);
    }
    if (icon) {
      return this.renderContentWithIcon(children, icon, rightIcon);
    }
    return children;
  }

  render() {
    let { tag: Tag } = this.props;
    const {
      active,
      block,
      className,
      color,
      outline,
      size,
      loading,
      getRef,
      icon,
      success,
      successText,
      rightIcon,
      successIcon,
      style,
      disabled,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      "ds-btn",
      success
        ? "ds-btn-success-mode"
        : `ds-btn${outline ? "-outline" : ""}-${color}${
            loading ? "-loading" : ""
          }`,
      size ? `ds-btn-${size}` : false,
      block ? "ds-btn-block" : false,
      { active, disabled }
    );

    if (attributes.href && Tag === "button") {
      Tag = "a";
    }

    const tagProps = {
      ...attributes,
      disabled,
      className: classes,
      onClick: this.onClick
    };

    if (style != null) {
      tagProps.style = style;
    }
    return (
      <Tag {...tagProps} ref={getRef}>
        {this.renderContent()}
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
