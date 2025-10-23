import React from "react";
import { Button } from "@vibe/button";
import styles from "./YearPicker.module.scss";

const NOOP = () => {};

export interface YearsListProps {
  /**
   * The list of years to display.
   */
  yearsItems: number[];
  /**
   * Function to determine if a year should be blocked.
   */
  isYearBlocked?: (year: number) => boolean;
  /**
   * Callback fired when a year is selected.
   */
  onSelect: (year: number) => void;
  /**
   * The currently selected year.
   */
  selectedYear: string;
}

const YearsList = ({ yearsItems, isYearBlocked, onSelect, selectedYear }: YearsListProps) => {
  return (
    <>
      {yearsItems.map(currYear => {
        const shouldBlockYear = isYearBlocked && isYearBlocked(currYear);
        const onClick = !shouldBlockYear ? () => onSelect(currYear) : NOOP;
        const kind = parseInt(selectedYear, 10) === currYear ? Button?.kinds?.PRIMARY : Button?.kinds?.TERTIARY;

        return (
          <Button
            className={styles.pickerOption}
            key={currYear}
            kind={kind}
            onClick={onClick}
            disabled={shouldBlockYear}
            marginLeft
            marginRight
          >
            {currYear.toString()}
          </Button>
        );
      })}
    </>
  );
};

export default YearsList;
