import React, { forwardRef } from "react";
import BaseItem from "../../../../BaseItem/BaseItem";
import styles from "./DropdownBaseList.module.scss";
import { type DropdownBaseListProps } from "./DropdownBaseList.types";
import { Flex } from "@vibe/layout";
import { type TextType, Text } from "@vibe/typography";
import cx from "classnames";
import { Divider } from "../../../../Divider";

const DropdownBaseList = forwardRef(
  <Item extends Record<string, unknown>>(
    {
      options,
      selectedItems,
      highlightedIndex,
      menuAriaLabel,
      getMenuProps,
      getItemProps,
      size = "medium",
      withGroupDivider = false,
      dir = "ltr",
      itemRenderer,
      menuRenderer,
      noOptionsMessage = "No results",
      stickyGroupTitle = false,
      renderOptions = true,
      onScroll,
      maxMenuHeight = 300
    }: DropdownBaseListProps<Item>,
    ref: React.Ref<HTMLUListElement>
  ) => {
    const textVariant: TextType = size === "small" ? "text2" : "text1";

    const defaultContent = renderOptions ? (
      options.every(group => group.options?.length === 0) ? (
        <div role="status">
          {typeof noOptionsMessage === "string" ? (
            <Flex justify="center">
              <BaseItem component="div" item={{ label: noOptionsMessage, value: "" }} size={size} readOnly />
            </Flex>
          ) : (
            noOptionsMessage
          )}
        </div>
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
                selectedItems?.some(selectedItem => selectedItem?.value === option.value) && !option.disabled;

              return (
                <BaseItem<Item>
                  itemProps={itemProps}
                  key={typeof option.value === "string" ? option.value : itemIndex}
                  size={size}
                  highlighted={isHighlighted}
                  selected={isSelected}
                  itemRenderer={itemRenderer}
                  item={option}
                  role="option"
                />
              );
            })}
            {withGroupDivider && groupIndex < options.length - 1 && <Divider />}
          </React.Fragment>
        ))
      )
    ) : null;

    return (
      <ul
        ref={ref}
        dir={dir}
        className={styles.wrapper}
        {...getMenuProps?.({ "aria-label": menuAriaLabel })}
        onScroll={onScroll}
        style={{ maxHeight: maxMenuHeight }}
      >
        {menuRenderer && renderOptions
          ? menuRenderer({
              children: defaultContent,
              filteredOptions: options,
              selectedItem: selectedItems?.[0] || null,
              selectedItems: selectedItems || []
            })
          : defaultContent}
      </ul>
    );
  }
);

export default DropdownBaseList as <Item extends Record<string, unknown>>(
  props: DropdownBaseListProps<Item> & { ref?: React.Ref<HTMLUListElement> }
) => React.ReactElement;
