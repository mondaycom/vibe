import React, { forwardRef } from "react";
import cx from "classnames";
import styles from "./BaseListItem.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Text from "../Text/Text";
import { BaseListItemProps } from "./BaseListItem.types";
import { VibeComponent } from "../../types";
import { Tooltip } from "../Tooltip";
import { TextType } from "../Text";
import { renderSideElement } from "./utils";

const BaseListItem: VibeComponent<BaseListItemProps, HTMLLIElement> = forwardRef(
  (
    {
      label,
      size = "medium",
      selected,
      disabled,
      startElement,
      endElement,
      highlighted,
      tooltipProps = {},
      className,
      rtl = false,
      id,
      role = "option",
      ...rest
    }: BaseListItemProps,
    ref
  ) => {
    const listItemClassNames = cx(
      styles.wrapper,
      {
        [styles.selected]: selected,
        [styles.disabled]: disabled,
        [styles.highlighted]: highlighted
      },
      getStyle(styles, size),
      className
    );

    const textVariant: TextType = size === "small" ? "text2" : "text1";

    return (
      <Tooltip {...tooltipProps} content={tooltipProps?.content} position={rtl ? "left" : "right"}>
        <li id={id} ref={ref} className={listItemClassNames} role={role} {...rest}>
          {startElement && renderSideElement(startElement, disabled, textVariant)}
          <Text type={textVariant} color="inherit">
            {label}
          </Text>
          {endElement && (
            <div className={styles.endElement}>{renderSideElement(endElement, disabled, textVariant)}</div>
          )}
        </li>
      </Tooltip>
    );
  }
);

export default BaseListItem;
