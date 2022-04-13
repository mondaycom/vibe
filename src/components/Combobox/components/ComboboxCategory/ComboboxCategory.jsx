import React from "react";
import cx from "classnames";
import "./ComboboxCategory.scss";

const ComboboxCategory = ({ category, className }) => {
  const { label, id, ariaLabel } = category;
  const overrideId = `combobox-category-${id}`;
  if (!label) return null;

  return (
    <ul
      key={id}
      role="group"
      aria-level={1}
      aria-label={ariaLabel || label}
      id={overrideId}
      className={cx("combobox-category", className)}
    >
      {label}
    </ul>
  );
};

export default ComboboxCategory;
