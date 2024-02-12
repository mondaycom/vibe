import React, { forwardRef, useCallback, useState } from "react";
import cx from "classnames";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayOfWeekShape, DayPickerRangeController, DayPickerSingleDateController } from "react-dates";
import DatePickerHeaderComponent from "./DatePickerHeader/DatePickerHeader";
import DateNavigationItem from "./DateNavigationItem/DateNavigationItem";
import YearPicker from "./YearPicker/YearPicker";
import { DAY_SIZE, WEEK_FIRST_DAY } from "./constants";
import { Direction, FocusInput, Moment, RangeDate } from "./types";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { NOOP } from "../../utils/function-utils";
import styles from "./DatePicker.module.scss";

interface DatePickerProps extends VibeComponentProps {
  /** set the first day of the week to display */
  firstDayOfWeek?: DayOfWeekShape;
  /** current start date */
  date?: Moment;
  /** current end date */
  endDate?: Moment;
  /** on date selected callback */
  onPickDate?: (date: Moment | RangeDate) => void;
  /** hide the month navigations keys */
  hideNavigationKeys?: boolean;
  /** show days outside the cuurent month view */
  enableOutsideDays?: boolean;
  /** show week number column */
  showWeekNumber?: boolean;
  /** set the size of single day element */
  daySize?: number;
  /** determine if day should be disabled */
  shouldBlockDay?: (date: Moment) => boolean;
  /** date range mode*/
  range?: boolean;
  /** number of month to display*/
  numberOfMonths?: number;
  /** determine if year should be disabled */
  shouldBlockYear?: (year: number) => boolean;
  /** determine if date range should be disabled */
  shouldBlockRange?: (date: Moment) => boolean;
}

const DatePicker: VibeComponent<DatePickerProps, HTMLElement> = forwardRef<HTMLDivElement, DatePickerProps>(
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
      "data-testid": dataTestId
    },
    ref
  ) => {
    const [focusedInput, setFocusedInput] = useState(FocusInput.startDate);
    const [isMonthYearSelection, setIsMonthYearSelection] = useState(false); //show Month/Year selection dropdown
    const [overrideDateForView, setOverrideDateForView] = useState<Moment | null>(null);

    const renderMonth = useCallback(
      ({ month }: { month: Moment }) => {
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
      [dataTestId, isMonthYearSelection, hideNavigationKeys, id]
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

    const changeCurrentDateFromMonthYearView = useCallback((date: Moment | null) => {
      setOverrideDateForView(date);
      setIsMonthYearSelection(false);
    }, []);

    const renderMonthYearSelection = useCallback(() => {
      return (
        <YearPicker
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.DATEPICKER_YEAR_SELECTION, id)}
          selectedDate={date}
          isYearBlocked={shouldBlockYear}
          changeCurrentDate={changeCurrentDateFromMonthYearView}
        />
      );
    }, [dataTestId, shouldBlockYear, changeCurrentDateFromMonthYearView, date, id]);

    const onDateRangeChange = useCallback(
      (date: RangeDate) => {
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
            key={`${overrideDateForView?.toString()}`}
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
            key={`${overrideDateForView?.toString()}`}
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
