import React, { type FC, useCallback, useMemo } from "react";
import cx from "classnames";
import { useDayPicker, useNavigation } from "react-day-picker";
import { IconButton } from "@vibe/icon-button";
import { Flex } from "@vibe/layout";
import Dropdown from "../../next/Dropdown/Dropdown";
import { DropdownChevronRight, DropdownChevronLeft } from "@vibe/icons";
import styles from "./DatePickerHeader.module.scss";
import { useMonthsOptionItems, useYearsOptionItems, type DatePickerDropdownItem } from "./datePickerHooks";
import { format, type Locale } from "date-fns";

export interface DatePickerHeaderProps {
  setDisplayMonth: (displayMonth: Date) => void;
  monthSelectionAriaLabel?: string;
  yearSelectionAriaLabel?: string;
  nextButtonAriaLabel?: string;
  prevButtonAriaLabel?: string;
  locale?: Locale;
  className?: string;
  dropdownsClassName?: string;
  dialogContainerSelector?: string;
}

const DatePickerHeader: FC<DatePickerHeaderProps> = ({
  setDisplayMonth,
  monthSelectionAriaLabel,
  yearSelectionAriaLabel,
  nextButtonAriaLabel,
  prevButtonAriaLabel,
  locale,
  className,
  dialogContainerSelector: _dialogContainerSelector
}) => {
  const { month: displayMonth } = useDayPicker();
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  const goToNextMonth = useCallback(() => goToMonth(nextMonth), [goToMonth, nextMonth]);
  const goToPreviousMonth = useCallback(() => goToMonth(previousMonth), [goToMonth, previousMonth]);
  const monthsData = useMonthsOptionItems({ locale });
  const yearsData = useYearsOptionItems({ locale });

  const months = useMemo(() => monthsData.map(item => ({ ...item, value: item.id })), [monthsData]);
  const years = useMemo(() => yearsData.map(item => ({ ...item, value: item.id })), [yearsData]);
  const monthButtonLabel = useMemo(() => getMonthButtonLabel(displayMonth, locale), [displayMonth, locale]);
  const yearsButtonLabel = useMemo(() => getYearButtonLabel(displayMonth, locale), [displayMonth, locale]);

  const onMonthSelect = useCallback(
    (option: DatePickerDropdownItem) => {
      const month = option.value;
      const date = new Date(displayMonth);
      date.setMonth(+month);
      setDisplayMonth(date);
    },
    [displayMonth, setDisplayMonth]
  );

  const onYearSelect = useCallback(
    (option: DatePickerDropdownItem) => {
      const year = option.value;
      const date = new Date(displayMonth);
      date.setFullYear(+year);
      setDisplayMonth(date);
    },
    [displayMonth, setDisplayMonth]
  );

  const selectedMonth = useMemo(
    () => months.find(month => month.value === displayMonth.getMonth().toString()),
    [months, displayMonth]
  );
  const selectedYear = useMemo(
    () => years.find(year => year.value === displayMonth.getFullYear().toString()),
    [years, displayMonth]
  );

  return (
    <div className={cx(styles.datePickerHeader, className)}>
      <Flex gap="small">
        <Dropdown
          className={styles.monthButtonDropdown}
          ariaLabel={monthSelectionAriaLabel}
          options={months}
          value={selectedMonth}
          onChange={onMonthSelect}
          menuWrapperClassName={styles.monthButtonDropdown}
          size="small"
          valueRenderer={(_option: DatePickerDropdownItem) => monthButtonLabel}
          searchable={false}
          clearable={false}
          borderless
        />
        <Dropdown
          className={styles.yearButtonDropdown}
          ariaLabel={yearSelectionAriaLabel}
          options={years}
          value={selectedYear}
          onChange={onYearSelect}
          menuWrapperClassName={styles.yearButtonDropdown}
          size="small"
          valueRenderer={(_option: DatePickerDropdownItem) => yearsButtonLabel}
          searchable={false}
          clearable={false}
          borderless
        />
      </Flex>
      <Flex>
        <IconButton
          kind="tertiary"
          size="small"
          ariaLabel={prevButtonAriaLabel}
          onClick={goToPreviousMonth}
          icon={DropdownChevronLeft}
        />
        <IconButton
          kind="tertiary"
          size="small"
          ariaLabel={nextButtonAriaLabel}
          onClick={goToNextMonth}
          icon={DropdownChevronRight}
        />
      </Flex>
    </div>
  );
};

export default DatePickerHeader;

export function getYearButtonLabel(displayMonth: Date, locale: Locale) {
  return format(displayMonth, "yyyy", { locale });
}

export function getMonthButtonLabel(displayMonth: Date, locale: Locale) {
  return format(displayMonth, "MMM", { locale });
}
