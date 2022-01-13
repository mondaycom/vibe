/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect, useCallback } from "react";
import Counter from "../../../Counter/Counter";
import Dialog from "../../../Dialog/Dialog";
import DialogContentContainer from "../../../DialogContentContainer/DialogContentContainer";
import Chips from "../../../Chips/Chips";
import classes from "./ValueContainer.module.scss";

const EMPTY_ARRAY = [];

export default function Container({
  selectedOptions,
  children,
  onSelectedDelete,
  isDialogShown,
  setIsDialogShown,
  isMultiline
}) {
  const clickHandler = children[1];
  const [ref, setRef] = useState();
  const [isCounterShown, setIsCounterShown] = useState(false);
  const [overflowingIndex, setOverflowingIndex] = useState(-1);

  const isOverflowCalculated = overflowingIndex > -1;
  const overflowingChildren = isOverflowCalculated
    ? selectedOptions.slice(overflowingIndex, selectedOptions.length)
    : EMPTY_ARRAY;
  const chipClassName = isMultiline ? classes["multiselect-chip-multi-line"] : classes["multiselect-chip-single-line"];

  const renderOptions = useCallback(
    (from = 0, to = selectedOptions.length) =>
      selectedOptions.map((option, index) =>
        (index >= from && index < to ? (
          <Chips
            data-testid="value-container-chip"
            key={option.value}
            className={chipClassName}
            noAnimation
            id={option.value}
            label={option.label}
            onDelete={onSelectedDelete}
            onMouseDown={e => {
              e.stopPropagation();
            }}
          />
        ) : null)),
    [selectedOptions, onSelectedDelete, chipClassName]
  );

  useEffect(() => {
    let index = -1;

    if (ref) {
      const { bottom: parentBottom } = ref.getBoundingClientRect();
      let chipIndex = 0;

      for (let i = 0; i < ref.children.length; i++) {
        const child = ref.children[i];
        const isChip = child.classList.contains(chipClassName);
        const { bottom: childBottom } = child.getBoundingClientRect();

        if (isChip) {
          if (childBottom > parentBottom) {
            index = chipIndex;
            break;
          }

          chipIndex++;
        }
      }
    }

    setOverflowingIndex(index);
  }, [ref, isCounterShown, chipClassName]);

  useEffect(() => {
    setIsCounterShown(!!overflowingChildren.length);
  }, [overflowingChildren.length]);

  return (
    <div className={classes["value-container"]}>
      <div
        className={classes["value-container-chips"]}
        ref={newRef => setRef(newRef)}
        data-testid="value-container-chips"
      >
        {isCounterShown ? (
          <>
            {renderOptions(0, overflowingIndex)}
            {clickHandler}
            {renderOptions(overflowingIndex)}
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
                {renderOptions(overflowingIndex)}
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
              count={overflowingChildren.length}
              onMouseDown={e => {
                e.stopPropagation();
              }}
              noAnimation
            />
          </Dialog>
        )}
      </div>
    </div>
  );
}
