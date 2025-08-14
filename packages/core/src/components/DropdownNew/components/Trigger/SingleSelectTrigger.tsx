import React from "react";
import cx from "classnames";
import { BaseListItem, type BaseListItemData } from "../../../BaseListItem";
import DropdownInput from "./DropdownInput";
import styles from "./Trigger.module.scss";
import { useDropdownContext } from "../../context/DropdownContext";
import { Flex } from "../../../Flex";
import TriggerActions from "./TriggerActions";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";

const SingleSelectTrigger = () => {
  const {
    inputValue,
    selectedItem,
    searchable,
    size,
    valueRenderer,
    isFocused,
    getToggleButtonProps,
    disabled,
    label,
    getLabelProps,
    ariaLabel
  } = useDropdownContext<BaseListItemData>();

  return (
    <Flex justify="space-between" align="center">
      <div
        className={cx(styles.triggerWrapper, getStyle(styles, size))}
        {...(!searchable
          ? getToggleButtonProps({
              "aria-haspopup": "dialog",
              "aria-labelledby": label ? getLabelProps().id : undefined,
              "aria-label": ariaLabel || (label ? undefined : getLabelProps()?.id)
            })
          : {})}
      >
        <DropdownInput />

        {!inputValue && selectedItem && (
          <div
            className={cx(
              styles.selectedItem,
              {
                [styles.faded]: isFocused && searchable
              },
              getStyle(styles, size)
            )}
          >
            <BaseListItem
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
