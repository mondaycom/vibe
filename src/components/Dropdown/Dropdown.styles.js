/* eslint-disable no-param-reassign */
import { SIZES } from "../../constants/sizes";
import { getCSSVar } from "../../services/themes";

const getSizeInPx = size => {
  switch (size) {
    case SIZES.LARGE:
      return 48;
    case SIZES.MEDIUM:
      return 40;
    case SIZES.SMALL:
    default:
      return 32;
  }
};

const getSize = size => {
  const selectedSize = getSizeInPx(size);
  return { height: `${selectedSize}px` };
};

const getInnerSize = size => {
  const selectedSize = getSizeInPx(size) - 2;
  return { height: `${selectedSize}px` };
};

const getIndicatorBoxSize = size => {
  const selectedSize = getSizeInPx(size) - 8;
  return {
    height: `${selectedSize}px`,
    width: `${selectedSize}px`
  };
};

const getColor = () => {
  const color = getCSSVar("primary-text-color");
  const backgroundColor = getCSSVar("primary-background-color");
  return { color, backgroundColor };
};

const getFont = size => ({ fontSize: getSingleValueTextSize(size), lineHeight: getSingleValueTextSize(size) });

const disabledContainerStyle = isDisabled => {
  if (!isDisabled) return {};
  return {
    backgroundColor: getCSSVar("disabled-background-color"),
    color: getCSSVar("primary-text-color"),
    borderColor: "transparent",
    cursor: "not-allowed",
    ":active, :focus, :hover": {
      borderColor: "transparent",
      cursor: "not-allowed"
    },
    ":active, :focus": {
      pointerEvents: "none"
    }
  };
};

const getOptionStyle = (provided, { isDisabled, isSelected, isFocused }) => {
  delete provided[":active"];
  delete provided.width;
  const general = {
    display: "flex",
    alignContent: "center",
    borderRadius: getCSSVar("border-radius-small"),
    marginRight: "8px",
    marginLeft: "8px",
    paddingLeft: "8px",
    paddingRight: "8px",
    transition: `all 0.1s ${getCSSVar("expand-animation-timing")}`
  };
  if (isDisabled) {
    return {
      ...provided,
      ...general,
      backgroundColor: "transparent",
      color: getCSSVar("disabled-text-color"),
      cursor: "not-allowed"
    };
  }
  if (isSelected) {
    return {
      ...provided,
      ...general,
      color: getCSSVar("primary-text-color"),
      backgroundColor: getCSSVar("primary-selected-color"),
      cursor: "pointer"
    };
  }
  return {
    ...provided,
    ...general,
    color: getCSSVar("primary-text-color"),
    cursor: "pointer",
    ...(isFocused && {
      ":hover": {
        color: getCSSVar("primary-text-color"),
        backgroundColor: getCSSVar("primary-background-hover-color")
      }
    })
  };
};

const container =
  ({ size }) =>
  (provided, { isDisabled }) => {
    delete provided.pointerEvents;
    return {
      ...provided,
      ...getSize(size),
      minHeight: "30px",
      border: `1px solid ${getCSSVar("ui-border-color")}`,
      boxShadow: "none",
      borderRadius: getCSSVar("border-radius-small"),
      boxSizing: "border-box",
      transition: `border 0.1s ${getCSSVar("expand-animation-timing")}`,
      ":hover": {
        borderColor: getCSSVar("primary-text-color"),
        borderRadius: getCSSVar("border-radius-small")
      },
      ":active, :focus-within": {
        borderColor: getCSSVar("color-basic_blue")
      },
      ...disabledContainerStyle(isDisabled)
    };
  };

const control =
  ({ size }) =>
  (provided, { isDisabled }) => ({
    ...provided,
    ...getInnerSize(size),
    ...getColor(),
    minHeight: "30px",
    border: "0 solid transparent",
    borderRadius: getCSSVar("border-radius-small"),
    ...(!isDisabled && {
      ":hover": {
        borderColor: "transparent",
        borderRadius: getCSSVar("border-radius-small")
      }
    }),
    cursor: "pointer",
    ...disabledContainerStyle(isDisabled)
  });

const placeholder = () => provided => ({
  ...provided,
  ...getFont(),
  color: getCSSVar("secondary-text-color"),
  fontWeight: 400
});

const indicatorsContainer =
  ({ size }) =>
  (provided, { isDisabled }) => ({
    ...provided,
    ...getFont(),
    ...getColor(),
    borderRadius: getCSSVar("border-radius-small"),
    ...disabledContainerStyle(isDisabled),
    ...getInnerSize(size)
  });

const dropdownIndicator =
  ({ size }) =>
  (provided, { selectProps }) => {
    return {
      ...provided,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0px",
      ...getIndicatorBoxSize(size),
      margin: "4px 3px 4px 0px",
      backgroundColor: "transparent",
      borderRadius: getCSSVar("border-radius-small"),
      svg: {
        transition: `transform 0.1s ${getCSSVar("expand-animation-timing")}`,
        transform: selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)"
      },
      color: getCSSVar("icon-color"),
      ":hover, :active": {
        backgroundColor: getCSSVar("primary-background-hover-color"),
        color: getCSSVar("icon-color")
      }
    };
  };

const clearIndicator =
  ({ size }) =>
  () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: getCSSVar("icon-color"),
    backgroundColor: "transparent",
    borderRadius: getCSSVar("border-radius-small"),
    ...getIndicatorBoxSize(size),
    ":hover": {
      backgroundColor: getCSSVar("primary-background-hover-color")
    }
  });

const menuOpenOpacity = ({ menuIsOpen }) => {
  if (menuIsOpen) {
    return {
      opacity: 0.6
    };
  }
};

const singleValue =
  () =>
  (provided, { isDisabled, selectProps }) => ({
    ...provided,
    ...getFont(),
    ...getColor(),
    ...disabledContainerStyle(isDisabled),
    ...menuOpenOpacity(selectProps),
    display: "flex",
    alignItems: "center",
    height: "100%"
  });

function getSingleValueTextSize(size) {
  switch (size) {
    case SIZES.LARGE:
      return "16px";
    case SIZES.MEDIUM:
      return "16px";
    case SIZES.SMALL:
    default:
      return "14px";
  }
}

const input = () => provided => ({
  ...provided,
  ...getFont(),
  ...getColor(),
  display: "flex",
  alignItems: "center",
  textIndent: "-2px"
});

// 12px - because we have inner 4px
const getCenterContentStyle = rtl => {
  return {
    display: "flex",
    alignItems: "center",
    [`padding${rtl ? "Right" : "Left"}`]: "12px"
  };
};

const valueContainer =
  ({ size, rtl }) =>
  (provided, { isDisabled }) => ({
    ...provided,
    ...getCenterContentStyle(rtl),
    ...getFont(),
    ...getColor(),
    ...getInnerSize(size),
    ...disabledContainerStyle(isDisabled),
    borderRadius: getCSSVar("border-radius-small")
  });

const menu = () => provided => ({
  ...provided,
  ...getFont(),
  color: getCSSVar("primary-text-color"),
  backgroundColor: getCSSVar("dialog-background-color"),
  boxShadow: getCSSVar("box-shadow-small")
});

const option = () => (provided, state) => ({
  ...getFont(),
  ...getOptionStyle(provided, state)
});

const indicatorSeparator = () => () => ({
  display: "none"
});

const group = () => () => ({
  paddingBottom: 0,
  marginTop: "4px"
});

const groupHeading = () => () => ({
  height: "32px",
  fontSize: "14px",
  lineHeight: "22px",
  display: "flex",
  alignItems: "center",
  marginLeft: getCSSVar("spacing-medium"),
  color: getCSSVar("secondary-text-color")
});

export const getIndicatorSize = size => {
  switch (size) {
    case SIZES.LARGE:
      return "20px";
    case SIZES.MEDIUM:
      return "20px";
    case SIZES.SMALL:
    default:
      return "16px";
  }
};

export const customTheme = theme => ({
  ...theme,
  borderRadius: getCSSVar("border-radius-small"),
  colors: {
    ...theme.colors,
    primary25: getCSSVar("primary-background-hover-color")
  }
});

export default data => ({
  container: container(data),
  control: control(data),
  placeholder: placeholder(data),
  indicatorsContainer: indicatorsContainer(data),
  dropdownIndicator: dropdownIndicator(data),
  clearIndicator: clearIndicator(data),
  singleValue: singleValue(data),
  input: input(data),
  valueContainer: valueContainer(data),
  menu: menu(data),
  option: option(data),
  indicatorSeparator: indicatorSeparator(data),
  group: group(data),
  groupHeading: groupHeading(data)
});
