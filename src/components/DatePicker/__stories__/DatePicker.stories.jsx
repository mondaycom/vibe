import React, { useState } from "react";
import { MOCK_INITIAL_DATE } from "./datepicker.stories.mdx";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import DatePicker from "../DatePicker";
import styles from "./DatePicker.stories.module.scss";

export const DatePickerTemplate = args => {
  const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);
  return (
    <DialogContentContainer className={styles.datepickerDialogContentContainer}>
      <DatePicker data-testid="date-picker" date={date} onPickDate={d => setDate(d)} {...args} />
    </DialogContentContainer>
  );
};
