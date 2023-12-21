import React, { PureComponent } from "react";
import classNames from "classnames";
import "./flex-layout.scss";

export default class FlexLayout extends PureComponent {
  render() {
    const { direction, children, centerize, className, spaceBetween, fullWidth } = this.props;

    return (
      <div
        className={classNames("flex-layout", className, direction, {
          centerize,
          spaceBetween,
          "full-width": fullWidth
        })}
      >
        {children}
      </div>
    );
  }
}
FlexLayout.defaultProps = {
  direction: "row",
  centerize: false
};
