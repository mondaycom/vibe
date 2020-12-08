import React from "react";
import { components } from "react-select";
import Icon from "../../../Icon/Icon";
import DropdownChevronDown from "../../../Icon/Icons/components/DropdownChevronDown";
import { getIndicatorSize } from "../../Dropdown.styles";

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props} className={"dropdown-indicator"}>
    <Icon
      iconType={Icon.type.SVG}
      icon={DropdownChevronDown}
      iconSize={getIndicatorSize(props.size)}
      tabindex="-1"
      clickable={!props.isDisabled}
    />
  </components.DropdownIndicator>
);

export default DropdownIndicator;
