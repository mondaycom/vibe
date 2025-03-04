import React, { forwardRef } from "react";
import BaseListItem from "../BaseListItem/BaseListItem";
import { VibeComponent } from "../../types";
import styles from "./BaseList.module.scss";
import { BaseListProps } from "./BaseList.types";
import { Flex } from "../Flex";
import { TextType } from "../Text";
import Text from "../Text/Text";
import cx from "classnames";

const BaseList: VibeComponent<BaseListProps<any>, HTMLUListElement> = forwardRef(
  <T extends Record<string, unknown>>(
    {
      options,
      selectedItem,
      highlightedIndex,
      getMenuProps,
      getItemProps,
      size = "medium",
      withGroupDivider = false,
      dir = "ltr",
      optionRenderer,
      noOptionsMessage = "No results",
      stickyGroupTitle = false
    }: BaseListProps<T>,
    ref: React.Ref<HTMLUListElement>
  ) => {
    const textVariant: TextType = size === "small" ? "text2" : "text1";

    return (
      <ul ref={ref} dir={dir} className={styles.wrapper} {...getMenuProps?.()}>
        {options.every(group => group.options?.length === 0) ? (
          typeof noOptionsMessage === "string" ? (
            <Flex justify="center">
              <BaseListItem label={noOptionsMessage} size={size} readOnly />
            </Flex>
          ) : (
            noOptionsMessage
          )
        ) : (
          options.map((group, groupIndex) => (
            <React.Fragment key={group.label ?? groupIndex}>
              {group.label && (
                <li className={cx(styles.groupTitle, { [styles.sticky]: stickyGroupTitle })}>
                  <Text type={textVariant} color="inherit">
                    {group.label}
                  </Text>
                </li>
              )}
              {group.options.map((item, itemIndex) => {
                const itemProps = getItemProps?.({ item, index: item.index as number }) ?? {};
                const isHighlighted =
                  highlightedIndex !== undefined && highlightedIndex === item.index && !item.disabled;
                const isSelected =
                  selectedItem?.value !== undefined && selectedItem?.value === item.value && !item.disabled;

                return (
                  <BaseListItem
                    {...itemProps}
                    label={item.label as string}
                    key={typeof item.value === "string" ? item.value : itemIndex}
                    size={size}
                    highlighted={isHighlighted}
                    selected={isSelected}
                    optionRenderer={optionRenderer}
                    {...item}
                  />
                );
              })}
              {withGroupDivider && groupIndex < options.length - 1 && <div className={styles.groupDivider} />}
            </React.Fragment>
          ))
        )}
      </ul>
    );
  }
);

export default BaseList;
