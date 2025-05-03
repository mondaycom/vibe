import React, { forwardRef } from "react";
import BaseListItem from "../BaseListItem/BaseListItem";
import styles from "./BaseList.module.scss";
import { BaseListProps } from "./BaseList.types";
import { Flex } from "../Flex";
import { TextType } from "../Text";
import Text from "../Text/Text";
import cx from "classnames";
import { Divider } from "../Divider";

const BaseList = forwardRef(
  <Item extends Record<string, unknown>>(
    {
      options,
      selectedItem,
      highlightedIndex,
      getMenuProps,
      getItemProps,
      size = "medium",
      withGroupDivider = false,
      dir = "ltr",
      itemRenderer,
      noOptionsMessage = "No results",
      stickyGroupTitle = false,
      renderOptions = true,
      onScroll,
      maxMenuHeight = 300
    }: BaseListProps<Item>,
    ref: React.Ref<HTMLUListElement>
  ) => {
    const textVariant: TextType = size === "small" ? "text2" : "text1";

    return (
      <ul
        ref={ref}
        dir={dir}
        className={styles.wrapper}
        {...getMenuProps?.()}
        onScroll={onScroll}
        style={{ maxHeight: maxMenuHeight }}
      >
        {renderOptions ? (
          options.every(group => group.options?.length === 0) ? (
            typeof noOptionsMessage === "string" ? (
              <Flex justify="center">
                <BaseListItem item={{ label: noOptionsMessage }} size={size} readOnly />
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
                {group.options.map((option, itemIndex) => {
                  const itemProps = getItemProps?.({ item: option, index: option.index }) ?? {};
                  const isHighlighted =
                    highlightedIndex !== undefined && highlightedIndex === option.index && !option.disabled;
                  const isSelected =
                    selectedItem?.value !== undefined && selectedItem?.value === option.value && !option.disabled;

                  return (
                    <BaseListItem<Item>
                      itemProps={itemProps}
                      key={typeof option.value === "string" ? option.value : itemIndex}
                      size={size}
                      highlighted={isHighlighted}
                      selected={isSelected}
                      itemRenderer={itemRenderer}
                      item={option}
                    />
                  );
                })}
                {withGroupDivider && groupIndex < options.length - 1 && <Divider />}
              </React.Fragment>
            ))
          )
        ) : null}
      </ul>
    );
  }
);

export default BaseList as <Item extends Record<string, unknown>>(
  props: BaseListProps<Item> & { ref?: React.Ref<HTMLUListElement> }
) => React.ReactElement;
