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

it("a. Ranges Slider: basic renderer", () => {
  const { asFragment } = renderSliderInRangeMode();
  expect(asFragment().firstChild).toMatchSnapshot();
});

describe("b. Ranges Slider Active/Inactive", () => {
  it("01. show Tooltip when hover Start Thumb", () => {
    const { asFragment, elThumbStart } = renderSliderInRangeMode();
    userEvent.hover(elThumbStart);
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("02. show Tooltip when hover End Thumb", () => {
    const { asFragment, elThumbEnd } = renderSliderInRangeMode();
    userEvent.hover(elThumbEnd);
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("03. hide Tooltip when unhover Thumb", () => {
    const { asFragment, elThumbStart } = renderSliderInRangeMode();
    userEvent.hover(elThumbStart);
    act(() => {
      vi.advanceTimersByTime(999);
    });
    userEvent.unhover(elThumbStart);
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("04. activate Start Thumb by Tab key press", () => {
    const { asFragment } = renderSliderInRangeMode();
    userEvent.tab();
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("05. activate End Thumb by Tab key press", () => {
    const { asFragment } = renderSliderInRangeMode();
    userEvent.tab();
    act(() => {
      vi.advanceTimersByTime(999);
    });
    userEvent.tab();
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("06. de-activate Thumb by Tab key press, when End Thumb focused", () => {
    const { asFragment, elThumbEnd } = renderSliderInRangeMode();
    elThumbEnd.focus();
    userEvent.tab();
    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});

describe("c. Ranges Slider Key Events", () => {
  it("01. decrease value by Left/Down keys press", () => {
    const { asFragment, elThumbStart } = renderSliderInRangeMode({ showValue: true });
    act(() => {
      elThumbStart.focus();
    });
    act(() => {
      userEvent.keyboard("{arrowleft}");
    });
    act(() => {
      userEvent.keyboard("{arrowdown}");
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("02. increase value by Right/Up keys press", () => {
    const { asFragment, elThumbEnd } = renderSliderInRangeMode({ showValue: true });
    act(() => {
      elThumbEnd.focus();
    });
    act(() => {
      userEvent.keyboard("{arrowright}");
    });
    act(() => {
      userEvent.keyboard("{arrowup}");
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("03. decrease value (step 10%) by PageDown key press", () => {
    const { asFragment, elThumbEnd } = renderSliderInRangeMode({ showValue: true });
    act(() => {
      elThumbEnd.focus();
    });
    act(() => {
      userEvent.keyboard("{pagedown}");
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("04. increase value (step 10%) by PageUp key pres", () => {
    const { asFragment, elThumbStart } = renderSliderInRangeMode({ showValue: true });
    act(() => {
      elThumbStart.focus();
    });
    act(() => {
      userEvent.keyboard("{pageup}");
    });
    act(() => {
      userEvent.keyboard("{pageup}");
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it("05. change value by keys press in Step and Label mode", () => {
    const { asFragment, elThumbStart } = renderSliderInRangeMode({
      indicateSelection: true,
      showValue: true,
      step: 10
    });
    act(() => {
      elThumbStart.focus();
    });
    act(() => {
      userEvent.keyboard("{arrowright}");
    });
    act(() => {
      userEvent.keyboard("{arrowright}");
    });
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
