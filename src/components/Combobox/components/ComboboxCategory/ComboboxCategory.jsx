import React from "react";
import "./ComboboxCategory.scss";
import Divider from "../../../Divider/Divider";

const ComboboxCategory = ({ category, divider }) => {
  const { label, id, ariaLabel } = category;

  if (!label) return null;

  return (
    <div
      key={id}
      role="presentation"
      aria-label={ariaLabel || label}
      id={`combobox-category-${id}`}
      className="combobox-category"
    >
      {divider && <Divider />}
      {label}
    </div>
  );
};

export default ComboboxCategory;
