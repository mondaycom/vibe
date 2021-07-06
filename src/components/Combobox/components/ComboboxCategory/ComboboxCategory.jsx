import React from "react";
import "./ComboboxCategory.scss";

const ComboboxCategory = ({ category }) => {
  const { label, id, ariaLabel } = category;

  if (!label) return null;

  return (
    <div
      key={id}
      role="presentation"
      ariaLabel={ariaLabel || label}
      id={`combobox-category-${id}`}
      className="combobox-category"
    >
      {label}
    </div>
  );
};

export default ComboboxCategory;
