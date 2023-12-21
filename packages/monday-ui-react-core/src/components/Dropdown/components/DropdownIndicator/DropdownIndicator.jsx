/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import Icon from "../../../Icon/Icon";
import DropdownChevronDown from "../../../Icon/Icons/components/DropdownChevronDown";
import { getIndicatorSize } from "../../Dropdown.styles";

const DropdownIndicator = props => {
  const { isDisabled, size } = props;
  return (
    <components.DropdownIndicator {...props} className="dropdown-indicator">
      <Icon
        iconType={Icon.type.SVG}
        icon={DropdownChevronDown}
        iconSize={getIndicatorSize(size)}
        tabindex="-1"
        clickable={!isDisabled}
      />
    </components.DropdownIndicator>
  );
};
export default DropdownIndicator;
