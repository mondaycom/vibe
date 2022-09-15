import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, act, screen, tim } from "@testing-library/react";
import DatePicker from "../DatePicker";
import { getAllByText } from "@storybook/testing-library";
import moment from "moment";

const DATE_FORMAT = "DD/MM/YYYY";

describe("DatePicker", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  it("Should call onPickDate date clicked value", () => {
    const onSaveMock = jest.fn();
    const { container } = render(
      <DatePicker
        onPickDate={date => {
          onSaveMock();
        }}
      />
    );
    const today = moment();
    const element = container.querySelector(".CalendarDay__button");
    act(() => {
      fireEvent.click(element);
    });
    expect(onSaveMock.mock.calls.length).toBe(1);
  });

  it("Should call onPickDate with today date", () => {
    let selectedDate;
    const { container } = render(
      <DatePicker
        onPickDate={date => {
          selectedDate = date;
        }}
      />
    );
    const today = moment();
    console.log(today.format());
    const element = container.querySelector(".CalendarDay--today button");
    act(() => {
      fireEvent.click(element);
    });
    expect(today.format(DATE_FORMAT)).toBe(selectedDate.format(DATE_FORMAT));
  });

  it("Should call onPickDate with range date", () => {
    let selectedRange = {};
    const { container } = render(
      <DatePicker
        range
        onPickDate={range => {
          selectedRange.startDate = range.startDate || selectedRange.startDate;
          selectedRange.endDate = range.endDate || selectedRange.endDate;
        }}
      />
    );
    const today = moment();
    const tomorrow = moment().add(1, "days");

    const todayElement = container.querySelector(".CalendarDay--today button");
    const tomorrowElemnt = container.querySelector(".CalendarDay--today").nextElementSibling.childNodes[0];

    act(() => {
      fireEvent.click(todayElement);
      jest.advanceTimersByTime(500);
      fireEvent.click(tomorrowElemnt);
    });
    expect(today.format(DATE_FORMAT)).toBe(selectedRange.startDate.format(DATE_FORMAT));
    expect(tomorrow.format(DATE_FORMAT)).toBe(selectedRange.endDate.format(DATE_FORMAT));
  });

  it("Should render 2 month", () => {
    const { container } = render(<DatePicker range numberOfMonths={2} />);
    const monthsElements = container.getElementsByClassName('CalendarMonth')
    expect(monthsElements.length).toBe(4);
  });

  it("Should open an year selection dropdown", () => {
    const { container } = render(<DatePicker/>);
    const toggleButtonElemnt = container.querySelector('.date-picker-header-component-button-container')
    act(() => {
        fireEvent.click(toggleButtonElemnt);
      });
    const yearSelectionElement = container.querySelector('.date-month-year-picker-options')
    expect(yearSelectionElement).not.toBe(null);

  });
});
