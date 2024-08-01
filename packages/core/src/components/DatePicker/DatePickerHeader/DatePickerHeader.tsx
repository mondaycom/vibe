import React from "react";
import DropdownChevronUp from "../../Icon/Icons/components/DropdownChevronUp";
import DropdownChevronDown from "../../Icon/Icons/components/DropdownChevronDown";
import moment from "moment";
import { Moment } from "../types";
import styles from "./DatePickerHeader.module.scss";
import Icon from "../../Icon/Icon";

export interface DatePickerHeaderProps {
  currentDate: Moment;
  isMonthYearSelection: boolean;
  onToggleMonthYearPicker: () => void;
  hideNavigationKeys: boolean;
  "data-testid"?: string;
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
            <Icon
              iconType={Icon?.type?.SVG}
              icon={isMonthYearSelection ? DropdownChevronUp : DropdownChevronDown}
              iconSize={24}
              clickable={false}
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default DatePickerHeader;
