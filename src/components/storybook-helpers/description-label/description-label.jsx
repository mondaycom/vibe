import React, { PureComponent } from "react";
import classNames from "classnames";
import "./description-label.scss";

export default class DescriptionLabel extends PureComponent {
  render() {
    const { children } = this.props;
    if (!children) {
      return null;
    }
    return <span className={classNames("description-label")}>{children}</span>;
  }
}
DescriptionLabel.defaultProps = {};
