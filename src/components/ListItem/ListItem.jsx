/* eslint-disable jsx-a11y/role-supports-aria-props,jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef, forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./ListItem.scss";
import { SIZES } from "../../constants/sizes";
import { keyCodes } from "../../constants/KeyCodes";

const BEM_BASE_CLASS = "list-item";

function BEMHelper(state) {
  return `${BEM_BASE_CLASS}--${state}`;
}

const ListItem = forwardRef(({ className, id, onClick, selected, disabled, size, tabIndex, children }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const componentOnClick = useCallback(
    event => {
      if (disabled) return;
      onClick(event, id);
    },
    [disabled, onClick, id]
  );

  const onKeyDown = useCallback(
    event => {
      if (disabled) return;
      const KEYS = [keyCodes.ENTER, keyCodes.SPACE];
      if (KEYS.includes(event.key)) {
        onClick(event, id);
      }
    },
    [disabled, onClick, id]
  );

  return (
    <div
      ref={mergedRef}
      className={cx("list-item", className, BEMHelper(size), {
        [BEMHelper("selected")]: selected && !disabled,
        [BEMHelper("disabled")]: disabled
      })}
      id={id}
      aria-disabled={disabled}
      onClick={componentOnClick}
      onKeyDown={onKeyDown}
      role="listitem"
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );
});

ListItem.sizes = SIZES;

ListItem.propTypes = {
  /**
   * The textual content of the list item
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * A class name to be passed to the list item wrapper
   */
  className: PropTypes.string,
  /**
   * An id to be passed to the list item wrapper
   */
  id: PropTypes.string,
  /**
   * A callback function which is being called when the item is being clicked
   * It will be called with the following params
   * event (DomEvent)
   * id (the id which is being passed)
   * onClick(event, id)
   */
  onClick: PropTypes.func,
  /**
   * disabled state - callback will not be called and navigation will be skipped
   */
  disabled: PropTypes.bool,
  /**
   * Selected indication
   */
  selected: PropTypes.bool,
  /**
   * The size of the list item
   */
  size: PropTypes.oneOf([ListItem.sizes.SMALL, ListItem.sizes.MEDIUM, ListItem.sizes.LARGE]),
  /**
   Tabindex is used for keyboard navigation - if you want to skip "Tab navigation" please pass -1.
   */
  tabIndex: PropTypes.number
};
ListItem.defaultProps = {
  className: "",
  id: "",
  onClick: NOOP,
  disabled: false,
  selected: false,
  size: ListItem.sizes.SMALL,
  children: undefined,
  tabIndex: 0
};

export default ListItem;
