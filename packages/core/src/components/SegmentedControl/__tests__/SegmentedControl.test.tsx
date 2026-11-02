import { vi, beforeEach, describe, it, expect, type Mock } from "vitest";
import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SegmentedControl from "../SegmentedControl";

const defaultOptions = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" }
];

describe("SegmentedControl", () => {
  let onChangeMock: Mock;

  beforeEach(() => {
    onChangeMock = vi.fn();
  });

  it("renders all segment labels", () => {
    render(<SegmentedControl ariaLabel="View options" options={defaultOptions} defaultValue="week" />);

    expect(screen.getByRole("radio", { name: "Day" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Week" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Month" })).toBeInTheDocument();
  });

  it("selects a segment on click (uncontrolled)", () => {
    render(
      <SegmentedControl ariaLabel="View options" options={defaultOptions} defaultValue="week" onChange={onChangeMock} />
    );

    fireEvent.click(screen.getByRole("radio", { name: "Month" }));

    expect(onChangeMock).toHaveBeenCalledWith("month");
    expect(screen.getByRole("radio", { name: "Month" })).toHaveAttribute("aria-checked", "true");
  });

  it("supports controlled mode", () => {
    const Controlled = () => {
      const [value, setValue] = useState("week");
      return <SegmentedControl ariaLabel="View options" options={defaultOptions} value={value} onChange={setValue} />;
    };

    render(<Controlled />);

    fireEvent.click(screen.getByRole("radio", { name: "Day" }));
    expect(screen.getByRole("radio", { name: "Day" })).toHaveAttribute("aria-checked", "true");
  });

  it("does not select disabled segments", () => {
    render(
      <SegmentedControl
        ariaLabel="View options"
        options={[
          { value: "day", label: "Day" },
          { value: "week", label: "Week" },
          { value: "month", label: "Month", disabled: true }
        ]}
        defaultValue="week"
        onChange={onChangeMock}
      />
    );

    fireEvent.click(screen.getByRole("radio", { name: "Month" }));

    expect(onChangeMock).not.toHaveBeenCalled();
    expect(screen.getByRole("radio", { name: "Week" })).toHaveAttribute("aria-checked", "true");
  });

  it("disables all segments when group is disabled", () => {
    render(
      <SegmentedControl
        ariaLabel="View options"
        options={defaultOptions}
        defaultValue="week"
        disabled
        onChange={onChangeMock}
      />
    );

    expect(screen.getByRole("radiogroup")).toHaveAttribute("aria-disabled", "true");
    fireEvent.click(screen.getByRole("radio", { name: "Day" }));
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("selects with arrow keys", () => {
    render(
      <SegmentedControl ariaLabel="View options" options={defaultOptions} defaultValue="week" onChange={onChangeMock} />
    );

    const weekSegment = screen.getByRole("radio", { name: "Week" });
    fireEvent.keyDown(weekSegment, { key: "ArrowRight" });

    expect(onChangeMock).toHaveBeenCalledWith("month");
    expect(screen.getByRole("radio", { name: "Month" })).toHaveAttribute("aria-checked", "true");
  });

  it("skips disabled segments with arrow keys", () => {
    render(
      <SegmentedControl
        ariaLabel="View options"
        options={[
          { value: "day", label: "Day" },
          { value: "week", label: "Week", disabled: true },
          { value: "month", label: "Month" }
        ]}
        defaultValue="day"
        onChange={onChangeMock}
      />
    );

    fireEvent.keyDown(screen.getByRole("radio", { name: "Day" }), { key: "ArrowRight" });

    expect(onChangeMock).toHaveBeenCalledWith("month");
  });

  it("sets aria-label on the radiogroup", () => {
    render(<SegmentedControl ariaLabel="View options" options={defaultOptions} defaultValue="week" />);

    expect(screen.getByRole("radiogroup", { name: "View options" })).toBeInTheDocument();
  });

  it("sets data-vibe attribute", () => {
    render(<SegmentedControl ariaLabel="View options" options={defaultOptions} defaultValue="week" />);

    expect(screen.getByRole("radiogroup")).toHaveAttribute("data-vibe", "SegmentedControl");
  });
});
