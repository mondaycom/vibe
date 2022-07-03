/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useCallback } from "react";
import { components } from "react-select";
import cx from "classnames";
import { useHiddenOptionsData } from "../../hooks/useHiddenOptionsData";
import Counter from "../../../Counter/Counter";
import Dialog from "../../../Dialog/Dialog";
import DialogContentContainer from "../../../DialogContentContainer/DialogContentContainer";
import Chips from "../../../Chips/Chips";
import classes from "./ValueContainer.module.scss";

export default function Container({ children, selectProps, ...otherProps }) {
  const { placeholder, inputValue, selectProps: customProps = {}, withMandatoryDefaultOptions } = selectProps;
  const { selectedOptions, onSelectedDelete, setIsDialogShown, isDialogShown, isMultiline } = customProps;
  const clickHandler = children[1];
  const [ref, setRef] = useState();
  const showPlaceholder = selectedOptions.length === 0 && !inputValue;
  const chipClassName = isMultiline ? classes["multiselect-chip-multi-line"] : classes["multiselect-chip-single-line"];
  const { overflowIndex, hiddenOptionsCount } = useHiddenOptionsData({
    isMultiline,
    ref,
    chipClassName,
    selectedOptionsCount: selectedOptions.length
  });
  const isCounterShown = hiddenOptionsCount > 0;
  const renderOptions = useCallback(
    (from = 0, to = selectedOptions.length) =>
      selectedOptions.map((option, index) =>
        index >= from && index < to ? (
          <Chips
            dataTestId="value-container-chip"
            key={option.value}
            className={chipClassName}
            noAnimation
            id={option.value}
            label={option.label}
            onDelete={onSelectedDelete}
            onMouseDown={e => {
              e.stopPropagation();
            }}
            readOnly={withMandatoryDefaultOptions && option.isMandatory}
            leftAvatar={option.leftAvatar}
            leftIcon={option.leftIcon}
          />
        ) : null
      ),
    [selectedOptions, chipClassName, onSelectedDelete, withMandatoryDefaultOptions]
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
              {renderOptions(0, overflowIndex)}
              {clickHandler}
              {renderOptions(overflowIndex)}
            </>
          ) : (
            <>
              {renderOptions()}
              {clickHandler}
            </>
          )}
        </div>
        <div>
          {isCounterShown && (
            <Dialog
              content={() => (
                <DialogContentContainer className={classes["value-container-dialog-content"]}>
                  {renderOptions(overflowIndex)}
                </DialogContentContainer>
              )}
              tooltip
              showTrigger={Dialog.hideShowTriggers.CLICK}
              hideTrigger={Dialog.hideShowTriggers.CLICK_OUTSIDE}
              open={isDialogShown}
              onClick={() => setIsDialogShown(true)}
              onClickOutside={() => setIsDialogShown(false)}
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
