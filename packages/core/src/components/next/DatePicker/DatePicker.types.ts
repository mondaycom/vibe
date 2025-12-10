import type { VibeComponentProps } from "@vibe/shared";
import type { Intent } from "./utils";

interface DatePickerBaseProps extends VibeComponentProps {
  mode?: "single" | "range";
  date: Date | undefined;
  endDate?: Date | undefined;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  showWeekNumber?: boolean;
  isDateDisabled?: (date: Date) => boolean;
  locale?: Locale;
  monthSelectionAriaLabel?: string;
  yearSelectionAriaLabel?: string;
  nextButtonAriaLabel?: string;
  prevButtonAriaLabel?: string;
  dayClassName?: string;
  selectedDayClassName?: string;
  dropdownsClassName?: string;
  intent?: Intent;
  dialogContainerSelector?: string;
}

interface DatePickerSingleProps extends DatePickerBaseProps {
  mode?: "single";
  onDateChange: (date: Date | undefined) => void;
}

export type DatePickerRange = {
  date: Date | undefined;
  endDate: Date | undefined;
};

interface DatePickerRangeProps extends DatePickerBaseProps {
  mode: "range";
  onDateChange: (range: DatePickerRange) => void;
}

export type DatePickerProps = DatePickerSingleProps | DatePickerRangeProps;
