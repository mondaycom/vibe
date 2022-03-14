import React from "react";
import cx from "classnames";
import "./ComboboxCategory.scss";

const ComboboxCategory = ({ category, className }) => {
  const { label, id, ariaLabel } = category;

  if (!label) return null;

  return (
    <div
      key={id}
      role="row"
      aria-level={1}
      aria-label={ariaLabel || label}
      id={`combobox-category-${id}`}
      className={cx("combobox-category", className)}
    >
      {label}
    </div>
  );
};

export default ComboboxCategory;
