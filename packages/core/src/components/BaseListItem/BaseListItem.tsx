import React, { forwardRef, useMemo } from "react";
import cx from "classnames";
import styles from "./BaseListItem.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Text from "../Text/Text";
import { BaseListItemData, BaseListItemProps } from "./BaseListItem.types";
import { Tooltip } from "../Tooltip";
import { TextType } from "../Text";
import { renderSideElement } from "./utils";

const BaseListItem = forwardRef(
  <T extends Record<string, unknown>>(props: BaseListItemProps<T>, ref: React.ForwardedRef<HTMLLIElement>) => {
    const {
      size = "medium",
      selected,
      readOnly,
      highlighted,
      tooltipProps = {},
      className,
      dir = "ltr",
      id,
      role = "option",
      itemRenderer,
      itemProps,
      item = {} as BaseListItemData<T>
    } = props;

    const { label = "", disabled = false, startElement, endElement } = item;

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
    return (
      <Tooltip {...tooltipProps} content={tooltipProps?.content} position={dir === "rtl" ? "right" : "left"}>
        <li id={id} ref={ref} className={listItemClassNames} role={role} {...itemProps}>
          {itemRenderer ? (
            itemRenderer(item)
          ) : (
            <>
              {startElement && renderSideElement(startElement, disabled, textVariant)}
              <Text type={textVariant} color="inherit">
                {label}
              </Text>
              {endElement && (
                <div className={styles.endElement}>{renderSideElement(endElement, disabled, textVariant)}</div>
              )}
            </>
          )}
        </li>
      </Tooltip>
    );
  }
);

export default BaseListItem as <T extends Record<string, unknown>>(
  props: BaseListItemProps<T> & { ref?: React.ForwardedRef<HTMLLIElement> }
) => React.ReactElement;
