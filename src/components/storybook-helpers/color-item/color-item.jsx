import React, { PureComponent } from "react";
import classNames from "classnames";
import "./color-item.scss";

export default class ColorItem extends PureComponent {
  render() {
    const { name, value, themeColor, halfSize } = this.props;
    const style = { backgroundColor: value };

    return (
      <div className={classNames("color-item")}>
        <div className={classNames("color-rect", { "half-size": halfSize })} style={style} />
        <span className="color-name">{name}</span>
        <span className="color-value">{value}</span>
        <span className="theme-name">{themeColor}</span>
      </div>
    );
  }
}
