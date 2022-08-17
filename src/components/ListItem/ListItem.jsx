import { camelCase } from "lodash";
import cx from "classnames";
/* eslint-disable jsx-a11y/role-supports-aria-props,jsx-a11y/no-noninteractive-element-interactions */
import React, { forwardRef, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import useMergeRefs from "../../hooks/useMergeRefs";
import { SIZES } from "../../constants/sizes";
import { keyCodes } from "../../constants/KeyCodes";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./ListItem.module.scss";

const CSS_BASE_CLASS = "list-item";

const ListItem = forwardRef(
  ({ className, id, onClick, selected, disabled, size, tabIndex, children, "data-testid": dataTestId }, ref) => {
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
        className={cx(
          styles.listItem,
          CSS_BASE_CLASS,
          className,
          styles[`${camelCase("list-item--" + size)}`],
          `list-item--${size}`,
          {
            [styles.listItemSelected]: selected && !disabled,
            ["list-item--selected"]: selected && !disabled,
            [styles.listItemDisabled]: disabled,
            ["list-item--disabled"]: disabled
          }
        )}
        id={id}
        aria-disabled={disabled}
        onClick={componentOnClick}
        onKeyDown={onKeyDown}
        role="listitem"
        tabIndex={tabIndex}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.LIST_ITEM, id)}
      >
        {children}
      </div>
    );
  }
);

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
