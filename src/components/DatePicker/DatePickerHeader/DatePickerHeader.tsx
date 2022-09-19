import React from "react";
import classNames from "classnames";
import moment from "moment";
import { Moment } from "../types";
import "./DatePickerHeader.scss";

interface DatePickerHeaderProps {
  currentDate: Moment;
  isMonthYearSelection: boolean;
  onToggleMonthYearPicker: () => void;
  hideNavigationKeys: boolean;
}

const DatePickerHeader = (props: DatePickerHeaderProps) => {
  const { currentDate, isMonthYearSelection, onToggleMonthYearPicker, hideNavigationKeys } = props;

  const localedDated = moment(currentDate.valueOf());
  const month = localedDated.format("MMMM");
  const year = localedDated.format("YYYY");
  const string = month + " " + year;
  return (
    <div className="date-picker-header-component">
      <div>{string}</div>
      {!hideNavigationKeys && (
        <button
          type="button"
          className="date-picker-header-component-button-container"
          onClick={onToggleMonthYearPicker}
        >
          <div className="date-picker-header-component-button">
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
