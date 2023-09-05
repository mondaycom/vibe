/* eslint-disable jsx-a11y/role-supports-aria-props,jsx-a11y/no-noninteractive-element-interactions */
import cx from "classnames";
import React, { AriaAttributes, forwardRef, ReactElement, useCallback, useContext, useEffect, useRef } from "react";
import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Text from "../Text/Text";
import { SIZES, SELECTION_KEYS } from "../../constants";
import { NOOP } from "../../utils/function-utils";
import { withStaticProps, VibeComponentProps, VibeComponent } from "../../types";
import { useKeyEvent, useMergeRefs } from "../../hooks";
import { ListContext } from "../List/utils/ListContext";
import { ListItemComponentType } from "./ListItemConstants";
import styles from "./ListItem.module.scss";

export type ListItemProps = VibeComponentProps &
  AriaAttributes & {
    /**
     * the ListItem component [li, div, a]
     */
    component?: ListItemComponentType;
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
  };

const ListItem: VibeComponent<ListItemProps> & { sizes?: typeof SIZES; components?: typeof ListItemComponentType } =
  forwardRef(
    (
      {
        className,
        id,
        component = ListItem.components.DIV,
        onClick = NOOP,
        onHover = NOOP,
        selected,
        disabled = false,
        size = SIZES.SMALL,
        tabIndex = 0,
        children,
        "data-testid": dataTestId,
        ...restAriaAttributes
      },
      ref
    ) => {
      const { updateFocusedItem } = useContext(ListContext);
      const componentRef = useRef(null);
      const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

      useEffect(() => {
        if (selected) {
          updateFocusedItem?.(id);
        }
      }, [selected, id, updateFocusedItem]);

      const componentOnClick = useCallback(
        (event: React.MouseEvent | React.KeyboardEvent) => {
          if (disabled) return;
          onClick(event, id);
        },
        [disabled, onClick, id]
      );

      useKeyEvent({
        keys: SELECTION_KEYS,
        ref: componentRef,
        callback: componentOnClick
      });

      const componentOnHover = useCallback(
        (event: React.MouseEvent | React.FocusEvent) => {
          if (disabled) return;
          onHover(event, id);
        },
        [disabled, onHover, id]
      );

      return (
        <Text
          element={component}
          data-testid={dataTestId || id}
          ref={mergedRef}
          className={cx(styles.listItem, className, getStyle(styles, camelCase(size)), {
            [styles.selected]: selected && !disabled,
            [styles.disabled]: disabled
          })}
          id={id}
          type={Text.types.TEXT2}
          aria-disabled={disabled}
          aria-selected={selected}
          onClick={componentOnClick}
          onMouseEnter={componentOnHover}
          onFocus={componentOnHover}
          role="option"
          tabIndex={tabIndex}
          {...restAriaAttributes}
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
  sizes: SIZES,
  components: ListItemComponentType
});
