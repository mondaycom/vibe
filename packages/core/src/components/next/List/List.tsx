import React, { forwardRef } from "react";
import cx from "classnames";
import BaseList from "../../BaseList/BaseList";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { type ListProps } from "./List.types";
import styles from "./List.module.scss";

const List = forwardRef(
  (
    {
      className,
      id,
      as = "ul",
      children,
      ariaLabel,
      ariaDescribedBy,
      role = "listbox",
      size = "medium",
      maxHeight,
      focusOnMount = false,
      defaultFocusIndex = 0,
      onFocusChange,
      disabled = false,
      style,
      "data-testid": dataTestId
    }: ListProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    return (
      <BaseList
        ref={ref}
        id={id}
        className={cx(styles.list, className)}
        as={as}
        ariaLabel={ariaLabel}
        ariaDescribedBy={ariaDescribedBy}
        role={role}
        size={size}
        maxHeight={maxHeight}
        focusOnMount={focusOnMount}
        defaultFocusIndex={defaultFocusIndex}
        onFocusChange={onFocusChange}
        disabled={disabled}
        style={style}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST, id)}
      >
        {children}
      </BaseList>
    );
  }
);

export default List;
