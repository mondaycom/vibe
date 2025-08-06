import React from "react";
import { DropdownChevronUp, DropdownChevronDown } from "@vibe/icons";
import moment from "moment";
import { type Moment } from "../types";
import styles from "./DatePickerHeader.module.scss";
import Icon from "../../Icon/Icon";

export interface DatePickerHeaderProps {
  /**
   * The currently shown date.
   */
  currentDate: Moment;
  /**
   * If true, the month and year selection view is active.
   */
  isMonthYearSelection: boolean;
  /**
   * Callback fired when toggling the month and year picker.
   */
  onToggleMonthYearPicker: () => void;
  /**
   * If true, hides the navigation buttons.
   */
  hideNavigationKeys: boolean;
  /**
   * Test ID for testing purposes.
   */
  "data-testid"?: string;
  /**
   * The ARIA label for the toggle button.
   */
  ariaLabel?: string;
}

const DatePickerHeader = (props: DatePickerHeaderProps) => {
  const {
    currentDate,
    isMonthYearSelection,
    onToggleMonthYearPicker,
    hideNavigationKeys,
    "data-testid": dateTestId,
    ariaLabel = "Toggle select year"
  } = props;

  const localedDated = moment(currentDate.valueOf());
  const month = localedDated.format("MMMM");
  const year = localedDated.format("YYYY");
  const string = month + " " + year;
  return (
    <div className={styles.datePickerHeader}>
      <div>{string}</div>
      {!hideNavigationKeys && (
        <button
          data-testid={`${dateTestId}-year-toggle`}
          type="button"
          className={styles.button}
          aria-label={ariaLabel}
          onClick={onToggleMonthYearPicker}
        >
          <div className={styles.buttonContent}>
            <Icon iconType="svg" icon={isMonthYearSelection ? DropdownChevronUp : DropdownChevronDown} iconSize={24} />
          </div>
        </button>
      )}
    </div>
  );
};

export default DatePickerHeader;
