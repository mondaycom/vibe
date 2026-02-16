import React, { forwardRef } from "react";
import cx from "classnames";
import { Text } from "@vibe/typography";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import { ComponentVibeId } from "../../../../tests/constants";
import { useBaseList } from "../../../BaseList/context/BaseListContext";
import { type ListTitleProps } from "./ListTitle.types";
import styles from "./ListTitle.module.scss";

const ListTitle = forwardRef(
  (
    { className, id, children, size: sizeProp, sticky = false, "data-testid": dataTestId }: ListTitleProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ) => {
    const { size: contextSize } = useBaseList();
    const size = sizeProp ?? contextSize ?? "small";

    return (
      <Text
        element="li"
        ref={ref}
        id={id}
        type="text1"
        weight="medium"
        role="heading"
        aria-level={3}
        className={cx(
          styles.listTitle,
          styles[size],
          {
            [styles.sticky]: sticky
          },
          className
        )}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LIST_TITLE, id)}
        data-vibe={ComponentVibeId.LIST_TITLE}
      >
        {children}
      </Text>
    );
  }
);

export default ListTitle;
