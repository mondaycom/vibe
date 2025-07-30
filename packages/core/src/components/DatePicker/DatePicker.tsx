import React, { forwardRef, useCallback, useState } from "react";
import cx from "classnames";
import moment from "moment";
import "react-dates/initialize.js";
import {
  DayOfWeekShape,
  DayPickerRangeController,
  DayPickerSingleDateController,
  type DayPickerPhrases
} from "react-dates";
/** @ts-expect-error this is exported, but not typed */
import { DayPickerPhrases as defaultPhrases } from "react-dates/lib/defaultPhrases";
import DatePickerHeaderComponent from "./DatePickerHeader/DatePickerHeader";
import DateNavigationItem from "./DateNavigationItem/DateNavigationItem";
import YearPicker from "./YearPicker/YearPicker";
import { DAY_SIZE, WEEK_FIRST_DAY } from "./constants";
import { Direction, FocusInput, Moment, RangeDate } from "./types";
import { VibeComponentProps } from "../../types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { NOOP } from "../../utils/function-utils";
import styles from "./DatePicker.module.scss";
// Make sure to update when upgrading react-dates
import "./external_datepicker.scss";

export interface DatePickerProps extends VibeComponentProps {
  /**
   * The first day of the week to display.
   */
  firstDayOfWeek?: DayOfWeekShape;
  /**
   * The currently selected date.
   */
  date?: Moment;
  /**
   * The end date for range selection mode.
   */
  endDate?: Moment;
  /**
   * Callback fired when a date is selected.
   */
  onPickDate?: (date: Moment | RangeDate) => void;
  /**
   * If true, hides the navigation buttons.
   */
  hideNavigationKeys?: boolean;
  /**
   * If true, allows selecting days outside the current month.
   */
  enableOutsideDays?: boolean;
  /**
   * If true, displays a column with week numbers.
   */
  showWeekNumber?: boolean;
  /**
   * The size of a single day cell.
   */
  daySize?: number;
  /**
   * Function to determine if a specific day should be disabled.
   */
  shouldBlockDay?: (date: Moment) => boolean;
  /**
   * If true, enables date range selection mode.
   */
  range?: boolean;
  /**
   * Custom phrases for accessibility and aria-labels.
   */
  phrases?: DayPickerPhrases;
  /**
   * The number of months displayed in the calendar.
   */
  numberOfMonths?: number;
  /**
   * Function to determine if a specific year should be disabled.
   */
  shouldBlockYear?: (year: number) => boolean;
  /**
   * Function to determine if a specific date range should be disabled.
   */
  shouldBlockRange?: (date: Moment) => boolean;
}

const DatePicker = forwardRef(
  (
    {
      id,
      className,
      firstDayOfWeek = WEEK_FIRST_DAY,
      daySize = DAY_SIZE,
      range = false,
      shouldBlockDay,
      shouldBlockYear,
      numberOfMonths = 1,
      hideNavigationKeys = false,
      date,
      endDate,
      onPickDate,
      enableOutsideDays = false,
      showWeekNumber = false,
      shouldBlockRange,
      "data-testid": dataTestId,
      phrases
    }: DatePickerProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [focusedInput, setFocusedInput] = useState(FocusInput.startDate);
    const [isMonthYearSelection, setIsMonthYearSelection] = useState(false); //show Month/Year selection dropdown
    const [overrideDateForView, setOverrideDateForView] = useState<Moment | null>(null);
    const [yearFunc, setYearFunc] = useState(null);

    const renderMonth = useCallback(
      ({
        month,
        onYearSelect
      }: {
        month: moment.Moment;
        onYearSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
      }) => {
        if (!yearFunc && onYearSelect) {
          setYearFunc(() => onYearSelect);
        }
        return (
          <DatePickerHeaderComponent
            data-testid={dataTestId || getTestId(ComponentDefaultTestId.DATEPICKER_HEADER, id)}
            currentDate={month || moment()}
            isMonthYearSelection={isMonthYearSelection}
            onToggleMonthYearPicker={() => setIsMonthYearSelection(val => !val)}
            hideNavigationKeys={hideNavigationKeys}
          />
        );
      },
      [isMonthYearSelection, dataTestId, id, hideNavigationKeys, yearFunc]
    );

    const renderDay = useCallback(
      (day: Moment) => {
        const weekNumber = firstDayOfWeek === 0 ? day.clone().add(1, "d").isoWeek() : day.isoWeek();
        return (
          <>
            <span className={styles.calendarDayWeekNumber}>{weekNumber}</span> {day.format("D")}
          </>
        );
      },
      [firstDayOfWeek]
    );

    const changeCurrentDateFromMonthYearView = useCallback(
      (newDate: Moment | null) => {
        const oldDate = overrideDateForView || date;
        setOverrideDateForView(newDate);
        setIsMonthYearSelection(false);
        yearFunc(oldDate, moment(newDate).year());
      },
      [overrideDateForView, date, yearFunc]
    );

    const renderMonthYearSelection = useCallback(() => {
      return (
        <YearPicker
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.DATEPICKER_YEAR_SELECTION, id)}
          selectedDate={date}
          isYearBlocked={shouldBlockYear}
          changeCurrentDate={changeCurrentDateFromMonthYearView}
        />
      );
    }, [dataTestId, id, overrideDateForView, date, shouldBlockYear, changeCurrentDateFromMonthYearView]);

    const onDateRangeChange = useCallback(
      (date: RangeDate) => {
        if (!onPickDate) return;
        if (focusedInput === FocusInput.startDate) {
          onPickDate({ ...date, endDate: null });
        } else {
          onPickDate(date);
        }
      },
      [focusedInput, onPickDate]
    );

    const onFocusChange = useCallback((focusedInput: FocusInput) => {
      setFocusedInput(focusedInput || FocusInput.startDate);
    }, []);

    const mergedPhrases = { ...defaultPhrases, ...phrases };

    const shouldShowNav = !hideNavigationKeys && !isMonthYearSelection;
    return (
      <div
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.DATEPICKER, id)}
        ref={ref}
        id={id}
        className={cx(styles.datepickerContainer, className, {
          [styles.withWeekNumber]: showWeekNumber,
          [styles.rangePickerMode]: range,
          [styles.monthYearSelection]: isMonthYearSelection
        })}
      >
        {range ? (
          <DayPickerRangeController
            phrases={mergedPhrases}
            renderDayContents={showWeekNumber ? renderDay : undefined}
            firstDayOfWeek={firstDayOfWeek}
            hideKeyboardShortcutsPanel
            startDate={date}
            endDate={endDate}
            onDatesChange={onDateRangeChange}
            focusedInput={focusedInput}
            minimumNights={0}
            onFocusChange={onFocusChange}
            navPrev={shouldShowNav ? <DateNavigationItem kind={Direction.prev} /> : <div />}
            navNext={shouldShowNav ? <DateNavigationItem kind={Direction.next} /> : <div />}
            daySize={daySize}
            isOutsideRange={shouldBlockRange}
            isDayBlocked={shouldBlockDay}
            renderMonthElement={renderMonth}
            enableOutsideDays={enableOutsideDays || showWeekNumber}
            numberOfMonths={numberOfMonths}
            initialVisibleMonth={() => overrideDateForView || date || moment()}
          />
        ) : (
          <DayPickerSingleDateController
            phrases={mergedPhrases}
            renderDayContents={showWeekNumber ? renderDay : undefined}
            firstDayOfWeek={firstDayOfWeek}
            hideKeyboardShortcutsPanel
            onFocusChange={NOOP}
            numberOfMonths={numberOfMonths}
            date={date}
            onDateChange={(date: Moment) => onPickDate(date)}
            navPrev={shouldShowNav ? <DateNavigationItem kind={Direction.prev} /> : <div />}
            navNext={shouldShowNav ? <DateNavigationItem kind={Direction.next} /> : <div />}
            focused={true}
            renderMonthElement={renderMonth}
            enableOutsideDays={enableOutsideDays || showWeekNumber}
            daySize={daySize}
            isDayBlocked={shouldBlockDay}
            initialVisibleMonth={() => overrideDateForView || date || moment()}
          />
        )}
        {isMonthYearSelection && renderMonthYearSelection()}
      </div>
    );
  }
);

export default DatePicker;
