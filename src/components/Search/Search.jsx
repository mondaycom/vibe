import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Search.scss";
import InputField from "../TextField/InputField";

const NOOP = () => {};

const TYPE_CLASSES = {
  round: "search_component--round",
  underline: "input-component__input--only-underline",
  square: ""
};

function getType(type) {
  return TYPE_CLASSES[type] || "";
}
const ICON_NAMES = {
  primary: "Search",
  secondary: "Clear Search"
};

export const SearchComponent = ({
  secondaryIconName,
  iconName,
  onChange,
  autoFocus,
  underline,
  value,
  placeholder,
  disabled,
  debounceRate,
  onBlur,
  onFocus,
  wrapperClassName,
  setRef,
  autoComplete,
  size,
  type,
  className,
  id,
  validation,
  inputAriaLabel,
  iconNames,
  inputType
}) => {
  return (
    <InputField
      id={id}
      iconName={iconName}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      underline={underline}
      placeholder={placeholder}
      disabled={disabled}
      debounceRate={debounceRate}
      className={classNames(className, "search_component", getType(type))}
      secondaryIconName={secondaryIconName}
      wrapperClassName={classNames(
        wrapperClassName,
        "search_component_wrapper"
      )}
      onBlur={onBlur}
      onFocus={onFocus}
      setRef={setRef}
      autoComplete={autoComplete}
      size={size}
      clearOnIconClick
      validation={validation}
      inputAriaLabel={inputAriaLabel}
      iconsNames={iconNames}
      type={inputType}
    />
  );
};

SearchComponent.propTypes = {
  secondaryIconName: PropTypes.string,
  iconName: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  underline: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  debounceRate: PropTypes.number,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  wrapperClassName: PropTypes.string,
  setRef: PropTypes.func,
  autoComplete: PropTypes.bool,
  size: PropTypes.oneOf(["s", "md", "l"]),
  type: PropTypes.oneOf(["square", "round", "underline"]),
  className: PropTypes.string,
  id: PropTypes.string,
  validation: PropTypes.shape({
    status: PropTypes.string,
    text: PropTypes.string
  }),
  inputAriaLabel: PropTypes.string,
  iconNames: PropTypes.shape({
    layout: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string
  }),
  inputType: PropTypes.string
};

SearchComponent.defaultProps = {
  secondaryIconName: "icon-dapulse-close",
  iconName: "icon-v2-search",
  onChange: NOOP,
  autoFocus: false,
  underline: false,
  value: "",
  placeholder: "",
  disabled: false,
  debounceRate: 200,
  onBlur: NOOP,
  onFocus: NOOP,
  wrapperClassName: "",
  setRef: NOOP,
  autoComplete: "off",
  size: "md",
  type: "square",
  className: "",
  id: "search",
  validation: null,
  inputAriaLabel: "",
  iconNames: ICON_NAMES,
  inputType: "search"
};

export default SearchComponent;
