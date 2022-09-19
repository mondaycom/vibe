import React, { useState } from "react";
import moment from "moment";
import times from "lodash/times";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import Button from "../../Button/Button";
import { YEAR_FORMAT } from "../constants";
import DateNavigationItemComponent from "../DateNavigationItem/DateNavigationItem";
import { Moment, Direction } from "../types";
import "./YearPicker.scss";

const transitionOptions = {
  classNames: "slide-down",
  timeout: { enter: 400, exit: 400 }
};

const PAGE_SIZE = 18;
const BUFFER_FROM_CURRENT_YEAR = 4;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};

interface YearPickerProps {
  selectedDate?: Moment;
  isRange: boolean;
  isYearBlocked?: (year: number) => boolean;
  changeCurrentDate: (date: Moment) => void;
}

const YearPicker = (props: YearPickerProps) => {
  const calcNewYearsPage = (firstYearInPage: number) => {
    return times(PAGE_SIZE, n => firstYearInPage + n);
  };

  const { selectedDate, isRange, isYearBlocked, changeCurrentDate } = props;
  const selectedYear = selectedDate ? selectedDate.format(YEAR_FORMAT) : moment().format(YEAR_FORMAT);

  const [yearsToDisplay, setYearsToDisplay] = useState(
    calcNewYearsPage(parseInt(selectedYear) - BUFFER_FROM_CURRENT_YEAR)
  );

  const onYearNavigationClick = (direction: Direction) => {
    const firstYearInPage = yearsToDisplay[0];
    let newYearsArray: number[] = [];
    if (direction === Direction.prev) {
      newYearsArray = calcNewYearsPage(firstYearInPage - PAGE_SIZE);
    } else if (direction === Direction.next) {
      newYearsArray = calcNewYearsPage(firstYearInPage + PAGE_SIZE);
    }
    setYearsToDisplay(newYearsArray);
  };

  const onYearSelect = (year: number) => {
    changeCurrentDate(moment().year(year));
  };

  const renderYears = () => {
    const listItems = yearsToDisplay.map(currYear => {
      const shouldBlockYear = isYearBlocked && isYearBlocked(currYear);
      const onClick = !shouldBlockYear ? () => onYearSelect(currYear) : NOOP;
      const kind = parseInt(selectedYear, 10) === currYear ? Button?.kinds?.PRIMARY : Button?.kinds?.TERTIARY;

      return (
        <Button key={currYear} kind={kind} onClick={onClick} disabled={shouldBlockYear} marginLeft marginRight>
          {currYear.toString()}
        </Button>
      );
    });

    return listItems;
  };

  const wrapperClasses = classnames("date-month-year-picker-component-wrapper", {
    "is-range": isRange
  });

  return (
    <div className={wrapperClasses}>
      <div>
        <div className="navigation navigation-left">
          <DateNavigationItemComponent kind={Direction.prev} onClick={() => onYearNavigationClick(Direction.prev)} />
        </div>
        <div className="navigation navigation-right">
          <DateNavigationItemComponent kind={Direction.next} onClick={() => onYearNavigationClick(Direction.next)} />
        </div>
      </div>
      <CSSTransition {...transitionOptions} in appear>
        <div className="date-month-year-picker-options">{renderYears()}</div>
      </CSSTransition>
    </div>
  );
};

export default YearPicker;
