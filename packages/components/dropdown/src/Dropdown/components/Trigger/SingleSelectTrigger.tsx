import React from "react";
import cx from "classnames";
import { BaseItem, renderSideElement, type BaseItemData } from "@vibe/base-list";
import DropdownInput from "./DropdownInput";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { Flex } from "@vibe/layout";
import TriggerActions from "./TriggerActions";
import { getStyle } from "@vibe/shared";

const SingleSelectTrigger = () => {
  const {
    inputValue,
    isFocused,
    selectedItem,
    searchable,
    size,
    valueRenderer,
    getToggleButtonProps,
    disabled,
    readOnly,
    error,
    label,
    getLabelProps,
    "aria-label": ariaLabel,
    helperTextId,
    inlineSelectedValue
  } = useDropdownContext<BaseItemData>();

  // inlineSelectedValue keeps the selected label inside the input as its real, visible value, so AT
  // reads the input rather than an empty field. The selected option's startElement rides along as a
  // decorative prefix in BaseInput's renderLeft slot — a flex sibling of the input, not an overlay
  // over it, so there is only ever one piece of text in the field.
  const isSearchableInline = !!inlineSelectedValue && !!searchable;
  const startElement = selectedItem?.startElement;
  // The prefix describes the selection, which outlives a search query, so it stays put while the user
  // types. It's only dropped once the field is emptied, where a lone icon beside a placeholder reads
  // as broken.
  const showValuePrefix = isSearchableInline && !!inputValue && !!startElement && startElement.type !== "indent";
  const textVariant = size === "small" ? "text2" : "text1";
  const valuePrefix = showValuePrefix ? (
    <span aria-hidden="true" className={styles.valuePrefix}>
      {renderSideElement(startElement, !!disabled, textVariant)}
    </span>
  ) : undefined;

  const endElement = selectedItem?.endElement;
  const valueSuffix =
    isSearchableInline && !!inputValue && !!endElement ? (
      <span aria-hidden="true" className={styles.valueSuffix}>
        {renderSideElement(endElement, !!disabled, textVariant)}
      </span>
    ) : undefined;

  // Without inlineSelectedValue (default), the input is emptied on selection and the overlay is the
  // only representation of it — faded while the input is focused (the original behavior).
  const showSelectedOverlay = (inlineSelectedValue ? !searchable : !inputValue) && !!selectedItem;

  return (
    <Flex justify="space-between" align="center">
      <div
        className={cx(styles.triggerWrapper, getStyle(styles, size))}
        {...(!searchable
          ? getToggleButtonProps({
              "aria-haspopup": "dialog",
              "aria-labelledby": label ? getLabelProps().id : undefined,
              "aria-label": label ? undefined : ariaLabel,
              "aria-describedby": helperTextId,
              "aria-disabled": disabled ? "true" : undefined,
              "aria-invalid": error ? "true" : undefined,
              "aria-readonly": readOnly ? "true" : undefined
            })
          : {})}
      >
        <DropdownInput valuePrefix={valuePrefix} valueSuffix={valueSuffix} />

        {showSelectedOverlay && (
          <div
            className={cx(
              styles.selectedItem,
              { [styles.faded]: !inlineSelectedValue && isFocused && searchable },
              getStyle(styles, size)
            )}
          >
            <BaseItem
              component="div"
              itemRenderer={valueRenderer}
              size={size}
              readOnly
              item={{
                ...selectedItem,
                disabled,
                startElement: selectedItem.startElement?.type === "indent" ? undefined : selectedItem.startElement
              }}
            />
          </div>
        )}
      </div>
      <TriggerActions />
    </Flex>
  );
};

export default SingleSelectTrigger;
