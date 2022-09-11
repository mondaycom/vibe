import React, { useState } from "react";
import moment from "moment";
import times from "lodash/times";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import Button from "../../Button/Button";
import { PREV, NEXT, YEAR_FORMAT } from "../DatePickerConstants";
import DateNavigationItemComponent from "../DateNavigationItem/DateNavigationItem";
import "./YearPicker.scss";

const NOOP = () => { };

const transitionOptions = {
  classNames: "slide-down",
  timeout: { enter: 400, exit: 400 }
};

const PAGE_SIZE = 18;
const BUFFER_FROM_CURRENT_YEAR = 4;

interface YearPickerProps {
  selectedDate?: moment.Moment
  isRange: boolean
  isYearBlocked?: (year: number) => boolean
  changeCurrentDate: (date: moment.Moment) => void
}

const YearPicker = (props: YearPickerProps) => {

  const calcNewYearsPage = (firstYearInPage)  => {
    return times(PAGE_SIZE, n => firstYearInPage + n);
  }

  const { selectedDate, isRange, isYearBlocked, changeCurrentDate } = props;
  const selectedYear = selectedDate ? selectedDate.format(YEAR_FORMAT) : moment().format(YEAR_FORMAT);

  const [yearsToDisplay, setYearsToDisplay] = useState(calcNewYearsPage(parseInt(selectedYear) - BUFFER_FROM_CURRENT_YEAR))

  const onYearNavigationClick = (direction) => {
    const firstYearInPage = yearsToDisplay[0];
    let newYearsArray: any = [];

    if (direction === PREV) {
      newYearsArray = calcNewYearsPage(firstYearInPage - PAGE_SIZE);
    } else if (direction === NEXT) {
      newYearsArray = calcNewYearsPage(firstYearInPage + PAGE_SIZE);
    }
    setYearsToDisplay(newYearsArray)
  }

  const onYearSelect = (year) => {
    changeCurrentDate(moment().year(year));
  }

  const renderYears = () => {

    const listItems = yearsToDisplay.map(currYear => {
      const shouldBlockYear = isYearBlocked && isYearBlocked(currYear);
      const onClick = !shouldBlockYear ? () => onYearSelect(currYear) : NOOP;
      const kind = parseInt(selectedYear, 10) === parseInt(currYear, 10) ? Button?.kinds?.PRIMARY : Button?.kinds?.TERTIARY;

      return (
        <Button kind={kind} onClick={onClick} disabled={shouldBlockYear} marginLeft marginRight>
          {currYear}
        </Button>
      );
    });

    return listItems;
  }

  const wrapperClasses = classnames("date-month-year-picker-component-wrapper", {
    "is-range": isRange
  });

  return (
    <div className={wrapperClasses}>
      <div>
        <div className="navigation navigation-left">
          <DateNavigationItemComponent kind={PREV} onClick={() => onYearNavigationClick(PREV)} />
        </div>
        <div className="navigation navigation-right">
          <DateNavigationItemComponent kind={NEXT} onClick={() => onYearNavigationClick(NEXT)} />
        </div>
      </div>
      <CSSTransition {...transitionOptions} in appear>
        <div className="date-month-year-picker-options">{renderYears()}</div>
      </CSSTransition>
    </div>
  )
}

export default YearPicker;