import React from "react";
import { act, fireEvent, render } from "@testing-library/react";
import DatePicker from "../DatePicker";
import moment, { Moment } from "moment";
import { RangeDate } from "../types";

const DATE_FORMAT = "DD/MM/YYYY";

export function getFirstDayOfMonthElement(container: HTMLElement) {
  const days = container.getElementsByClassName("CalendarDay");
  return days && days.length ? days[0] : null;
}

export function getNextWeekFirstDayElement(pivotElement: HTMLElement) {
  const nextWeek = pivotElement.parentElement.nextElementSibling;
  const days = nextWeek.getElementsByClassName("CalendarDay");
  return days && days.length ? days[0] : null;
}

describe("DatePicker", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it.skip("Should call onPickDate date clicked value", () => {
    const onSaveMock = jest.fn();
    const { container } = render(
      <DatePicker
        onPickDate={() => {
          onSaveMock();
        }}
      />
    );

    const element = container.querySelector(".CalendarDay");
    act(() => {
      fireEvent.click(element);
    });
    expect(onSaveMock.mock.calls.length).toBe(1);
  });

  it.skip("Should call onPickDate with today date", () => {
    let selectedDate: Moment;
    const { container } = render(
      <DatePicker
        onPickDate={date => {
          selectedDate = date as Moment;
        }}
      />
    );
    const today = moment();
    const element = container.querySelector(".CalendarDay__today");
    act(() => {
      fireEvent.click(element);
    });
    expect(selectedDate).toBeDefined();
    if (selectedDate) {
      expect(today.format(DATE_FORMAT)).toBe(selectedDate.format(DATE_FORMAT));
    }
  });

  it("Should call onPickDate with range date", () => {
    const selectedRange: RangeDate = { startDate: null, endDate: null };
    const { container, getByLabelText } = render(
      <DatePicker
        range
        onPickDate={(range: RangeDate) => {
          selectedRange.startDate = range.startDate || selectedRange.startDate;
          selectedRange.endDate = range.endDate || selectedRange.endDate;
        }}
      />
    );
    const today = moment();
    const tomorrow = moment().add(1, "days");

    const todayElement = container.querySelector(".CalendarDay__today") as HTMLElement;
    let tomorrowElement = todayElement.nextElementSibling;

    act(() => {
      fireEvent.click(todayElement);
      jest.advanceTimersByTime(500);
      // First day next month if today is last day of the month
      if (
        today.startOf("day").isSame(moment().endOf("month").startOf("day")) &&
        tomorrowElement &&
        !tomorrowElement.className
      ) {
        const nextMonthNavigationButton = getByLabelText("Move forward to switch to the next month.");
        fireEvent.click(nextMonthNavigationButton);
        jest.advanceTimersByTime(1000);
        fireEvent.click(nextMonthNavigationButton);
        jest.advanceTimersByTime(1000);
        tomorrowElement = getFirstDayOfMonthElement(container);
      }

      // First day next week if today is last day of the week
      if (todayElement.className.includes("CalendarDay__lastDayOfWeek_") && !tomorrowElement) {
        tomorrowElement = getNextWeekFirstDayElement(todayElement);
      }
      fireEvent.click(tomorrowElement);
    });
    expect(today.format(DATE_FORMAT)).toBe(selectedRange.startDate.format(DATE_FORMAT));
    expect(tomorrow.format(DATE_FORMAT)).toBe(selectedRange.endDate.format(DATE_FORMAT));
  });

  it.skip("Should render 2 month", () => {
    const { container } = render(<DatePicker range numberOfMonths={2} />);
    const monthsElements = container.getElementsByClassName("CalendarMonth");
    expect(monthsElements.length).toBe(4);
  });

  it.skip("Should open an year selection dropdown", () => {
    const { container } = render(<DatePicker data-testid="date-picker" />);
    const toggleButtonElement = container.querySelector("button[data-testid='date-picker-year-toggle']");
    act(() => {
      fireEvent.click(toggleButtonElement);
    });
    const yearSelectionElement = container.querySelector("div[data-testid='date-picker-year-picker']");
    expect(yearSelectionElement).not.toBe(null);
  });
});
