import React, { forwardRef, useEffect, useMemo, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Text from "../Text/Text";
import { type BaseItemData, type BaseItemProps } from "./BaseItem.types";
import { Tooltip } from "../Tooltip";
import { type TextType } from "../Text";
import { useListItemProps } from "./hooks/useListItemProps";
import { renderSideElement } from "./utils";
import styles from "./BaseItem.module.scss";

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
      itemProps = {},
      item = {} as BaseItemData<Item>
    }: BaseItemProps<Item>,
    ref: React.Ref<HTMLElement>
  ) => {
    const internalRef = useRef<HTMLElement>(null);
    const mergedRef = useMergeRef(ref, internalRef);

    const listItemProps = useListItemProps({ id, component, size, highlighted, role, itemProps });

    useEffect(() => {
      listItemProps.refCallback?.(internalRef.current);
    }, [listItemProps]);

    const { label = "", disabled = false, startElement, endElement, tooltipProps = {} } = item;

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
          {...listItemProps.itemProps}
        >
          {itemRenderer ? (
            itemRenderer(item)
          ) : (
            <>
              {startElement && renderSideElement(startElement, disabled, textVariant)}
              <Text type={textVariant} color="inherit" tooltipProps={{ containerSelector: "body" }}>
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
