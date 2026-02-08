import React, { forwardRef, useCallback, useMemo } from "react";
import BaseItem from "../../../BaseItem/BaseItem";
import { type BaseItemData } from "../../../BaseItem";
import { type ListItemProps } from "./ListItem.types";

const ListItem = forwardRef(
  (
    {
      className,
      id,
      label,
      value,
      selected = false,
      disabled = false,
      readOnly = false,
      dir,
      role,
      startElement,
      endElement,
      tooltipProps,
      onClick,
      onHover,
      "data-testid": dataTestId
    }: ListItemProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const item: BaseItemData = useMemo(
      () => ({
        label,
        value: value ?? label,
        disabled,
        startElement,
        endElement,
        tooltipProps
      }),
      [label, value, disabled, startElement, endElement, tooltipProps]
    );

    const handleClick = useCallback(
      (event: React.MouseEvent | React.KeyboardEvent) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      },
      [disabled, onClick]
    );

    const handleHover = useCallback(
      (event: React.MouseEvent | React.FocusEvent) => {
        if (!disabled && onHover) {
          onHover(event);
        }
      },
      [disabled, onHover]
    );

    const itemProps = useMemo(
      () => ({
        onClick: handleClick,
        onMouseEnter: handleHover,
        onFocus: handleHover,
        "data-testid": dataTestId
      }),
      [handleClick, handleHover, dataTestId]
    );

    return (
      <BaseItem
        ref={ref}
        className={className}
        id={id}
        item={item}
        selected={selected}
        highlighted={false}
        readOnly={readOnly}
        dir={dir}
        role={role}
        itemProps={itemProps}
      />
    );
  }
);

export default ListItem;
