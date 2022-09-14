
import React, { useState, forwardRef, useRef } from 'react';
import classNames from "classnames";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerSingleDateController, DayPickerRangeController } from 'react-dates';
import DatePickerHeaderComponent from './DatePickerHeader/DatePickerHeader';
import DateNavigationItem from './DateNavigationItem/DateNavigationItem';
import YearPicker from './YearPicker/YearPicker';
import { NEXT, PREV, START_DATE, DAY_SIZE, WEEK_FIRST_DAY } from './DatePickerConstants';
import './DatePicker.scss';
interface DatePickerProps {
    id?: string
    className?: string
    firstDayOfWeek: number
    date?: moment.Moment
    endDate?: moment.Moment
    onPickDate: (date: moment.Moment | { date: moment.Moment, endDate?: moment.Moment }) => void
    hideNavigationKeys: boolean
    enableOutsideDays: boolean
    showWeekNumber: boolean
    daySize: number
    shouldBlockDay?: (date: moment.Moment) => boolean
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
        const [focusedInput, setFocusedInput] = useState(range ? START_DATE : undefined)
        const [isMonthYearSelection, setIsMonthYearSelection] = useState(false);
        const [overrideDateForView, setOverrideDateForView] = useState<moment.Moment | null>(null)

        const renderMonth = (currDate: moment.Moment) => {
            return (
                <DatePickerHeaderComponent
                    currentDate={currDate || moment()}
                    isMonthYearSelection={isMonthYearSelection}
                    onToggleMonthYearPicker={() => setIsMonthYearSelection(val => !val)}
                    hideNavigationKeys={hideNavigationKeys}
                />
            );
        }

        const renderDay = (day: moment.Moment) => {
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

        const changeCurrentDateFromMonthYearView = (date: moment.Moment | null) => {
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

        const onDateRangeChange = (date) => {
            if (focusedInput === START_DATE) {
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
                        onDatesChange={(date) => onDateRangeChange(date)}
                        focusedInput={focusedInput}
                        minimumNights={0}
                        onFocusChange={(focusedInput) => setFocusedInput(focusedInput || START_DATE)}
                        navPrev={shouldShowNav ? <DateNavigationItem kind={PREV} /> : <div />}
                        navNext={shouldShowNav ? <DateNavigationItem kind={NEXT} /> : <div />}
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
                        onDateChange={(date) => onPickDate(date)}
                        navPrev={shouldShowNav ? <DateNavigationItem kind={PREV} /> : <div />}
                        navNext={shouldShowNav ? <DateNavigationItem kind={NEXT} /> : <div />}
                        focused
                        verticalSpacing={0}
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