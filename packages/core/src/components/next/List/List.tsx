import React, { forwardRef } from "react";
import cx from "classnames";
import BaseList from "../../BaseList/BaseList";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { ComponentVibeId } from "../../../tests/constants";
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
      size = "small",
      maxHeight,
      focusOnMount = false,
      defaultFocusIndex,
      onFocusChange,
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
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST, id)}
        data-vibe={ComponentVibeId.LIST}
      >
        {children}
      </BaseList>
    );
  }
);

export default List;
