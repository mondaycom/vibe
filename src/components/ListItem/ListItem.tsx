/* eslint-disable jsx-a11y/role-supports-aria-props,jsx-a11y/no-noninteractive-element-interactions */
import cx from "classnames";
import React, { FC, forwardRef, ReactElement, useCallback, useEffect, useRef } from "react";
import { camelCase } from "lodash-es";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Text from "../Text/Text";
import { SIZES, SELECTION_KEYS } from "../../constants";
import { NOOP } from "../../utils/function-utils";
import { withStaticProps, VibeComponentProps } from "../../types";
import { useKeyEvent, useMergeRefs } from "../../hooks";
import styles from "./ListItem.module.scss";

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
  /**
   * A callback function which is being called when the item is being focused: by keyboard navigation or by mouse hover
   * @param ListItem index
   */
  updateFocusedItem?: (index: number) => void;
  /**
   * The id of the list which the item belongs to
   */
  listId?: string;
  /**
   * The index of the item in the list
   */
  index?: number;
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
      listId,
      index,
      updateFocusedItem,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const overrideId = id || `${listId}-item-${index}`;
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    useEffect(() => {
      if (selected) {
        updateFocusedItem?.(index);
      }
    }, [updateFocusedItem, selected, index]);

    const componentOnClick = useCallback(
      (event: React.MouseEvent | React.KeyboardEvent) => {
        if (disabled) return;
        onClick(event, overrideId);
      },
      [disabled, onClick, overrideId]
    );

    useKeyEvent({
      keys: SELECTION_KEYS,
      ref: componentRef,
      callback: componentOnClick
    });

    const componentOnHover = useCallback(
      (event: React.MouseEvent | React.FocusEvent) => {
        if (disabled) return;
        onHover(event, overrideId);
      },
      [disabled, onHover, overrideId]
    );

    return (
      <Text
        element="li"
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST_ITEM, id)}
        ref={mergedRef}
        className={cx(styles.listItem, className, getStyle(styles, camelCase(size)), {
          [styles.selected]: selected && !disabled,
          [styles.disabled]: disabled
        })}
        id={overrideId}
        key={overrideId}
        size="small"
        aria-disabled={disabled}
        aria-selected={selected}
        onClick={componentOnClick}
        onMouseEnter={componentOnHover}
        onFocus={componentOnHover}
        role="option"
        tabIndex={tabIndex}
      >
        {children}
      </Text>
    );
  }
);

Object.assign(ListItem, {
  // Used by VirtualizedListItems
  displayName: "ListItem"
});

export default withStaticProps(ListItem, {
  sizes: SIZES
});
