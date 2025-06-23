import { vi, describe, it, expect } from "vitest";
import React from "react";
import { act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderSliderInRangeMode } from "./sliderTestUtils.jsx";

vi.useFakeTimers();

vi.mock("../../TextField/TextField", () => ({
  default: props => {
    return <div data-testid="mock-text-field-comp">{JSON.stringify(props)}</div>;
  }
}));

it("a. Ranges Slider: basic renderer", async () => {
  const { asFragment } = await renderSliderInRangeMode();
  expect(asFragment().firstChild).toMatchSnapshot();
});

describe("b. Ranges Slider Active/Inactive", () => {
  it("01. show Tooltip when hover Start Thumb", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode();
      userEvent.hover(elThumbStart);
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("02. show Tooltip when hover End Thumb", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumbEnd } = await renderSliderInRangeMode();
      userEvent.hover(elThumbEnd);
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("03. hide Tooltip when unhover Thumb", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode();
      userEvent.hover(elThumbStart);
      vi.advanceTimersByTime(999);
      userEvent.unhover(elThumbStart);
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("04. activate Start Thumb by Tab key press", async () => {
    let result;
    await act(async () => {
      const { asFragment } = await renderSliderInRangeMode();
      userEvent.tab();
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("05. activate End Thumb by Tab key press", async () => {
    let result;
    await act(async () => {
      const { asFragment } = await renderSliderInRangeMode();
      userEvent.tab();
      vi.advanceTimersByTime(999);
      userEvent.tab();
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("06. de-activate Thumb by Tab key press, when End Thumb focused", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumbEnd } = await renderSliderInRangeMode();
      elThumbEnd.focus();
      userEvent.tab();
      vi.advanceTimersByTime(999);
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });
});

describe("c. Ranges Slider Key Events", () => {
  it("01. decrease value by Left/Down keys press", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode({ showValue: true });
      elThumbStart.focus();
      userEvent.keyboard("{arrowleft}");
      userEvent.keyboard("{arrowdown}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("02. increase value by Right/Up keys press", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumbEnd } = await renderSliderInRangeMode({ showValue: true });
      elThumbEnd.focus();
      userEvent.keyboard("{arrowright}");
      userEvent.keyboard("{arrowup}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("03. decrease value (step 10%) by PageDown key press", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumbEnd } = await renderSliderInRangeMode({ showValue: true });
      elThumbEnd.focus();
      userEvent.keyboard("{pagedown}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("04. increase value (step 10%) by PageUp key pres", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode({ showValue: true });
      elThumbStart.focus();
      userEvent.keyboard("{pageup}");
      userEvent.keyboard("{pageup}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });

  it("05. change value by keys press in Step and Label mode", async () => {
    let result;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode({
        indicateSelection: true,
        showValue: true,
        step: 10
      });
      elThumbStart.focus();
      await userEvent.keyboard("{arrowright}");
      await userEvent.keyboard("{arrowright}");
      result = asFragment().firstChild;
    });
    expect(result).toMatchSnapshot();
  });
});
