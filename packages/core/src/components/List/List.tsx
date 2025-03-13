import cx from "classnames";
import React, {
  AriaAttributes,
  AriaRole,
  CSSProperties,
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import useMergeRef from "../../hooks/useMergeRef";
import useKeyEvent from "../../hooks/useKeyEvent";
import { VirtualizedListItems } from "./VirtualizedListItems/VirtualizedListItems";
import { keyCodes, UP_DOWN_ARROWS } from "../../constants/keyCodes";
import { VibeComponent, withStaticProps, VibeComponentProps } from "../../types";
import { ListItemProps } from "../ListItem/ListItem";
import { ListTitleProps } from "../ListTitle/ListTitle";
import { ListWrapperComponentType as ListWrapperComponentTypeEnum } from "./ListConstants";
import { ListElement } from "./List.types";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { ListContext } from "./utils/ListContext";
import {
  getListItemComponentType,
  getListItemIdByIndex,
  getListItemIndexById,
  getNextListItemIndex,
  getPrevListItemIndex,
  isListItem,
  useListId
} from "./utils/ListUtils";
import styles from "./List.module.scss";

export interface ListProps extends VibeComponentProps {
  /**
   * the wrapping component to wrap the List Items [div, nav, ul, ol]
   */
  component?: ListElement;
  /**
   * ARIA label string to describe to list
   */
  ariaLabel?: string;
  /**
   * ARIA described by string to reference an id to describe by
   */
  ariaDescribedBy?: string;
  "aria-controls"?: AriaAttributes["aria-controls"];
  children?: ReactElement<ListItemProps | ListTitleProps> | ReactElement<ListItemProps | ListTitleProps>[];
  /**
   * Using virtualized list for rendering only the items which visible to the user in any given user (performance optimization)
   */
  renderOnlyVisibleItems?: boolean;
  style?: CSSProperties;
  /**
   * ARIA role for the list.
   */
  role?: AriaRole;
}

const List: VibeComponent<ListProps> & {
  components?: typeof ListWrapperComponentTypeEnum;
} = forwardRef(
  (
    {
      className,
      id,
      component = List.components.UL,
      children,
      ariaLabel,
      ariaDescribedBy,
      "aria-controls": ariaControls,
      renderOnlyVisibleItems = false,
      style,
      role = "listbox",
      "data-testid": dataTestId
    }: ListProps,
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const childrenRefs: React.MutableRefObject<HTMLElement[]> = useRef([]);

    const overrideId = useListId(id);
    const [focusIndex, setFocusIndex] = useState(0);
    const Component = component;

    const updateFocusedItem = useCallback((id: string) => {
      setFocusIndex(getListItemIndexById(childrenRefs, id));
      componentRef?.current?.setAttribute("aria-activedescendant", id);
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
          overrideFocusIndex = getNextListItemIndex(focusIndex, childrenRefs);
        } else if (isUpKey && focusIndex > 0) {
          overrideFocusIndex = getPrevListItemIndex(focusIndex, childrenRefs);
        }
        if (overrideFocusIndex !== undefined) {
          updateFocusedItem(getListItemIdByIndex(childrenRefs, overrideFocusIndex));
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

    useEffect(() => {
      const selectedItemIndex = childrenRefs.current.findIndex(
        child => child instanceof HTMLElement && isListItem(child) && child?.getAttribute("aria-selected") === "true"
      );
      if (selectedItemIndex !== -1) {
        updateFocusedItem(getListItemIdByIndex(childrenRefs, selectedItemIndex));
      } else {
        const firstFocusableIndex = childrenRefs.current.findIndex(child => isListItem(child));
        if (firstFocusableIndex !== -1) {
          updateFocusedItem(getListItemIdByIndex(childrenRefs, firstFocusableIndex));
        }
      }
    }, [updateFocusedItem]);

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
          const id = (child.props as ListItemProps).id || `${overrideId}-item-${index}`;
          const currentRef = childrenRefs.current[index];
          const isFocusableItem = currentRef === undefined || currentRef === null || isListItem(currentRef);
          return React.cloneElement(child, {
            // @ts-ignore not sure how to deal with ref here
            ref: ref => (childrenRefs.current[index] = ref),
            tabIndex: focusIndex === index && isFocusableItem ? 0 : -1,
            id,
            component: getListItemComponentType(component),
            role: (child.props as ListItemProps).role
          });
        });
      }

      return override;
    }, [children, component, focusIndex, overrideId, renderOnlyVisibleItems]);

    return (
      <ListContext.Provider value={{ updateFocusedItem }}>
        <Component
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST, id)}
          data-vibe={ComponentDefaultTestId.LIST}
          ref={mergedRef}
          style={style}
          className={cx(styles.list, className)}
          id={overrideId}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          aria-controls={ariaControls}
          tabIndex={-1}
          role={role}
        >
          {overrideChildren}
        </Component>
      </ListContext.Provider>
    );
  }
);

export default withStaticProps(List, {
  components: ListWrapperComponentTypeEnum
});
