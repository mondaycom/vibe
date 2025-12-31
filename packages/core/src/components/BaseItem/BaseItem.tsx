import React, { forwardRef, useMemo } from "react";
import cx from "classnames";
import styles from "./BaseItem.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { Text } from "@vibe/typography";
import { type BaseItemData, type BaseItemProps } from "./BaseItem.types";
import { Tooltip } from "@vibe/tooltip";
import { type TextType } from "@vibe/typography";
import { renderSideElement } from "./utils";

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
    const { label = "", disabled = false, startElement, endElement, tooltipProps = {} } = item;
    const listItemClassNames = useMemo(
      () =>
        cx(
          styles.wrapper,
          {
            [styles.selected]: selected,
            [styles.disabled]: disabled,
            [styles.highlighted]: highlighted,
            [styles.readOnly]: readOnly
          },
          getStyle(styles, size),
          className
        ),
      [selected, disabled, highlighted, readOnly, size, className]
    );

    const textVariant: TextType = size === "small" ? "text2" : "text1";
    const Element = component as React.ElementType;

    return (
      <Tooltip
        {...tooltipProps}
        content={tooltipProps?.content}
        position={dir === "rtl" ? "right" : "left"}
        containerSelector="body"
      >
        <Element id={id} ref={ref} className={listItemClassNames} role={role} {...itemProps} aria-selected={selected}>
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
