import React from "react";
import { render, cleanup, act, screen } from "@testing-library/react";
import LinearProgressBar from "../LinearProgressBar";

describe("ProgressBars Tests", () => {
  let component;

  beforeEach(() => {
    cleanup();
    act(() => {
      component = render(<LinearProgressBar id="test" />);
    });
  });

  describe("rendering of bars", () => {
    it("should not render progress bars if no values provided", () => {
      expect(screen.queryAllByRole("progressbar").length).toBe(0);
    });

    it("should render progress bars if values are provided", () => {
      const { rerender } = component;
      act(() => {
        component = rerender(<LinearProgressBar value={13} id="test" />);
      });
      expect(screen.queryAllByRole("progressbar").length).toBe(1);

      act(() => {
        component = rerender(<LinearProgressBar value={14} valueSecondary={15} id="test" />);
      });
      expect(screen.queryAllByRole("progressbar").length).toBe(2);
    });
  });

  describe("indicate progress", () => {
    it("should not render progress indication if not set", () => {
      const { rerender } = component;
      act(() => {
        component = rerender(<LinearProgressBar value={13} max={100} id="test" />);
      });
      expect(screen.queryAllByText("13%").length).toBe(0);
    });

    it("should render progress indication if set", () => {
      const { rerender } = component;
      act(() => {
        component = rerender(<LinearProgressBar value={13} max={100} id="test" indicateProgress={true} />);
      });

      expect(screen.getByText("13%")).toBeTruthy();
    });

    it("should change progress indication for value changes", () => {
      const { rerender } = component;
      const value = 13;
      for (let i = 0; i < 2; i++) {
        act(() => {
          rerender(<LinearProgressBar value={value + i} max={100} id="test" indicateProgress={true} />);
        });

        expect(screen.getByText(`${value + i}%`)).toBeTruthy();
      }
    });
  });

  describe("multi progress bars", () => {
    const multiValues = [
      { value: 10, color: "rgb(255, 0, 0)" },
      { value: 20, color: "rgb(0, 255, 0)" },
      { value: 30, color: "rgb(0, 0, 255)" }
    ];
    let multiBarsComponent;

    beforeEach(() => {
      multiBarsComponent = render(<LinearProgressBar max={100} id="test" multi />);
    });

    it("should not render multiple bars if multi is not set", () => {
      const { rerender } = component;
      act(() => {
        component = rerender(<LinearProgressBar max={100} id="test" multiValues={multiValues} />);
      });

      expect(screen.queryAllByRole("progressbar").length).toBe(0);
    });

    it("should render all the given bars with the correct values", () => {
      const { rerender } = multiBarsComponent;
      rerender(<LinearProgressBar max={100} id="test" multi multiValues={multiValues} />);

      const progressBarElements = screen.queryAllByRole("progressbar");
      expect(progressBarElements.length).toBe(3);
      const style = window.getComputedStyle(progressBarElements[1]);
      expect(style.backgroundColor).toBe(`${multiValues[1].color}`);
    });

    it("should propagate value changes to bars", () => {
      const multiValuesWithChange = [{ value: 100, color: "rgb(255, 255, 255)" }, multiValues[1], multiValues[2]];
      const { rerender } = multiBarsComponent;
      rerender(<LinearProgressBar max={100} id="test" multi multiValues={multiValues} />);

      let progressBarElements = screen.queryAllByRole("progressbar");

      rerender(<LinearProgressBar max={100} id="test" multi multiValues={multiValuesWithChange} />);
      progressBarElements = screen.queryAllByRole("progressbar");
      const style = window.getComputedStyle(progressBarElements[2]);

      expect(style.backgroundColor).toEqual(multiValuesWithChange[0].color);
    });
  });
});
