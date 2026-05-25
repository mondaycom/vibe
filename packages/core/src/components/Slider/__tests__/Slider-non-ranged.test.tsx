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

it("a. Non-ranged Slider: basic renderer", async () => {
  const { asFragment } = await renderSliderInNonRangeMode();
  expect(asFragment().firstChild).toMatchSnapshot();
});

describe("b. Non-ranged Slider Active/Inactive", () => {
  it("01. show Tooltip when hover Thumb", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode();
      userEvent.hover(elThumb);
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("02. hide Tooltip when unhover Thumb", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode();
      userEvent.hover(elThumb);
      vi.advanceTimersByTime(999);
      userEvent.unhover(elThumb);
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("03. activate Thumb by Tab key press", async () => {
    let result;
    await act(async () => {
      const { asFragment } = await renderSliderInNonRangeMode();
      userEvent.tab();
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("04. de-activate Thumb by Tab key press, when Thumb focused", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode();
      elThumb.focus();
      userEvent.tab();
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });
});

describe("c. Non-ranged Slider Key Events", () => {
  it("01. decrease value by Left/Down keys press", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({ showValue: true });
      elThumb.focus();
      userEvent.keyboard("{arrowleft}");
      userEvent.keyboard("{arrowdown}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("02. increase value by Right/Up keys press", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({ showValue: true });
      elThumb.focus();
      userEvent.keyboard("{arrowright}");
      userEvent.keyboard("{arrowup}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("03. decrease value (step 10%) by PageDown key press", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({ showValue: true });
      elThumb.focus();
      userEvent.keyboard("{pagedown}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("04. increase value (step 10%) by PageUp key pres", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({ showValue: true });
      elThumb.focus();
      userEvent.keyboard("{pageup}");
      userEvent.keyboard("{pageup}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("05. change value by keys press in Step and Label mode", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({
        indicateSelection: true,
        showValue: true,
        step: 10
      });
      elThumb.focus();
      await userEvent.keyboard("{arrowright}");
      await userEvent.keyboard("{arrowright}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });
});
