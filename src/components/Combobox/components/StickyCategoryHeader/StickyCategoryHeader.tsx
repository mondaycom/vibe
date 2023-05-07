import cx from "classnames";
import styles from "./StickyCategoryHeader.module.scss";

export const StickyCategoryHeader = ({ label }: { label: string }) => {
  return label === undefined ? null : (
    <div className={cx(styles.stickyCategoryHeader, "combobox-category")} aria-hidden>
      {label}
    </div>
  );
};
