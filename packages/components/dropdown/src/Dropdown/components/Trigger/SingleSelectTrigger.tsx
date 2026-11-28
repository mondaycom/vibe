import React from "react";
import cx from "classnames";
import { BaseItem, type BaseItemData } from "@vibe/base-list";
import DropdownInput from "./DropdownInput";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { Flex } from "@vibe/layout";
import TriggerActions from "./TriggerActions";
import { getStyle } from "@vibe/shared";
import useTriggerToggleProps from "./useTriggerToggleProps";

const SingleSelectTrigger = () => {
  const {
    inputValue,
    isFocused,
    selectedItem,
    searchable,
    searchInMenu,
    size,
    valueRenderer,
    disabled,
    inlineSelectedValue
  } = useDropdownContext<BaseItemData>();
  const toggleProps = useTriggerToggleProps();
  const inputInTrigger = searchable && !searchInMenu;

  // inlineSelectedValue puts the selected label inside the input, so the overlay only renders for
  // non-searchable single select. Without it (default), the selection is shown via the overlay —
  // including in searchable mode, faded while the input is focused (the original behavior).
  const showSelectedOverlay = !!selectedItem && (!inputInTrigger || (!inlineSelectedValue && !inputValue));

  return (
    <Flex justify="space-between" align="center">
      <div className={cx(styles.triggerWrapper, getStyle(styles, size))} {...toggleProps}>
        <DropdownInput />

        {showSelectedOverlay && (
          <div
            className={cx(
              styles.selectedItem,
              { [styles.faded]: !inlineSelectedValue && isFocused && inputInTrigger },
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
