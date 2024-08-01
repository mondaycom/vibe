import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
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
  let dateNowSpy: jest.SpyInstance;

  beforeEach(() => {
    dateNowSpy = jest.spyOn(Date, "now").mockImplementation(() => new Date("2023-05-01").getTime());
  });

  afterEach(() => {
    dateNowSpy.mockRestore();
  });

  it("should call onPickDate date clicked value", () => {
    const onSaveMock = jest.fn();
    const { container } = render(
      <DatePicker
        onPickDate={() => {
          onSaveMock();
        }}
      />
    );

    const element = container.querySelector(".CalendarDay");
    fireEvent.click(element);
    expect(onSaveMock).toHaveBeenCalledTimes(1);
  });

  it("should call onPickDate with today's date", () => {
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

    fireEvent.click(element);

    expect(today.format(DATE_FORMAT)).toBe(selectedDate.format(DATE_FORMAT));
  });

  it("should call onPickDate with range date", () => {
    const selectedRange: RangeDate = { startDate: null, endDate: null };
    const { container } = render(
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
    const tomorrowElement = todayElement.nextElementSibling;

    fireEvent.click(todayElement);
    fireEvent.click(tomorrowElement);

    expect(today.format(DATE_FORMAT)).toBe(selectedRange.startDate.format(DATE_FORMAT));
    expect(tomorrow.format(DATE_FORMAT)).toBe(selectedRange.endDate.format(DATE_FORMAT));
  });

  it("should render 2 months", () => {
    const { container } = render(<DatePicker range numberOfMonths={2} />);
    const monthsElements = container.getElementsByClassName("CalendarMonth");

    expect(monthsElements.length).toBe(4);
  });

  it("Should open an year selection dropdown", () => {
    const { container } = render(<DatePicker data-testid="date-picker" />);
    const toggleButtonElement = container.querySelector("button[data-testid='date-picker-year-toggle']");

    fireEvent.click(toggleButtonElement);

    const yearSelectionElement = container.querySelector("div[data-testid='date-picker-year-picker']");
    expect(yearSelectionElement).not.toBe(null);
  });

  it("Should display new dates according to year selection", async () => {
    const dateSelected = moment("2023-05-01");
    const { container } = render(<DatePicker date={dateSelected} data-testid="date-picker" />);
    const toggleButtonElement = container.querySelector("button[data-testid='date-picker-year-toggle']");

    fireEvent.click(toggleButtonElement);

    const newYear = await waitFor(() => container.querySelector(".pickerOption"));
    fireEvent.click(newYear);

    const newDay = await waitFor(() => container.querySelector(".CalendarDay_1"));
    expect(newDay).toBeInTheDocument();
    expect(newDay.getAttribute("aria-label")).toContain(newYear.innerHTML);
  });
});
