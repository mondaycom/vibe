import React, { useState } from "react";
import moment, { type Moment } from "moment";
import { DatePicker, type DatePickerProps, DialogContentContainer, type RangeDate } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../../utils/createStoryMetaSettingsDecorator";

// for Chromatic check to always have the same date UI
const MOCK_INITIAL_DATE: RangeDate = { startDate: moment("2023-05-01"), endDate: moment("2023-05-03") };

const metaSettings = createStoryMetaSettingsDecorator({
  component: DatePicker,
  actionPropsArray: ["onPickDate"]
});

export default {
  title: "Components/DatePicker [Deprecated]",
  component: DatePicker,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { MOCK_INITIAL_DATE }
      }
    }
  }
};

const DatePickerTemplate = (args: DatePickerProps) => {
  const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);
  return (
    <DialogContentContainer>
      <DatePicker
        id="overview-date-picker"
        data-testid="date-picker"
        date={date}
        onPickDate={(d: Moment) => setDate(d)}
        {...args}
      />
    </DialogContentContainer>
  );
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
    const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);

    return (
      <DialogContentContainer>
        <DatePicker
          id="single-day-picker"
          data-testid="date-picker"
          date={date}
          onPickDate={(d: Moment) => setDate(d)}
        />
      </DialogContentContainer>
    );
  },

  name: "Single Day"
};

export const DateRange = {
  render: () => {
    const [date, setDate] = useState(MOCK_INITIAL_DATE);

    return (
      <DialogContentContainer>
        <DatePicker
          id="date-range-picker"
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

export const WithCustomPhrases = {
  render: () => {
    const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);

    return (
      <DialogContentContainer>
        <DatePicker
          id="custom-phrases-picker"
          data-testid="date-picker"
          date={date}
          onPickDate={(d: Moment) => setDate(d)}
          phrases={{
            chooseAvailableDate: ({ date }) => `This is the date you are about to choose: ${date}`
          }}
        />
      </DialogContentContainer>
    );
  },

  name: "With Custom Phrases"
};
