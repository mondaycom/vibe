import React, { useMemo, useState, useEffect, useCallback } from "react";
import Counter from "../Counter/Counter";
import Chip from "./Chip";
import classes from "./MultiSelect.module.scss";

const EMPTY_ARRAY = [];

export default function Container({ selectedOptions, children, onSelectedDelete }) {
  const clickHandler = children[1];
  const [ref, setRef] = useState();
  const [isCounterShown, setIsCounterShown] = useState(false);
  const [overflowingIndex, setOverflowingIndex] = useState(-1);

  const isOverflowCalculated = overflowingIndex > -1;
  const overflowingChildren = isOverflowCalculated
    ? selectedOptions.slice(overflowingIndex, selectedOptions.length)
    : EMPTY_ARRAY;

  const renderOptions = useCallback(
    (from = 0, to = selectedOptions.length) =>
      selectedOptions.map((option, index) =>
        index >= from && index < to ? <Chip key={option.value} {...option} onDelete={onSelectedDelete} /> : null
      ),
    [selectedOptions, onSelectedDelete]
  );

  useEffect(() => {
    let index = -1;

    if (ref) {
      const { bottom: parentBottom } = ref.getBoundingClientRect();
      let chipIndex = 0;

      for (let i = 0; i < ref.children.length; i++) {
        const child = ref.children[i];
        const isChip = child.classList.contains(classes["multiselect-chip"]);
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
  }, [ref, isCounterShown]);

  useEffect(() => {
    setIsCounterShown(!!overflowingChildren.length);
  }, [overflowingChildren.length]);

  return (
    <div className={classes["value-container"]}>
      <div className={classes["value-container-chips"]} ref={newRef => setRef(newRef)}>
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
        {!!overflowingChildren.length && (
          <Counter kind={Counter.kinds.LINE} prefix="+" count={overflowingChildren.length} />
        )}
      </div>
    </div>
  );
}
