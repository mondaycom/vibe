/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events */
import React, { useRef, forwardRef } from "react";
import NOOP from "lodash/noop";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import Icon from "../../Icon/Icon";
import "./Tab.scss";

const Tab = forwardRef(
  ({ className, id, value, disabled, active, focus, onClick, icon, iconType, iconSide, children }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    function renderIconAndChildren() {
      if (!icon) return children;

      const iconElement = (
        <Icon
          clickable={false}
          ariaHidden={true}
          iconType={iconType}
          icon={icon}
          className={cx("tab-icon", iconSide)}
          iconSize={18}
          ignoreFocusStyle
        />
      );

      if (iconSide === "left") {
        return [iconElement, ...children];
      }

      return [...children, iconElement];
    }
    return (
      <li
        ref={mergedRef}
        key={id}
        className={cx("tab--wrapper", className, {
          active,
          disabled,
          "tab-focus-visible-inset": focus
        })}
        id={id}
        role="tab"
        aria-selected={active}
        aria-disabled={disabled}
      >
        <a className="tab-inner" onClick={() => !disabled && onClick(value)}>
          {renderIconAndChildren()}
        </a>
      </li>
    );
  }
);

Tab.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  focus: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconType: PropTypes.oneOf([Icon.type.SVG, Icon.type.ICON_FONT]),
  iconSide: PropTypes.string,
  onClick: PropTypes.func
};
Tab.defaultProps = {
  className: "",
  id: "",
  value: 0,
  disabled: false,
  active: false,
  focus: false,
  icon: null,
  iconType: undefined,
  iconSide: "left",
  onClick: NOOP
};

export default Tab;
