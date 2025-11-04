import React, { type FC, createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { type DateRange, DayPicker as ReactDatePicker, InternalModifier as DayModifier } from "react-day-picker";
import styles from "./DatePicker.module.scss";
import DatePickerHeader, { type DatePickerHeaderProps } from "./DatePickerHeader";
import { type DatePickerProps, type DatePickerRange } from "./DatePicker.types";
import {
  AddToRangeEnd,
  AddToRangeMiddle,
  AddToRangeStart,
  HalfRangeSelected,
  HoveredDayExists,
  RemoveFromRange,
  addToRange,
  addToRangeModifiers
} from "./utils";
import { RangeDayContent } from "./RangeDayContent";
import { SingleDayContent } from "./SingleDayContent";
import { DayContentHoverContext, DayContentHoverProvider } from "./DateContentHoverContext";

export const DEFAULT_TIME = { hours: 9, minutes: 0 };

const MODIFIERS_CLASS_NAMES = {
  [DayModifier.Outside]: styles.datePickerDayOutside,
  [DayModifier.Selected]: styles.datePickerDaySelected,
  [DayModifier.Today]: styles.datePickerDayToday,
  [DayModifier.Disabled]: styles.datePickerDayDisabled,
  [DayModifier.RangeStart]: styles.datePickerDayRangeStart,
  [DayModifier.RangeEnd]: styles.datePickerDayRangeEnd,
  [DayModifier.RangeMiddle]: styles.datePickerDayRangeMiddle,
  [AddToRangeMiddle]: styles.datePickerAddToRangeMiddle,
  [AddToRangeStart]: styles.datePickerAddToRangeStart,
  [AddToRangeEnd]: styles.datePickerAddToRangeEnd,
  [RemoveFromRange]: styles.datePickerRemoveFromRange,
  [HoveredDayExists]: styles.datePickerHoveredDayExists,
  [HalfRangeSelected]: styles.datePickerHalfRangeSelected
};

const DatePickerHeaderContext = createContext<DatePickerHeaderProps>({} as DatePickerHeaderProps);

const Caption = () => (
  <DatePickerHeaderContext.Consumer>{props => <DatePickerHeader {...props} />}</DatePickerHeaderContext.Consumer>
);

const DatePicker: FC<DatePickerProps> = ({
  className,
  dayClassName,
  selectedDayClassName,
  id,
  "data-testid": dataTestId,
  mode = "single",
  date,
  endDate,
  onDateChange,
  firstDayOfWeek = 0,
  showWeekNumber,
  isDateDisabled,
  locale,
  nextButtonAriaLabel = "Next",
  prevButtonAriaLabel = "Previous",
  monthSelectionAriaLabel = "Month",
  yearSelectionAriaLabel = "Year",
  dropdownsClassName,
  intent = "to",
  dialogContainerSelector,
  numberOfMonths = 1
}) => {
  const selected = useMemo(() => (mode === "single" ? date : { from: date, to: endDate }), [date, endDate, mode]);
  const [displayMonth, setDisplayMonth] = useState(date || new Date());

  const prevDateRef = useRef<Date | undefined>();
  const prevEndDateRef = useRef<Date | undefined>();
  const lastChangeByInnerSelection = useRef(false);
  useEffect(() => {
    const dateChanged = +prevDateRef.current !== +date;
    const endDateChanged = +prevEndDateRef.current !== +endDate;
    const shouldSetDisplayMonth = !lastChangeByInnerSelection.current;

    if (dateChanged) {
      shouldSetDisplayMonth && date && setDisplayMonth(date);
    } else if (endDateChanged) {
      shouldSetDisplayMonth && endDate && setDisplayMonth(endDate);
    }

    prevDateRef.current = date;
    prevEndDateRef.current = endDate;
    lastChangeByInnerSelection.current = false;
  }, [date, endDate]);

  const onPickerDateChange = useCallback(
    (newValue: Date | DateRange, selectedDay: Date) => {
      lastChangeByInnerSelection.current = true;

      if (mode === "range") {
        const newRange = addToRange(selectedDay, selected as DateRange, intent);
        (onDateChange as (range: DatePickerRange) => void)({ date: newRange?.from, endDate: newRange?.to });
      } else {
        const newDate = newValue as Date;
        const { hours, minutes } = date ? { hours: date.getHours(), minutes: date.getMinutes() } : DEFAULT_TIME;
        newDate.setHours(hours, minutes);
        (onDateChange as (date: Date | undefined) => void)(newDate);
      }
    },
    [date, intent, mode, onDateChange, selected]
  );

  const DatePickerHeaderContextValue = useMemo<DatePickerHeaderProps>(
    () => ({
      setDisplayMonth,
      locale,
      nextButtonAriaLabel,
      prevButtonAriaLabel,
      monthSelectionAriaLabel,
      yearSelectionAriaLabel,
      dropdownsClassName,
      dialogContainerSelector
    }),
    [
      locale,
      monthSelectionAriaLabel,
      nextButtonAriaLabel,
      setDisplayMonth,
      prevButtonAriaLabel,
      yearSelectionAriaLabel,
      dropdownsClassName,
      dialogContainerSelector
    ]
  );

  const modifiersClassNames = useMemo(
    () => ({
      ...MODIFIERS_CLASS_NAMES,
      [DayModifier.Selected]: cx(MODIFIERS_CLASS_NAMES[DayModifier.Selected], selectedDayClassName)
    }),
    [selectedDayClassName]
  );

  const classNames = useMemo(
    () => ({
      months: styles.datePickerMonths,
      head: styles.datePickerHead,
      table: styles.datePickerTable,
      tbody: styles.datePickerBody,
      day: cx(styles.datePickerDay, dayClassName)
    }),
    [dayClassName]
  );

  return (
    <div
      id={id}
      className={cx(styles.datePicker, { [styles.withWeekNumber]: showWeekNumber }, className)}
      data-testid={dataTestId}
      data-vibe="DatePicker"
    >
      <DayContentHoverProvider>
        <DatePickerHeaderContext.Provider value={DatePickerHeaderContextValue}>
          <DayContentHoverContext.Consumer>
            {({ hover }) => {
              const modifiers = addToRangeModifiers(hover, selected as DateRange, intent);
              return (
                <ReactDatePicker
                  fixedWeeks
                  showOutsideDays
                  showWeekNumber={showWeekNumber}
                  mode={mode as "single"} // cast to avoid type errors from ReactDatePicker
                  required
                  weekStartsOn={firstDayOfWeek}
                  disabled={isDateDisabled}
                  selected={selected as Date} // cast to avoid type errors from ReactDatePicker
                  onSelect={onPickerDateChange}
                  month={displayMonth}
                  onMonthChange={setDisplayMonth}
                  components={{ Caption, DayContent: mode === "single" ? SingleDayContent : RangeDayContent }}
                  classNames={classNames}
                  modifiers={modifiers}
                  modifiersClassNames={modifiersClassNames}
                  locale={locale}
                  numberOfMonths={numberOfMonths}
                />
              );
            }}
          </DayContentHoverContext.Consumer>
        </DatePickerHeaderContext.Provider>
      </DayContentHoverProvider>
    </div>
  );
};

export default DatePicker;
