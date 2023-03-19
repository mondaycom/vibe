import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
/* eslint-disable jsx-a11y/role-supports-aria-props,jsx-a11y/no-noninteractive-element-interactions */
import React, { FC, forwardRef, ReactElement, useCallback, useRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import { SIZES } from "../../constants/sizes";
import { keyCodes } from "../../constants/keyCodes";
import VibeComponentProps from "../../types/VibeComponentProps";
import { NOOP } from "../../utils/function-utils";
import styles from "./ListItem.module.scss";
import { camelCase } from "lodash-es";

const BEM_BASE_CLASS = "list-item";

function BEMHelper(state: string) {
  return `${BEM_BASE_CLASS}--${state}`;
}

export interface ListItemProps extends VibeComponentProps {
  /**
   * The textual content of the list item
   */
  children?: string | ReactElement;
  /**
   * A class name to be passed to the list item wrapper
   */
  className?: string;
  /**
   * An id to be passed to the list item wrapper
   */
  id?: string;
  /**
   * A callback function which is being called when the item is being clicked
   * It will be called with the following params
   * event (DomEvent)
   * id (the id which is being passed)
   * onClick(event, id)
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent, id: string) => void;
  /**
   * A callback function which is being called when the item is being hovered
   * It will be called with the following params
   * event (DomEvent)
   * id (the id which is being passed)
   * onHover(event, id)
   */
  onHover?: (event: React.MouseEvent | React.FocusEvent, id: string) => void;
  /**
   * disabled state - callback will not be called and navigation will be skipped
   */
  disabled?: boolean;
  /**
   * Selected indication
   */
  selected?: boolean;
  /**
   * The size of the list item
   */
  size?: typeof SIZES[keyof typeof SIZES];
  /**
   Tabindex is used for keyboard navigation - if you want to skip "Tab navigation" please pass -1.
   */
  tabIndex?: number;
  "data-testid"?: string;
}

const ListItem: FC<ListItemProps> & { sizes?: typeof SIZES } = forwardRef(
  (
    {
      className,
      id,
      onClick = NOOP,
      onHover = NOOP,
      selected,
      disabled = false,
      size = SIZES.SMALL,
      tabIndex = 0,
      children,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const componentOnClick = useCallback(
      (event: React.MouseEvent) => {
        if (disabled) return;
        onClick(event, id);
      },
      [disabled, onClick, id]
    );

    const onKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (disabled) return;
        const KEYS = [keyCodes.ENTER, keyCodes.SPACE];
        if (KEYS.includes(event.key)) {
          onClick(event, id);
        }
      },
      [disabled, onClick, id]
    );

    const componentOnHover = useCallback(
      (event: React.MouseEvent | React.FocusEvent) => {
        if (disabled) return;
        onHover(event, id);
      },
      [disabled, onHover, id]
    );

    return (
      <div
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST_ITEM, id)}
        ref={mergedRef}
        className={cx(
          styles.listItem,
          "list-item",
          className,
          getStyle(styles, camelCase(size)),
          BEMHelper(size.toString()),
          {
            [styles.selected]: selected && !disabled,
            [BEMHelper("selected")]: selected && !disabled,
            [styles.disabled]: disabled,
            [BEMHelper("disabled")]: disabled
          }
        )}
        id={id}
        aria-disabled={disabled}
        onClick={componentOnClick}
        onKeyDown={onKeyDown}
        onMouseEnter={componentOnHover}
        onFocus={componentOnHover}
        role="listitem"
        tabIndex={tabIndex}
      >
        {children}
      </div>
    );
  }
);

Object.assign(ListItem, {
  sizes: SIZES,
  // Used by VirtualizedListItems
  displayName: "ListItem",
  defaultTestId: ComponentDefaultTestId.LIST_ITEM
});

export default ListItem;
