import { vi, describe, it, expect } from "vitest";
import React from "react";
import { act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderSliderInNonRangeMode } from "./sliderTestUtils.jsx";

vi.useFakeTimers();

vi.mock("../../TextField/TextField", () => ({
  default: props => {
    return <div data-testid="mock-text-field-comp">{JSON.stringify(props)}</div>;
  }
}));

it("a. Non-ranged Slider: basic renderer", () => {
  const { asFragment } = renderSliderInNonRangeMode();
  expect(asFragment().firstChild).toMatchSnapshot();
});

describe("b. Non-ranged Slider Active/Inactive", () => {
  it("01. show Tooltip when hover Thumb", () => {
    const { asFragment, elThumb } = renderSliderInNonRangeMode();
    userEvent.hover(elThumb);
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("02. hide Tooltip when unhover Thumb", () => {
    const { asFragment, elThumb } = renderSliderInNonRangeMode();
    userEvent.hover(elThumb);
    act(() => {
      vi.advanceTimersByTime(999);
    });
    userEvent.unhover(elThumb);
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("03. activate Thumb by Tab key press", () => {
    const { asFragment } = renderSliderInNonRangeMode();
    userEvent.tab();
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("04. de-activate Thumb by Tab key press, when Thumb focused", () => {
    const { asFragment, elThumb } = renderSliderInNonRangeMode();
    elThumb.focus();
    userEvent.tab();
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});

describe("c. Non-ranged Slider Key Events", () => {
  it("01. decrease value by Left/Down keys press", () => {
    const { asFragment, elThumb } = renderSliderInNonRangeMode({ showValue: true });
    elThumb.focus();
    userEvent.keyboard("{arrowleft}");
    userEvent.keyboard("{arrowdown}");
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("02. increase value by Right/Up keys press", () => {
    const { asFragment, elThumb } = renderSliderInNonRangeMode({ showValue: true });
    elThumb.focus();
    userEvent.keyboard("{arrowright}");
    userEvent.keyboard("{arrowup}");
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("03. decrease value (step 10%) by PageDown key press", () => {
    const { asFragment, elThumb } = renderSliderInNonRangeMode({ showValue: true });
    elThumb.focus();
    userEvent.keyboard("{pagedown}");
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("04. increase value (step 10%) by PageUp key pres", () => {
    const { asFragment, elThumb } = renderSliderInNonRangeMode({ showValue: true });
    elThumb.focus();
    userEvent.keyboard("{pageup}");
    userEvent.keyboard("{pageup}");
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("05. change value by keys press in Step and Label mode", () => {
    const { asFragment, elThumb } = renderSliderInNonRangeMode({
      indicateSelection: true,
      showValue: true,
      step: 10
    });
    elThumb.focus();
    userEvent.keyboard("{arrowright}");
    userEvent.keyboard("{arrowright}");
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
