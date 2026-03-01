import { useMemo } from "react";
import { format, type Locale } from "date-fns";

export interface DatePickerDropdownItem {
  id: string;
  label: string;
  value: string;
}

const monthsIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const useMonthsOptionItems = ({ locale }: { locale?: Locale }) =>
  useMemo(
    () =>
      monthsIndexes.map(monthIndex => {
        const month = new Date();
        month.setMonth(monthIndex, 1);
        return { id: monthIndex.toString(), label: format(month, "LLL", { locale }) };
      }),
    [locale]
  );

// returns a list of all years from 100 years ago to 100 years in the future
const YEARS_AGO = 100;
const YEARS_IN_FUTURE = 100;
export const useYearsOptionItems = ({ locale }: { locale?: Locale }) =>
  useMemo(
    () =>
      Array.from({ length: YEARS_AGO + YEARS_IN_FUTURE + 1 }, (_, i) => {
        const date = new Date();
        date.setFullYear(date.getFullYear() - YEARS_AGO + i);
        return date;
      }).map(year => ({
        id: year.getFullYear().toString(),
        label: format(year, "yyyy", { locale })
      })),
    [locale]
  );
