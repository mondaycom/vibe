import React, { forwardRef, type ReactElement, useMemo, useRef, useState } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import useIsomorphicLayoutEffect from "../../hooks/ssr/useIsomorphicLayoutEffect";
import { type BaseListProps } from "./BaseList.types";
import {
  BaseListProvider,
  BaseListItemProvider,
  type BaseListContextProps,
  type BaseListItemContextProps
} from "./context/BaseListContext";
import { useBaseListFocus } from "./hooks/useBaseListFocus";
import { useBaseListKeyboard } from "./hooks/useBaseListKeyboard";
import { generateListId, getChildRole, getItemComponentType, getItemId, isListItem } from "./utils/baseListUtils";
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
      focusOnMount = false,
      defaultFocusIndex = 0,
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

    const { focusIndex, activeDescendantId, updateFocusedItem, registerItem, childrenRefs } = useBaseListFocus({
      defaultFocusIndex,
      onFocusChange,
      listId,
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

        const childId = getItemId(listId, index, (child.props as { id?: string }).id);
        const currentRef = childrenRefs.current[index];
        const isFocusableItem = currentRef === undefined || currentRef === null || isListItem(currentRef);
        const isDOMElement = typeof child.type === "string";

        const existingRole = (child.props as { role?: string }).role;
        const childRole = existingRole || (!isDOMElement ? getChildRole(role) : undefined);

        const refCallback = (itemRef: HTMLElement | null) => {
          childrenRefs.current[index] = itemRef;
        };

        const itemContextValue: BaseListItemContextProps = {
          index,
          id: childId,
          highlighted: focusIndex === index && isFocusableItem,
          tabIndex: focusIndex === index && isFocusableItem ? 0 : -1,
          component: getItemComponentType(as),
          size,
          role: childRole,
          refCallback
        };

        return (
          <BaseListItemProvider key={childId} value={itemContextValue}>
            {child}
          </BaseListItemProvider>
        );
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

    const listStyle = useMemo(
      () =>
        maxHeight
          ? ({
              ...style,
              "--baselist-max-height": typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
            } as React.CSSProperties)
          : style,
      [maxHeight, style]
    );

    return (
      <BaseListProvider value={contextValue}>
        <Component
          ref={mergedRef}
          id={listId}
          className={cx(styles.baseList, className)}
          style={listStyle}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          aria-controls={ariaControls}
          aria-activedescendant={activeDescendantId}
          aria-disabled={disabled || undefined}
          role={role}
          tabIndex={-1}
          data-testid={dataTestId}
          {...rest}
        >
          {enhancedChildren}
        </Component>
      </BaseListProvider>
    );
  }
);

export default BaseList;
