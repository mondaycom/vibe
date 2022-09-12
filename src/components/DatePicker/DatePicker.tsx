
import React, { useState, forwardRef } from 'react';
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
    onPickDate: (date: moment.Moment) => void,
    hideNavigationKeys: boolean
    enableOutsideDays: boolean
    showWeekNumber: boolean
    daySize: number
    isOutsideRange?: (date: moment.Moment) => boolean
    isDayBlocked?: (date: moment.Moment) => boolean
    isRange: boolean
    minimumNights: number,
    numberOfMonths: number,
    hideOutsideRange: boolean
    isYearBlocked?: (year: number) => boolean
}

const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<unknown>> =
    forwardRef<unknown, DatePickerProps>(({
        id,
        className,
        firstDayOfWeek,
        daySize,
        isRange,
        isDayBlocked,
        hideOutsideRange,
        isYearBlocked,
        minimumNights,
        numberOfMonths,
        hideNavigationKeys,
        date,
        endDate,
        onPickDate,
        enableOutsideDays,
        showWeekNumber,
        isOutsideRange
    }, ref) => {
        const [focusedInput, setFocusedInput] = useState(isRange ? START_DATE : undefined)
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
            if (!isRange || minimumNights !== 0) {
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
                    isRange={isRange}
                    isYearBlocked={isYearBlocked}
                    changeCurrentDate={changeCurrentDateFromMonthYearView}
                />
            );
        }

        const shouldShowNav = !hideNavigationKeys && !isMonthYearSelection;

        return (
            <div id={id} className={classNames('datepicker--wrapper', className, {
                "with-week-number": showWeekNumber,
                "with-outside-days": enableOutsideDays,
                "hide-outside-range": hideOutsideRange,
                "range-picker-mode": isRange,
                "range-single-date-selected": isRangeSingleDateValid(),
                "month-year-selection": isMonthYearSelection
            })}>
                {isRange ?
                    <DayPickerRangeController
                        ref={ref}
                        renderDay={showWeekNumber ? renderDay : undefined}
                        key={`${isMonthYearSelection}`}
                        firstDayOfWeek={firstDayOfWeek}
                        hideKeyboardShortcutsPanel
                        startDate={date}
                        endDate={endDate}
                        onDatesChange={(date) => onPickDate(date)}
                        focusedInput={focusedInput}
                        onFocusChange={(focusedInput) => setFocusedInput(focusedInput || START_DATE)}
                        navPrev={shouldShowNav ? <DateNavigationItem kind={PREV} /> : <div />}
                        navNext={shouldShowNav ? <DateNavigationItem kind={NEXT} /> : <div />}
                        daySize={daySize}
                        isDayBlocked={isDayBlocked}
                        isOutsideRange={isOutsideRange}
                        renderMonth={renderMonth}
                        minimumNights={minimumNights}
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
                        renderMonth={renderMonth}
                        enableOutsideDays={enableOutsideDays || showWeekNumber}
                        renderDay={showWeekNumber ? renderDay : undefined}
                        daySize={daySize}
                        isOutsideRange={isOutsideRange}
                        isDayBlocked={isDayBlocked}
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
    minimumNights: 0,
    numberOfMonths: 1,
    isRange: false,
    hideNavigationKeys: false,
    enableOutsideDays: false,
    showWeekNumber: false,
    hideOutsideRange: false

}

export default DatePicker;