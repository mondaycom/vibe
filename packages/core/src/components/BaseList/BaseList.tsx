import React, { forwardRef, type ReactElement, useMemo, useRef, useState } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import useIsomorphicLayoutEffect from "../../hooks/ssr/useIsomorphicLayoutEffect";
import { type BaseListProps } from "./BaseList.types";
import { BaseListContext, type BaseListContextProps } from "./context/BaseListContext";
import { useBaseListFocus } from "./hooks/useBaseListFocus";
import { useBaseListKeyboard } from "./hooks/useBaseListKeyboard";
import {
  generateListId,
  getChildRole,
  getItemComponentType,
  isListItem,
  mergeStyleWithMaxHeight
} from "./utils/BaseListUtils";
import styles from "./BaseList.module.scss";

const BaseList = forwardRef(
  (
    {
      className,
      id,
      as = "ul",
      children,
      ariaLabel,
      ariaDescribedBy,
      "aria-controls": ariaControls,
      role = "listbox",
      size = "medium",
      maxHeight,
      tabIndex = 0,
      focusOnMount = false,
      defaultFocusIndex = 0,
      focusIndex: controlledFocusIndex,
      onFocusChange,
      style,
      disabled = false,
      "data-testid": dataTestId,
      ...rest
    }: BaseListProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const componentRef = useRef<HTMLElement>(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const [listId, setListId] = useState<string | undefined>(undefined);
    useIsomorphicLayoutEffect(() => {
      setListId(id || generateListId());
    }, [id]);

    const Component = as as React.ElementType;

    const { focusIndex, updateFocusedItem, registerItem, childrenRefs } = useBaseListFocus({
      controlledFocusIndex,
      defaultFocusIndex,
      onFocusChange,
      listId,
      componentRef,
      disabled
    });

    useBaseListKeyboard({
      focusIndex,
      childrenRefs,
      listId,
      updateFocusedItem,
      componentRef,
      disabled
    });

    useIsomorphicLayoutEffect(() => {
      if (focusOnMount && componentRef.current) {
        requestAnimationFrame(() => {
          componentRef.current?.focus();
        });
      }
    }, [focusOnMount]);

    const enhancedChildren = useMemo(() => {
      const childArray = React.Children.toArray(children) as ReactElement[];
      childrenRefs.current = childrenRefs.current.slice(0, childArray.length);

      return childArray.map((child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        const childId = (child.props as { id?: string }).id || `${listId}-item-${index}`;
        const currentRef = childrenRefs.current[index];
        const isFocusableItem = currentRef === undefined || currentRef === null || isListItem(currentRef);
        const isDOMElement = typeof child.type === "string";

        const existingRole = (child.props as { role?: string }).role;
        const childRole = existingRole || (!isDOMElement ? getChildRole(role) : undefined);

        const baseProps = {
          ref: (itemRef: HTMLElement | null) => {
            childrenRefs.current[index] = itemRef;
          },
          id: childId
        };

        if (isDOMElement) {
          const domProps: Record<string, unknown> = {
            ...baseProps,
            tabIndex: focusIndex === index && isFocusableItem ? 0 : -1
          };
          if (childRole) {
            domProps.role = childRole;
          }
          return React.cloneElement(child, domProps);
        }

        return React.cloneElement(child, {
          ...baseProps,
          index,
          component: getItemComponentType(as),
          size,
          highlighted: focusIndex === index && isFocusableItem,
          role: childRole,
          itemProps: {
            ...(child.props as { itemProps?: Record<string, unknown> }).itemProps,
            tabIndex: focusIndex === index && isFocusableItem ? 0 : -1
          }
        } as Record<string, unknown>);
      });
    }, [children, as, focusIndex, listId, role, size, childrenRefs]);

    const contextValue: BaseListContextProps = useMemo(
      () => ({
        activeItemIndex: focusIndex,
        updateFocusedItem,
        registerItem,
        size
      }),
      [focusIndex, updateFocusedItem, registerItem, size]
    );

    const listStyle = useMemo(() => mergeStyleWithMaxHeight(style, maxHeight), [maxHeight, style]);

    return (
      <BaseListContext.Provider value={contextValue}>
        <Component
          ref={mergedRef}
          id={listId}
          className={cx(styles.baseList, { [styles.scrollable]: maxHeight !== undefined }, className)}
          style={listStyle}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          aria-controls={ariaControls}
          aria-disabled={disabled || undefined}
          role={role}
          tabIndex={disabled ? -1 : tabIndex}
          data-testid={dataTestId}
          {...rest}
        >
          {enhancedChildren}
        </Component>
      </BaseListContext.Provider>
    );
  }
);

export default BaseList;
