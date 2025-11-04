import React, { useState } from "react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { type DatePickerProps } from "../DatePicker.types";
import { ja } from "date-fns/locale";
import { DialogContentContainer } from "@vibe/core";
import { DatePicker } from "@vibe/core/next";

const metaSettings = createStoryMetaSettingsDecorator({
  component: DatePicker,
  actionPropsArray: ["onDateChange"]
});

export default {
  title: "Components/DatePicker [New]",
  component: DatePicker,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const DatePickerTemplate = (args: DatePickerProps) => {
  const [date, setDate] = useState(new Date("2023-05-01"));
  return <DatePicker id="overview-date-picker" date={date} onDateChange={setDate} {...args} />;
};

export const Overview = {
  render: DatePickerTemplate.bind({}),
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const SingleDay = {
  render: () => {
    const [date, setDate] = useState(new Date("2023-05-01"));

    return (
      <DialogContentContainer>
        <DatePicker id="single-day-picker" date={date} onDateChange={setDate} />
      </DialogContentContainer>
    );
  },

  name: "Single Day"
};

export const DateRange = {
  render: () => {
    const [date, setDate] = useState({ start: new Date("2023-05-01"), end: new Date("2023-05-03") });

    return (
      <DialogContentContainer>
        <DatePicker
          id="date-range-picker"
          mode="range"
          date={date.start}
          endDate={date.end}
          onDateChange={range => setDate({ start: range.date, end: range.endDate })}
        />
      </DialogContentContainer>
    );
  },

  name: "Date Range"
};

export const NumberOfMonths = {
  render: () => {
    const [date, setDate] = useState(new Date("2023-05-01"));

    return <DatePicker id="multi-month-picker" numberOfMonths={2} date={date} onDateChange={setDate} />;
  },

  name: "Number Of Months"
};

export const WithLocale = {
  render: () => {
    // import ja from 'date-fns/locale/ja';
    const [date, setDate] = useState(new Date("2023-05-01"));

    return <DatePicker id="ja-locale-picker" date={date} onDateChange={setDate} locale={ja} />;
  },

  name: "With Locale"
};
