import React, { PureComponent } from "react";
import classNames from "classnames";
import "./description-label.scss";

export default class DescriptionLabel extends PureComponent {
  render() {
    const { children, className } = this.props;
    if (!children) {
      return null;
    }
    return <div className={classNames("description-label", className)}>{children}</div>;
  }
}
DescriptionLabel.defaultProps = {};
