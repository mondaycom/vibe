import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import styles from "./ComboboxCategory.module.scss";

const ComboboxCategory = ({ category, className, "data-testid": dataTestId }) => {
  const { label, id, ariaLabel } = category;

  if (!label) return null;

  return (
    <div
      key={id}
      role="row"
      aria-level={1}
      aria-label={ariaLabel || label}
      id={`combobox-category-${id}`}
      className={cx(styles.comboboxCategory, "combobox-category", className)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.COMBOBOX_CATEGORY, id)}
    >
      {label}
    </div>
  );
};

export default ComboboxCategory;
