import { vi, beforeEach, describe, it, expect, type Mock } from "vitest";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ButtonGroup from "../ButtonGroup";

describe("ButtonGroup tests", () => {
  const option = [
    { value: 1, text: "Alpha" },
    { value: 2, text: "Beta" },
    { value: 3, text: "Gamma" },
    { value: 4, text: "Delta" }
  ];
  let onSelectMock: Mock;
  let label: string;

  beforeEach(() => {
    onSelectMock = vi.fn();
    label = "label";
    render(<ButtonGroup options={option} onSelect={onSelectMock} groupAriaLabel={label} />);
  });

  it("should call the click callback when clicked", () => {
    fireEvent.click(screen.getByText("Delta"));
    expect(onSelectMock.mock.calls.length).toBe(1);
  });

  describe("a11y", () => {
    it("should add the label", () => {
      expect(screen.getByLabelText(label)).toBeTruthy();
    });
  });

  describe("snapshots", () => {
    const snapshotOptions = [
      { value: 1, text: "Alpha" },
      { value: 2, text: "Beta" },
      { value: 3, text: "Gamma" },
      { value: 4, text: "Delta" }
    ];

    it("should render ButtonGroup with full width", () => {
      const { container } = render(
        <ButtonGroup options={snapshotOptions} groupAriaLabel="Full width test" fullWidth={true} value={2} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("should render ButtonGroup without tooltips", () => {
      const { container } = render(
        <ButtonGroup options={snapshotOptions} groupAriaLabel="No tooltips test" value={1} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("should render ButtonGroup with tooltips on all options", () => {
      const optionsWithAllTooltips = [
        { value: 1, text: "Alpha", tooltipContent: "First option tooltip" },
        { value: 2, text: "Beta", tooltipContent: "Second option tooltip" },
        { value: 3, text: "Gamma", tooltipContent: "Third option tooltip" },
        { value: 4, text: "Delta", tooltipContent: "Fourth option tooltip" }
      ];

      const { container } = render(
        <ButtonGroup options={optionsWithAllTooltips} groupAriaLabel="All tooltips test" value={3} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("should render ButtonGroup with tooltips on some options", () => {
      const optionsWithSomeTooltips = [
        { value: 1, text: "Alpha" },
        { value: 2, text: "Beta", tooltipContent: "Beta tooltip" },
        { value: 3, text: "Gamma" },
        { value: 4, text: "Delta", tooltipContent: "Delta tooltip" }
      ];

      const { container } = render(
        <ButtonGroup options={optionsWithSomeTooltips} groupAriaLabel="Some tooltips test" value={4} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
