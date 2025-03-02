import React, { forwardRef, useMemo } from "react";
import cx from "classnames";
import styles from "./BaseListItem.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import Text from "../Text/Text";
import { BaseListItemProps } from "./BaseListItem.types";
import { VibeComponent } from "../../types";
import { Tooltip } from "../Tooltip";
import { TextType } from "../Text";
import { renderSideElement } from "./utils";

const BaseListItem: VibeComponent<BaseListItemProps, HTMLLIElement> = forwardRef((props: BaseListItemProps, ref) => {
  const {
    label,
    size = "medium",
    selected,
    disabled,
    readOnly,
    startElement,
    endElement,
    highlighted,
    tooltipProps = {},
    className,
    dir = "ltr",
    id,
    role = "option",
    optionRenderer,
    ...rest
  } = props;

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
      <li id={id} ref={ref} className={listItemClassNames} role={role} {...rest}>
        {optionRenderer ? (
          optionRenderer({ ...props })
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
});

export default BaseListItem;
