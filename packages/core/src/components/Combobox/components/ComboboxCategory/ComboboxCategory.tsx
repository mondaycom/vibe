import cx from "classnames";
import React, { FC } from "react";
import { IComboboxCategory } from "../ComboboxConstants";
import styles from "./ComboboxCategory.module.scss";
import comboboxStyles from "../../Combobox.module.scss";

export interface ComboboxCategoryProps {
  category: IComboboxCategory;
  className: string;
}

const ComboboxCategory: FC<ComboboxCategoryProps> = ({ category, className }) => {
  const { label, id, ariaLabel, color } = category;

  if (!label) return null;

  return (
    <div
      key={id}
      role="row"
      aria-level={1}
      aria-label={ariaLabel || label}
      id={`combobox-category-${id}`}
      style={color && { color }}
      className={cx(styles.comboboxCategory, comboboxStyles.comboboxCategory, className)}
    >
      {label}
    </div>
  );
};

export default ComboboxCategory;
