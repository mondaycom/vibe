import React from "react";
import {
  type DayContentProps as DatePickerDayContentProps,
  DayContent as DatePickerDayContent
} from "react-day-picker";
import styles from "./DatePicker.module.scss";

export const SingleDayContent = (dayContentProps: DatePickerDayContentProps) => (
  <div className={styles.datePickerDayContent}>
    <DatePickerDayContent {...dayContentProps} />
  </div>
);
