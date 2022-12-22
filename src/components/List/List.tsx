import React, { CSSProperties, FC, forwardRef, ReactElement, useCallback, useMemo, useRef, useState } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { VirtualizedListItems } from "./VirtualizedListItems/VirtualizedListItems";
import { keyCodes } from "../../constants/keyCodes";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ListItemProps } from "../ListItem/ListItem";
import { ListTitleProps } from "../ListTitle/ListTitle";
import { ListWrapperComponentType } from "./ListConstants";
import "./List.scss";

export interface ListProps extends VibeComponentProps {
  /**
   * the wrapping component to wrap the List Items [div, nav, ul, ol]
   */
  component?: ListWrapperComponentType;
  // component?: string;
  /**
   * remove the side padding
   */
  dense?: boolean;
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
      dense = false,
      ariaLabel,
      ariaDescribedBy,
      renderOnlyVisibleItems = false,
      style
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const [focusIndex, setFocusIndex] = useState(0);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const Component = component;
    const childrenRefs = useRef([]);
    const onKeyDown = useCallback(
      (event: KeyboardEvent) => {
        const isUpKey = event.keyCode === keyCodes.UP_ARROW;
        const isDownKey = event.keyCode === keyCodes.DOWN_ARROW;
        let overrideFocusIndex = undefined;
        if (isUpKey || isDownKey) {
          if (isDownKey && focusIndex + 1 < childrenRefs.current.length) {
            overrideFocusIndex = focusIndex + 1;
          } else if (isUpKey && focusIndex > 0) {
            overrideFocusIndex = focusIndex - 1;
          }
          event.preventDefault();
          if (overrideFocusIndex !== undefined) {
            setFocusIndex(overrideFocusIndex);
            childrenRefs.current[overrideFocusIndex].focus();
          }
        }
      },
      [focusIndex]
    );
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
          return typeof child === "string"
            ? child
            : React.cloneElement(child, {
                // @ts-ignore not sure how to deal with ref here
                ref: ref => (childrenRefs.current[index] = ref),
                tabIndex: focusIndex === index ? 0 : -1
              });
        });
      }

      return override;
    }, [children, focusIndex, renderOnlyVisibleItems]);

    return (
      // @ts-ignore Component comes from string, so it couldn't have types
      <Component
        ref={mergedRef}
        style={style}
        onKeyDown={!renderOnlyVisibleItems ? onKeyDown : undefined}
        className={cx("monday-style-list", className, {
          "monday-style-list--dense": dense,
          "monday-style-list-container": renderOnlyVisibleItems
        })}
        id={id}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        tabIndex={-1}
      >
        {overrideChildren}
      </Component>
    );
  }
);

export default List;
