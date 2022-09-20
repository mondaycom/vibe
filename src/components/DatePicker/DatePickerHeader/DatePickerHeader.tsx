import React from "react";
import classNames from "classnames";
import moment from "moment";
import { Moment } from "../types";
import styles from "./DatePickerHeader.module.scss";

interface DatePickerHeaderProps {
  currentDate: Moment;
  isMonthYearSelection: boolean;
  onToggleMonthYearPicker: () => void;
  hideNavigationKeys: boolean;
  "data-testid"?: string;
}

const DatePickerHeader = (props: DatePickerHeaderProps) => {
  const {
    currentDate,
    isMonthYearSelection,
    onToggleMonthYearPicker,
    hideNavigationKeys,
    "data-testid": dateTestId
  } = props;

  const localedDated = moment(currentDate.valueOf());
  const month = localedDated.format("MMMM");
  const year = localedDated.format("YYYY");
  const string = month + " " + year;
  return (
    <div className={styles.datePickerHeaderContainer}>
      <div>{string}</div>
      {!hideNavigationKeys && (
        <button
          data-testid={`${dateTestId}-year-toggle`}
          type="button"
          className={styles.button}
          onClick={onToggleMonthYearPicker}
        >
          <div className={styles.buttonContent}>
            <span
              className={classNames(
                "fa",
                { "fa-caret-up": isMonthYearSelection },
                { "fa-caret-down": !isMonthYearSelection }
              )}
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default DatePickerHeader;
