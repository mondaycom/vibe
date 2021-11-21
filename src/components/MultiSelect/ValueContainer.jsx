import React, { useState } from "react";
import Counter from "../Counter/Counter";
import Chip from "./Chip";
import classes from "./MultiSelect.module.scss";

export default function Container({ selectedOptions, children, onSelectedDelete }) {
  const [ref, setRef] = useState();

  if (!selectedOptions.length) {
    return <div className={classes["value-container"]}>{children}</div>;
  }

  let overflowingChildren = 0;

  if (ref) {
    const { bottom: parentBottom } = ref.getBoundingClientRect();

    ref.children.forEach(child => {
      const { bottom: childBottom } = child.getBoundingClientRect();

      if (childBottom > parentBottom) {
        overflowingChildren++;
      }
    });
  }

  return (
    <div className={classes["value-container"]}>
      <div className={classes["value-container-chips"]} ref={newRef => setRef(newRef)}>
        {selectedOptions.map(option => (
          <Chip key={option.value} {...option} onDelete={onSelectedDelete} />
        ))}
      </div>
      <div className={classes["value-container-counter"]}>
        {!!overflowingChildren && <Counter kind={Counter.kinds.LINE} prefix="+" count={overflowingChildren} />}
      </div>
    </div>
  );
}
