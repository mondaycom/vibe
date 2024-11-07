import React, { useState } from "react";
import moment, { Moment } from "moment";
import DatePicker, { DatePickerProps } from "../DatePicker";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import styles from "./DatePicker.stories.module.scss";
import { RangeDate } from "../types";

const metaSettings = createStoryMetaSettingsDecorator({
  component: DatePicker,
  actionPropsArray: ["onPickDate"]
});

export default {
  title: "Pickers/DatePicker",
  component: DatePicker,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

// for Chromatic check to always have the same date UI
const MOCK_INITIAL_DATE: RangeDate = { startDate: moment("2023-05-01"), endDate: moment("2023-05-03") };

const DatePickerTemplate = (args: DatePickerProps) => {
  const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);
  return (
    <DialogContentContainer className={styles.datepickerDialogContentContainer}>
      <DatePicker data-testid="date-picker" date={date} onPickDate={(d: Moment) => setDate(d)} {...args} />
    </DialogContentContainer>
  );
};

export const Overview = {
  render: DatePickerTemplate.bind({}),
  name: "Overview"
};

export const SingleDay = {
  render: () => {
    const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);

    return (
      <DialogContentContainer className={styles.datepickerDialogContentContainer}>
        <DatePicker data-testid="date-picker" date={date} onPickDate={(d: Moment) => setDate(d)} />
      </DialogContentContainer>
    );
  },

  name: "Single Day"
};

export const DateRange = {
  render: () => {
    const [date, setDate] = useState(MOCK_INITIAL_DATE);

    return (
      <DialogContentContainer className={styles.datepickerDialogContentContainer}>
        <DatePicker
          date={date.startDate}
          endDate={date.endDate}
          range
          data-testid="date-picker"
          onPickDate={(d: RangeDate) => setDate(d)}
        />
      </DialogContentContainer>
    );
  },

  name: "Date Range"
};

export const NumberOfMonths = {
  render: () => {
    const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);

    return (
      <DialogContentContainer className={styles.datepickerDialogContentContainer}>
        <DatePicker numberOfMonths={2} data-testid="date-picker" date={date} onPickDate={(d: Moment) => setDate(d)} />
      </DialogContentContainer>
    );
  },

  name: "Number Of Months"
};
