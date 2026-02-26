import React from "react";
import { components } from "react-select";
import { Icon } from "@vibe/icon";
import { CloseSmall } from "@vibe/icons";
import { getIndicatorSize } from "../../Dropdown.styles";

const ClearIndicator = props => {
  const { size } = props;
  return (
    <components.ClearIndicator {...props} className="clear-indicator">
      <Icon type="svg" icon={CloseSmall} size={getIndicatorSize(size)} tabindex="-1" />
    </components.ClearIndicator>
  );
};

export default ClearIndicator;
