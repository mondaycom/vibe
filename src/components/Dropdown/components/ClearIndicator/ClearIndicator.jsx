import React from "react";
import { components } from "react-select";
import Icon from "../../../Icon/Icon";
import CloseSmall from "../../../Icon/Icons/components/CloseSmall";
import { getIndicatorSize } from "../../Dropdown.styles";

const ClearIndicator = props => (
  <components.ClearIndicator {...props} className={"clear-indicator"}>
    <Icon
      iconType={Icon.type.SVG}
      icon={CloseSmall}
      iconSize={getIndicatorSize(props.size)}
      tabindex="-1"
    />
  </components.ClearIndicator>
);

export default ClearIndicator;
