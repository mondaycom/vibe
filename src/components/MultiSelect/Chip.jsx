import React from "react";
import Chips from "../Chips/Chips";
import classes from "./MultiSelect.module.scss";

export default function Chip({ value, label, onDelete }) {
  return (
    <Chips
      className={classes["multiselect-chip"]}
      noAnimation
      id={value}
      label={label}
      onDelete={onDelete}
      onMouseDown={e => {
        e.stopPropagation();
      }}
    />
  );
}
