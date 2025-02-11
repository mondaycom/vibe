import React from "react";
import cx from "classnames";
import styles from "./StickyCategoryHeader.module.scss";
import comboboxStyles from "../../Combobox.module.scss";
import comboboxCategoryStyles from "../ComboboxCategory/ComboboxCategory.module.scss";

export const StickyCategoryHeader = ({
  label,
  color,
  className
}: {
  label: string;
  color?: string;
  className?: string;
}) => {
  return label === undefined ? null : (
    <div
      className={cx(
        styles.stickyCategoryHeader,
        comboboxStyles.comboboxCategory,
        comboboxCategoryStyles.comboboxCategory,
        className
      )}
      style={color && { color }}
      aria-hidden
    >
      {label}
    </div>
  );
};
