import React, { useMemo, useState } from "react";
import Counter from "../Counter/Counter";
import Chip from "./Chip";
import classes from "./MultiSelect.module.scss";

export default function Container({ selectedOptions, children, onSelectedDelete }) {
  const [ref, setRef] = useState();

  const clickHandler = children[1];

  const overflowingIndex = useMemo(() => {
    let index = -1;
    if (ref) {
      const { bottom: parentBottom } = ref.getBoundingClientRect();

      for (let i = 0; i < ref.children.length; i++) {
        const child = ref.children[i];
        const { bottom: childBottom } = child.getBoundingClientRect();

        if (childBottom > parentBottom) {
          index = i;
          break;
        }
      }
    }
    return index;
  }, [ref]);

  const isOverflowCalculated = overflowingIndex > -1;
  const overflowingChildren = isOverflowCalculated
    ? selectedOptions.slice(overflowingIndex, selectedOptions.length)
    : [];

  return (
    <div className={classes["value-container"]}>
      <div className={classes["value-container-chips"]} ref={newRef => setRef(newRef)}>
        {selectedOptions.map((option, index) =>
          isOverflowCalculated && index >= overflowingIndex ? null : (
            <Chip key={option.value} {...option} onDelete={onSelectedDelete} />
          )
        )}
        {clickHandler}
      </div>

      <div className={classes["value-container-counter"]}>
        {!!overflowingChildren.length && (
          <Counter kind={Counter.kinds.LINE} prefix="+" count={overflowingChildren.length} />
        )}
      </div>
    </div>
  );
}
