import React from "react";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { snapshotDiff } from "../../../../jest/utils";
import { renderSliderInRangeMode } from "./slider-tests.utils";

jest.useFakeTimers();

jest.mock("../../TextField/TextField", () => {
  const TextField = props => {
    return <div data-testid="mock-text-field-comp">{JSON.stringify(props)}</div>;
  };
  return TextField;
});

it("a. Ranges Slider: basic renderer", async () => {
  const { asFragment } = await renderSliderInRangeMode();
  expect(asFragment().firstChild).toMatchSnapshot();
});

describe("b. Ranges Slider Active/Inactive", () => {
  it("01. show Tooltip when hover Start Thumb", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode();
      before = asFragment().firstChild;
      userEvent.hover(elThumbStart);
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("02. show Tooltip when hover End Thumb", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumbEnd } = await renderSliderInRangeMode();
      before = asFragment().firstChild;
      userEvent.hover(elThumbEnd);
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("03. hide Tooltip when unhover Thumb", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode();
      userEvent.hover(elThumbStart);
      jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      userEvent.unhover(elThumbStart);
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("04. activate Start Thumb by Tab key press ", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment } = await renderSliderInRangeMode();
      before = asFragment().firstChild;
      userEvent.tab();
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("05. activate End Thumb by Tab key press ", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment } = await renderSliderInRangeMode();
      userEvent.tab();
      jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      userEvent.tab();
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("06. de-activate Thumb by Tab key press, when End Thumb focused ", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumbEnd } = await renderSliderInRangeMode();
      elThumbEnd.focus();
      before = asFragment().firstChild;
      userEvent.tab();
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });
});

describe("c. Ranges Slider Key Events", () => {
  it("01. decrease value by Left/Down keys press", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode({ showValue: true });
      elThumbStart.focus();
      before = asFragment().firstChild;
      userEvent.keyboard("{arrowleft}");
      userEvent.keyboard("{arrowdown}");
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("02. increase value by Right/Up keys press", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumbEnd } = await renderSliderInRangeMode({ showValue: true });
      elThumbEnd.focus();
      before = asFragment().firstChild;
      userEvent.keyboard("{arrowright}");
      userEvent.keyboard("{arrowup}");
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("03. decrease value (step 10%) by PageDown key press", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumbEnd } = await renderSliderInRangeMode({ showValue: true });
      elThumbEnd.focus();
      before = asFragment().firstChild;
      userEvent.keyboard("{pagedown}");
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("04. increase value (step 10%) by PageUp key pres", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode({ showValue: true });
      elThumbStart.focus();
      before = asFragment().firstChild;
      userEvent.keyboard("{pageup}");
      userEvent.keyboard("{pageup}");
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("05. change value by keys press in Step and Label mode", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumbStart } = await renderSliderInRangeMode({
        indicateSelection: true,
        showValue: true,
        step: 10
      });
      elThumbStart.focus();
      before = asFragment().firstChild;
      await userEvent.keyboard("{arrowright}");
      await userEvent.keyboard("{arrowright}");
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });
});

describe("d. Ranges Slider Mouse Events", () => {
  let getBoundingClientRectMock;
  beforeAll(async () => {
    getBoundingClientRectMock = jest.spyOn(global.HTMLElement.prototype, "getBoundingClientRect");
    getBoundingClientRectMock.mockImplementation(() => ({
      bottom: 32,
      height: 16,
      left: 24,
      right: 508,
      top: 16,
      width: 484,
      x: 24,
      y: 16
    }));
  });

  afterAll(async () => {
    getBoundingClientRectMock.mockRestore();
  });

  it("01. decrease Start value by mouse click on Track before StartThumb", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment } = await renderSliderInRangeMode({ showValue: true });
      const elRail = screen.getByTestId("monday-slider__rail");
      jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      userEvent.click(elRail, { clientX: 60 });
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("02. increase Start value by mouse click on Track (between near Start)", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment } = await renderSliderInRangeMode({ showValue: true });
      const elRail = screen.getByTestId("monday-slider__rail");
      jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      userEvent.click(elRail, { clientX: 170 });
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("03. decrease value by mouse click on Track (between near End)", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment } = await renderSliderInRangeMode({ showValue: true });
      const elRail = screen.getByTestId("monday-slider__rail");
      jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      userEvent.click(elRail, { clientX: 260 });
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("04. increase End value by mouse click on Track (after End)", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment } = await renderSliderInRangeMode({ showValue: true });
      const elRail = screen.getByTestId("monday-slider__rail");
      jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      userEvent.click(elRail, { clientX: 390 });
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });
});
