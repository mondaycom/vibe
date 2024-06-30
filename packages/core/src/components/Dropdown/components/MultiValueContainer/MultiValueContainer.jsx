/* eslint-disable react/no-unstable-nested-components */
import React, { useCallback, useEffect, useState } from "react";
import { components } from "react-select";
import cx from "classnames";
import { useHiddenOptionsData } from "../../hooks/useHiddenOptionsData";
import Counter from "../../../Counter/Counter";
import Dialog from "../../../Dialog/Dialog";
import DialogContentContainer from "../../../DialogContentContainer/DialogContentContainer";
import Chips from "../../../Chips/Chips";
import { DROPDOWN_CHIP_COLORS } from "../../DropdownConstants";
import classes from "./MultiValueContainer.module.scss";

const DIALOG_OFFSET_Y = 5;

export default function Container({ children, selectProps, ...otherProps }) {
  const {
    isDisabled,
    placeholder,
    inputValue,
    selectProps: customProps = {},
    withMandatoryDefaultOptions,
    readOnly
  } = selectProps;
  const { selectedOptions, onSelectedDelete, isMultiline, popupsContainerSelector, size } = customProps;
  const clickHandler = children[1];
  const [ref, setRef] = useState();
  const [isCounterShown, setIsCounterShown] = useState(false);
  const showPlaceholder = selectedOptions.length === 0 && !inputValue;
  const chipWrapperClassName = classes["chip-with-input-wrapper"];
  const chipClassName = cx(
    isMultiline ? classes["multiselect-chip-multi-line"] : classes[`multiselect-chip-single-line-${size}`],
    { [classes["multiselect-chip-disabled"]]: isDisabled }
  );

  const { overflowIndex, hiddenOptionsCount } = useHiddenOptionsData({
    isMultiline,
    ref,
    chipClassName,
    chipWrapperClassName,
    selectedOptionsCount: selectedOptions.length,
    isCounterShown
  });

  useEffect(() => {
    setIsCounterShown(hiddenOptionsCount > 0);
  }, [hiddenOptionsCount]);

  const onDelete = useCallback(
    option => {
      onSelectedDelete(option.value, { action: "remove-value", removedValue: option });
    },
    [onSelectedDelete]
  );

  const renderOptions = useCallback(
    (from = 0, to = selectedOptions.length) =>
      selectedOptions.map((option, index) => {
        const overrideChipColor = Object.keys(DROPDOWN_CHIP_COLORS).includes(option.chipColor)
          ? Chips.colors[option.chipColor]
          : Chips.colors.PRIMARY;
        return index >= from && index < to ? (
          <Chips
            data-testid="value-container-chip"
            key={option.value}
            className={cx(classes.chips, chipClassName)}
            noAnimation
            disabled={isDisabled}
            id={option.value}
            label={option.label}
            onDelete={() => onDelete(option)}
            disableClickableBehavior
            onMouseDown={e => {
              e.stopPropagation();
            }}
            readOnly={readOnly || (withMandatoryDefaultOptions && option.isMandatory)}
            allowTextSelection={readOnly}
            leftRenderer={option.leftRenderer}
            leftAvatar={option.leftAvatar}
            leftIcon={option.leftIcon}
            color={overrideChipColor}
          />
        ) : null;
      }),
    [selectedOptions, chipClassName, isDisabled, readOnly, withMandatoryDefaultOptions, onDelete, size]
  );

  return (
    <components.ValueContainer selectProps={selectProps} {...otherProps}>
      <div className={classes["value-container"]}>
        {showPlaceholder && (
          <div className={classes["placeholder-container"]}>
            <components.Placeholder {...otherProps}>{placeholder}</components.Placeholder>
          </div>
        )}
        <div
          className={cx(classes["value-container-chips"], { [classes["without-placeholder"]]: !showPlaceholder })}
          ref={newRef => setRef(newRef)}
          data-testid="value-container-chips"
        >
          {isCounterShown ? (
            <>
              {renderOptions(0, overflowIndex - 1)}
              <div className={chipWrapperClassName}>
                {renderOptions(overflowIndex - 1, overflowIndex)}
                {clickHandler}
              </div>
              {renderOptions(overflowIndex)}
            </>
          ) : (
            <>
              {renderOptions(0, selectedOptions.length - 1)}
              <div className={chipWrapperClassName}>
                {renderOptions(selectedOptions.length - 1)}
                {clickHandler}
              </div>
            </>
          )}
        </div>
        <div>
          {isCounterShown && (
            <Dialog
              content={() => (
                <DialogContentContainer className={classes.valueDialogContent}>
                  {renderOptions(overflowIndex)}
                </DialogContentContainer>
              )}
              containerSelector={popupsContainerSelector}
              tooltip
              showTrigger={Dialog.hideShowTriggers.CLICK}
              hideTrigger={Dialog.hideShowTriggers.CLICK_OUTSIDE}
              position="bottom"
              moveBy={{ main: DIALOG_OFFSET_Y }}
            >
              <Counter
                kind={Counter.kinds.LINE}
                prefix="+"
                count={hiddenOptionsCount}
                onMouseDown={e => {
                  e.stopPropagation();
                }}
                noAnimation
              />
            </Dialog>
          )}
        </div>
      </div>
    </components.ValueContainer>
  );
}
