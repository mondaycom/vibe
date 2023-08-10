import cx from "classnames";
import React, {
  CSSProperties,
  FC,
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import useKeyEvent from "../../hooks/useKeyEvent";
import { VirtualizedListItems } from "./VirtualizedListItems/VirtualizedListItems";
import { keyCodes, UP_DOWN_ARROWS } from "../../constants/keyCodes";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ListItemProps } from "../ListItem/ListItem";
import { ListTitleProps } from "../ListTitle/ListTitle";
import { ListWrapperComponentType } from "./ListConstants";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./List.module.scss";

export interface ListProps extends VibeComponentProps {
  /**
   * the wrapping component to wrap the List Items [div, nav, ul, ol]
   */
  component?: ListWrapperComponentType;
  /**
   * ARIA label string to describe to list
   */
  ariaLabel?: string;
  /**
   * ARIA described by string to reference an id to describe by
   */
  ariaDescribedBy?: string;
  children?: ReactElement<ListItemProps | ListTitleProps> | ReactElement<ListItemProps | ListTitleProps>[];
  /**
   * Using virtualized list for rendering only the items which visible to the user in any given user (performance optimization)
   */
  renderOnlyVisibleItems?: boolean;
  style?: CSSProperties;
}

const List: FC<ListProps> = forwardRef(
  (
    {
      className,
      id,
      component = "ul",
      children,
      ariaLabel,
      ariaDescribedBy,
      renderOnlyVisibleItems = false,
      style,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const [focusIndex, setFocusIndex] = useState(0);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const Component = component;
    const childrenRefs = useRef([]);

    useEffect(() => {
      if (!id) {
        console.warn("List should have a valid id prop");
      }
    }, [id]);

    const getListItemIdByIndex = (index: number) => {
      return childrenRefs.current[index]?.id;
    };

    const updateFocusedItem = useCallback((index: number) => {
      setFocusIndex(index);
      componentRef?.current?.setAttribute("aria-activedescendant", getListItemIdByIndex(index));
    }, []);

    const onUpDownArrows = useCallback(
      (event: KeyboardEvent) => {
        if (renderOnlyVisibleItems) {
          return;
        }
        event.preventDefault();

        const isUpKey = event.key === keyCodes.UP_ARROW;
        const isDownKey = event.key === keyCodes.DOWN_ARROW;
        let overrideFocusIndex = undefined;

        if (isDownKey && focusIndex + 1 < childrenRefs.current.length) {
          overrideFocusIndex = focusIndex + 1;
        } else if (isUpKey && focusIndex > 0) {
          overrideFocusIndex = focusIndex - 1;
        }
        if (overrideFocusIndex !== undefined) {
          updateFocusedItem(overrideFocusIndex);
          childrenRefs.current[overrideFocusIndex].focus();
        }
      },
      [focusIndex, renderOnlyVisibleItems, updateFocusedItem]
    );

    useKeyEvent({
      keys: UP_DOWN_ARROWS,
      callback: onUpDownArrows,
      ref: componentRef
    });

    const overrideChildren = useMemo(() => {
      let override: ReactElement | ReactElement[] = Array.isArray(children) ? children : [children];
      if (renderOnlyVisibleItems) {
        override = <VirtualizedListItems>{override}</VirtualizedListItems>;
      } else {
        childrenRefs.current = childrenRefs.current.slice(0, override.length);
        override = React.Children.map(override, (child, index) => {
          if (!React.isValidElement(child)) {
            return child;
          }

          return React.cloneElement(child, {
            // @ts-ignore not sure how to deal with ref here
            ref: ref => (childrenRefs.current[index] = ref),
            tabIndex: focusIndex === index ? 0 : -1,
            updateFocusedItem,
            index,
            listId: id
          });
        });
      }

      return override;
    }, [children, focusIndex, id, updateFocusedItem, renderOnlyVisibleItems]);

    return (
      // @ts-ignore Component comes from string, so it couldn't have types
      <Component
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST, id)}
        ref={mergedRef}
        style={style}
        className={cx(styles.list, className)}
        id={id}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        tabIndex={-1}
        role="listbox"
      >
        {overrideChildren}
      </Component>
    );
  }
);

export default List;
