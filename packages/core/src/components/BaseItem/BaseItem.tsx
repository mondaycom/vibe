import React, { forwardRef, useEffect, useMemo, useRef } from "react";
import cx from "classnames";
import { useMergeRef, getStyle } from "@vibe/shared";

import { Text, type TextType } from "@vibe/typography";
import { type BaseItemData, type BaseItemProps } from "./BaseItem.types";
import { useListItemProps } from "./hooks/useListItemProps";
import { Tooltip } from "@vibe/tooltip";
import { renderSideElement } from "./utils";
import styles from "./BaseItem.module.scss";

const EMPTY_ITEM_PROPS: Record<string, unknown> = Object.freeze({});
const EMPTY_TOOLTIP_PROPS = Object.freeze({}) as NonNullable<BaseItemData["tooltipProps"]>;
const EMPTY_ITEM = Object.freeze({}) as BaseItemData;
const TEXT_TOOLTIP_PROPS = Object.freeze({ containerSelector: "body" }) as { containerSelector: string };

const BaseItem = forwardRef(
  <Item extends Record<string, unknown>>(
    {
      className,
      id,
      component = "li",
      size = "medium",
      selected = false,
      readOnly = false,
      highlighted = false,
      role,
      index: _index,
      dir = "auto",
      itemRenderer,
      itemProps = EMPTY_ITEM_PROPS,
      item = EMPTY_ITEM as BaseItemData<Item>
    }: BaseItemProps<Item>,
    ref: React.Ref<HTMLElement>
  ) => {
    const internalRef = useRef<HTMLElement>(null);
    const mergedRef = useMergeRef(ref, internalRef);

    const listItemProps = useListItemProps({ id, component, size, highlighted, role, itemProps });

    useEffect(() => {
      listItemProps.refCallback?.(internalRef.current);
    }, [listItemProps]);

    const { label = "", disabled = false, startElement, endElement, tooltipProps = EMPTY_TOOLTIP_PROPS } = item;

    const listItemClassNames = useMemo(
      () =>
        cx(
          styles.wrapper,
          {
            [styles.selected]: selected,
            [styles.disabled]: disabled,
            [styles.highlighted]: listItemProps.highlighted,
            [styles.readOnly]: readOnly
          },
          getStyle(styles, listItemProps.size),
          className
        ),
      [selected, disabled, listItemProps.highlighted, readOnly, listItemProps.size, className]
    );

    const textVariant: TextType = listItemProps.size === "small" ? "text2" : "text1";
    const Element = listItemProps.component as React.ElementType;

    return (
      <Tooltip
        {...tooltipProps}
        content={tooltipProps?.content}
        position={dir === "rtl" ? "right" : "left"}
        containerSelector="body"
      >
        <Element
          id={listItemProps.id}
          ref={mergedRef}
          className={listItemClassNames}
          role={listItemProps.role}
          aria-selected={selected}
          aria-disabled={disabled || undefined}
          {...listItemProps.itemProps}
        >
          {itemRenderer ? (
            itemRenderer(item)
          ) : (
            <>
              {startElement && renderSideElement(startElement, disabled, textVariant)}
              <Text type={textVariant} color="inherit" tooltipProps={TEXT_TOOLTIP_PROPS}>
                {label}
              </Text>
              {endElement && (
                <div className={styles.endElement}>{renderSideElement(endElement, disabled, textVariant)}</div>
              )}
            </>
          )}
        </Element>
      </Tooltip>
    );
  }
);

export default BaseItem as <Item extends Record<string, unknown>>(
  props: BaseItemProps<Item> & { ref?: React.Ref<HTMLElement> }
) => React.ReactElement;
