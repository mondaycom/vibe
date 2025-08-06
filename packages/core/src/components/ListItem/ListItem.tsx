import cx from "classnames";
import React, {
  type AriaAttributes,
  type AriaRole,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef
} from "react";
import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Text from "../Text/Text";
import { SIZES, SELECTION_KEYS } from "../../constants";
import { NOOP } from "../../utils/function-utils";
import { withStaticProps, type VibeComponentProps, type ElementContent } from "../../types";
import { useKeyEvent } from "../../hooks";
import useMergeRef from "../../hooks/useMergeRef";
import { ListContext } from "../List/utils/ListContext";
import { ListItemComponentType as ListItemComponentTypeEnum } from "./ListItemConstants";
import { type ListItemElement, type ListItemSize } from "./ListItem.types";
import styles from "./ListItem.module.scss";

export interface ListItemProps extends VibeComponentProps {
  /**
   * The HTML element used for the list item.
   */
  component?: ListItemElement;
  /**
   * The textual content inside the list item.
   */
  children?: ElementContent;
  /**
   * Callback fired when the item is clicked.
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent, id: string) => void;
  /**
   * Callback fired when the item is hovered.
   */
  onHover?: (event: React.MouseEvent | React.FocusEvent, id: string) => void;
  /**
   * If true, disables the item and prevents interactions.
   */
  disabled?: boolean;
  /**
   * If true, marks the item as selected.
   */
  selected?: boolean;
  /**
   * The size of the list item.
   */
  size?: ListItemSize;
  /**
   * The tab index of the list item for keyboard navigation.
   */
  tabIndex?: number;
  /**
   * Indicates the current state of the item in a set of items.
   */
  "aria-current"?: AriaAttributes["aria-current"];
  /**
   * The ARIA role of the list item.
   */
  role?: AriaRole;
}

const ListItem = forwardRef(
  (
    {
      className,
      id,
      component = "div",
      onClick = NOOP,
      onHover = NOOP,
      selected,
      disabled = false,
      size = SIZES.SMALL,
      tabIndex = 0,
      children,
      "aria-current": ariaCurrent,
      "data-testid": dataTestId,
      role = "option"
    }: ListItemProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const { updateFocusedItem } = useContext(ListContext);
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

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
        type="text2"
        aria-disabled={disabled}
        aria-selected={selected}
        onClick={componentOnClick}
        onMouseEnter={componentOnHover}
        onFocus={componentOnHover}
        role={role}
        tabIndex={tabIndex}
        aria-current={ariaCurrent}
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

interface ListItemStaticProps {
  sizes: typeof SIZES;
  components: typeof ListItemComponentTypeEnum;
}

export default withStaticProps<ListItemProps, ListItemStaticProps>(ListItem, {
  sizes: SIZES,
  components: ListItemComponentTypeEnum
});
