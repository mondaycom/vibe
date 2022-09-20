import React, { useState, forwardRef } from "react";
import cx from "classnames";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerSingleDateController, DayPickerRangeController, DayOfWeekShape } from "react-dates";
import DatePickerHeaderComponent from "./DatePickerHeader/DatePickerHeader";
import DateNavigationItem from "./DateNavigationItem/DateNavigationItem";
import YearPicker from "./YearPicker/YearPicker";
import { DAY_SIZE, WEEK_FIRST_DAY } from "./constants";
import { Moment, FocusInput, Direction, RangeDate } from "./types";
import styles from "./DatePicker.module.scss";
import "react-dates/initialize";
interface DatePickerProps {
  id?: string;
  className?: string;
  firstDayOfWeek: DayOfWeekShape;
  date?: Moment;
  endDate?: Moment;
  onPickDate: (date: Moment | RangeDate) => void;
  hideNavigationKeys: boolean;
  enableOutsideDays: boolean;
  showWeekNumber: boolean;
  daySize: number;
  shouldBlockDay?: (date: Moment) => boolean;
  range: boolean;
  numberOfMonths: number;
  shouldBlockYear?: (year: number) => boolean;
  isOutsideRange?: (date: Moment) => boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};

const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<unknown>> = forwardRef<
  HTMLDivElement,
  DatePickerProps
>(
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
      isOutsideRange
    },
    ref
  ) => {
    const [focusedInput, setFocusedInput] = useState(FocusInput.startDate);
    const [isMonthYearSelection, setIsMonthYearSelection] = useState(false);
    const [overrideDateForView, setOverrideDateForView] = useState<Moment | null>(null);

    const renderMonth = ({ month }: { month: Moment }) => {
      return (
        <DatePickerHeaderComponent
          currentDate={month || moment()}
          isMonthYearSelection={isMonthYearSelection}
          onToggleMonthYearPicker={() => setIsMonthYearSelection(val => !val)}
          hideNavigationKeys={hideNavigationKeys}
        />
      );
    };

    const renderDay = (day: Moment) => {
      const weekNumber = firstDayOfWeek === 0 ? day.clone().add(1, "d").isoWeek() : day.isoWeek();
      return (
        <>
          <span className={styles.calendarDayWeekNumber}>{weekNumber}</span> {day.format("D")}
        </>
      );
    };

    const changeCurrentDateFromMonthYearView = (date: Moment | null) => {
      setOverrideDateForView(date);
      setIsMonthYearSelection(false);
    };

    const renderMonthYearSelection = () => {
      return (
        <YearPicker
          selectedDate={date}
          isYearBlocked={shouldBlockYear}
          changeCurrentDate={changeCurrentDateFromMonthYearView}
        />
      );
    };

    const onDateRangeChange = (date: RangeDate) => {
      if (focusedInput === FocusInput.startDate) {
        onPickDate({ ...date, endDate: null });
      } else {
        onPickDate(date);
      }
    };

    const shouldShowNav = !hideNavigationKeys && !isMonthYearSelection;
    return (
      <div
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
            onDatesChange={(date: RangeDate) => onDateRangeChange(date)}
            focusedInput={focusedInput}
            minimumNights={0}
            onFocusChange={(focusedInput: FocusInput) => setFocusedInput(focusedInput || FocusInput.startDate)}
            navPrev={shouldShowNav ? <DateNavigationItem kind={Direction.prev} /> : <div />}
            navNext={shouldShowNav ? <DateNavigationItem kind={Direction.next} /> : <div />}
            daySize={daySize}
            isOutsideRange={isOutsideRange}
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
