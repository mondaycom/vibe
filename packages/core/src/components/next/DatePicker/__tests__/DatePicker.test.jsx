import { vi, afterEach, describe, it, expect } from "vitest";
import React from "react";
import { render, cleanup, screen, fireEvent, waitFor } from "@testing-library/react";
import { ja } from "date-fns/locale";
import DatePicker from "../DatePicker";

const renderDatePicker = props => {
  return render(<DatePicker {...props} />);
};

describe("DatePicker tests", () => {
  afterEach(() => {
    cleanup();
  });

  describe("snapshot tests", () => {
    it("renders correctly", () => {
      const { container } = renderDatePicker({ date: new Date(1992, 2, 17) });
      expect(container).toMatchSnapshot();
    });
  });

  it("should render correctly with date - 3/17/92", () => {
    renderDatePicker({ date: new Date(1992, 2, 17) });

    const selectedDay = screen.getByRole("gridcell", { name: "17" });
    expect(selectedDay).toHaveAttribute("aria-selected", "true");

    // Check that Mar is displayed in the month selector (abbreviated form)
    expect(screen.getByText("Mar")).toBeInTheDocument();

    // Check that 1992 is displayed in the year selector
    expect(screen.getByText("1992")).toBeInTheDocument();
  });

  it("should show date", () => {
    const date = new Date(1992, 2, 17);
    renderDatePicker({ date });

    // Check that day 17 is selected
    const selectedDay = screen.getByRole("gridcell", { name: "17" });
    expect(selectedDay).toHaveAttribute("aria-selected", "true");

    // Check that Mar and 1992 are displayed
    expect(screen.getByText("Mar")).toBeInTheDocument();
    expect(screen.getByText("1992")).toBeInTheDocument();
  });

  it("should change day of date", () => {
    const date = new Date(1992, 2, 17);
    const onDateChange = vi.fn();
    renderDatePicker({ date, onDateChange });

    // Click on day 20
    const day20 = screen.getByRole("gridcell", { name: "20" });
    fireEvent.click(day20);

    // Verify callback was called with the new date
    expect(onDateChange).toHaveBeenCalledWith(new Date(1992, 2, 20));
  });

  it("should open months picker and change displayed month", async () => {
    const date = new Date(1992, 2, 17);
    renderDatePicker({ date });

    // Click on the month combobox to open dropdown
    const monthCombobox = screen.getByRole("combobox", { name: "Month" });
    fireEvent.click(monthCombobox);

    // Wait for dropdown to open and click on April
    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Apr" })).toBeInTheDocument();
    });

    const aprilOption = screen.getByRole("option", { name: "April" });
    fireEvent.click(aprilOption);

    // Verify the month changed to Apr (abbreviated) and year stayed the same
    await waitFor(() => {
      expect(screen.getByText("Apr")).toBeInTheDocument();
      expect(screen.getByText("1992")).toBeInTheDocument();
    });
  });

  it("should open years picker and change displayed year", async () => {
    const date = new Date(1992, 2, 17);
    renderDatePicker({ date });

    // Click on the year combobox to open dropdown
    const yearCombobox = screen.getByRole("combobox", { name: "Year" });
    fireEvent.click(yearCombobox);

    // Wait for dropdown to open and click on 1993
    await waitFor(() => {
      expect(screen.getByRole("option", { name: "1993" })).toBeInTheDocument();
    });

    const year1993Option = screen.getByRole("option", { name: "1993" });
    fireEvent.click(year1993Option);

    // Verify the year changed to 1993 and month stayed the same (Mar)
    await waitFor(() => {
      expect(screen.getByText("1993")).toBeInTheDocument();
      expect(screen.getByText("Mar")).toBeInTheDocument();
    });
  });

  it("should support disabled days", () => {
    const date = new Date(1992, 2, 17);
    renderDatePicker({ date, isDateDisabled: d => d.getDate() === 18 });

    // Verify day 18 is disabled
    const day18 = screen.getByRole("gridcell", { name: "18" });
    expect(day18).toHaveAttribute("disabled");
    expect(day18).toHaveClass("datePickerDayDisabled");

    // Try to click on day 18 (should not work)
    fireEvent.click(day18);

    // Verify day 17 is still selected
    const selectedDay = screen.getByRole("gridcell", { name: "17" });
    expect(selectedDay).toHaveAttribute("aria-selected", "true");
  });

  it("should support locale", () => {
    const date = new Date(1992, 2, 17);
    renderDatePicker({ date, locale: ja });

    // Check that the month is displayed in Japanese
    expect(screen.getByText("3月")).toBeInTheDocument();
  });
});
