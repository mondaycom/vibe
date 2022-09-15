
import React, { useState, forwardRef, useRef } from 'react';
import classNames from "classnames";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
// @ts-ignore
import { DayPickerSingleDateController, DayPickerRangeController } from 'react-dates';
import DatePickerHeaderComponent from './DatePickerHeader/DatePickerHeader';
import DateNavigationItem from './DateNavigationItem/DateNavigationItem';
import YearPicker from './YearPicker/YearPicker';
import { DAY_SIZE, WEEK_FIRST_DAY } from './constants';
import { Moment, FocusInput, Direction, RangeDate } from './types';
import './DatePicker.scss';

interface DatePickerProps {
    id?: string
    className?: string
    firstDayOfWeek: number
    date?: Moment
    endDate?: Moment
    onPickDate: (date: Moment | RangeDate) => void
    hideNavigationKeys: boolean
    enableOutsideDays: boolean
    showWeekNumber: boolean
    daySize: number
    shouldBlockDay?: (date: Moment) => boolean
    range: boolean
    numberOfMonths: number,
    hideOutsideRange: boolean
    shouldBlockYear?: (year: number) => boolean
}

const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<unknown>> =
    forwardRef<unknown, DatePickerProps>(({
        id,
        className,
        firstDayOfWeek,
        daySize,
        range,
        shouldBlockDay,
        hideOutsideRange,
        shouldBlockYear,
        numberOfMonths,
        hideNavigationKeys,
        date,
        endDate,
        onPickDate,
        enableOutsideDays,
        showWeekNumber,
    }, ref) => {
        const [focusedInput, setFocusedInput] = useState(FocusInput.startDate)
        const [isMonthYearSelection, setIsMonthYearSelection] = useState(false);
        const [overrideDateForView, setOverrideDateForView] = useState<Moment | null>(null)

        const renderMonth = (currDate: Moment) => {
            return (
                <DatePickerHeaderComponent
                    currentDate={currDate || moment()}
                    isMonthYearSelection={isMonthYearSelection}
                    onToggleMonthYearPicker={() => setIsMonthYearSelection(val => !val)}
                    hideNavigationKeys={hideNavigationKeys}
                />
            );
        }

        const renderDay = (day: Moment) => {
            const weekNumber = firstDayOfWeek === 0 ? day.clone().add(1, 'd').isoWeek() : day.isoWeek();
            return (
                <>
                    <span className="CalendarDayWeekNumber">{weekNumber}</span> {day.format("D")}
                </>
            );
        }

        const isRangeSingleDateValid = () => {
            if (!range) {
                return false;
            }
            //checks if only start date selected and not end date.
            return date && !endDate;
        }

        const changeCurrentDateFromMonthYearView = (date: Moment | null) => {
            setOverrideDateForView(date)
            setIsMonthYearSelection(false)
        }

        const renderMonthYearSelection = () => {
            return (
                <YearPicker
                    selectedDate={date}
                    isRange={range}
                    isYearBlocked={shouldBlockYear}
                    changeCurrentDate={changeCurrentDateFromMonthYearView}
                />
            );
        }

        const onDateRangeChange = (date: RangeDate) => {
            if (focusedInput === FocusInput.startDate) {
                onPickDate({ ...date, endDate: null })
            }
            else {
                onPickDate(date)
            }
        }

        const shouldShowNav = !hideNavigationKeys && !isMonthYearSelection;
        return (
            <div id={id} className={classNames('datepicker--wrapper', className, {
                "with-week-number": showWeekNumber,
                "with-outside-days": enableOutsideDays,
                "hide-outside-range": hideOutsideRange,
                "range-picker-mode": range,
                "range-single-date-selected": isRangeSingleDateValid(),
                "month-year-selection": isMonthYearSelection,
            })}>
                {range ?
                    <DayPickerRangeController
                        ref={ref}
                        renderDay={showWeekNumber ? renderDay : undefined}
                        key={`${isMonthYearSelection}`}
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
                        isDayBlocked={shouldBlockDay}
                        renderMonth={renderMonth}
                        enableOutsideDays={enableOutsideDays || showWeekNumber}
                        numberOfMonths={numberOfMonths}
                        initialVisibleMonth={() => overrideDateForView || date || moment()}
                    />
                    :
                    <DayPickerSingleDateController
                        ref={ref}
                        firstDayOfWeek={firstDayOfWeek}
                        key={`${isMonthYearSelection}`}
                        hideKeyboardShortcutsPanel
                        numberOfMonths={numberOfMonths}
                        date={date}
                        onDateChange={(date: Moment) => onPickDate(date)}
                        navPrev={shouldShowNav ? <DateNavigationItem kind={Direction.prev} /> : <div />}
                        navNext={shouldShowNav ? <DateNavigationItem kind={Direction.next} /> : <div />}
                        focused
                        renderMonth={renderMonth}
                        enableOutsideDays={enableOutsideDays || showWeekNumber}
                        renderDay={showWeekNumber ? renderDay : undefined}
                        daySize={daySize}
                        isDayBlocked={shouldBlockDay}
                        initialVisibleMonth={() => overrideDateForView || date || moment()}
                    />
                }
                {isMonthYearSelection && renderMonthYearSelection()}
            </div>
        )
    });


DatePicker.defaultProps = {
    firstDayOfWeek: WEEK_FIRST_DAY,
    daySize: DAY_SIZE,
    numberOfMonths: 1,
    range: false,
    hideNavigationKeys: false,
    enableOutsideDays: false,
    showWeekNumber: false,
    hideOutsideRange: false

}

export default DatePicker;