import React, { forwardRef, useMemo } from "react";
import cx from "classnames";
import styles from "./BaseListItem.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Text from "../Text/Text";
import { type BaseListItemData, type BaseListItemProps } from "./BaseListItem.types";
import { Tooltip } from "../Tooltip";
import { type TextType } from "../Text";
import { renderSideElement } from "./utils";

const BaseListItem = forwardRef(
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
      item = {} as BaseListItemData<Item>
    }: BaseListItemProps<Item>,
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
      <Tooltip {...tooltipProps} content={tooltipProps?.content} position={dir === "rtl" ? "right" : "left"}>
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

export default BaseListItem as <Item extends Record<string, unknown>>(
  props: BaseListItemProps<Item> & { ref?: React.Ref<HTMLElement> }
) => React.ReactElement;
