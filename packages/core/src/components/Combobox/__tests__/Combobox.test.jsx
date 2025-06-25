import { vi, beforeEach, afterEach, describe, it, expect } from "vitest";
import React from "react";
import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import Combobox from "../Combobox";

function clickValueCheckCallback(getByLabelText, onClickMock, labelText, value, numberOfCall = 1) {
  fireEvent.click(getByLabelText(labelText));
  expect(onClickMock.mock.calls.length).toBe(numberOfCall);
  expect(onClickMock).toHaveBeenCalledWith(expect.objectContaining({ label: labelText, value }));
}

describe("Combobox tests", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    cleanup();
  });

  describe("Without categories", () => {
    const mockOptions = [
      { value: "orange", label: "Orange" },
      { value: "yellow", label: "Yellow" },
      { value: "red", label: "Red", disabled: true }
    ];

    // eslint-disable-next-line vitest/expect-expect
    it("should call item on click callback func when onClick", () => {
      const onClickMock = vi.fn();
      const { getByLabelText } = render(<Combobox onClick={onClickMock} options={mockOptions} />);

      clickValueCheckCallback(getByLabelText, onClickMock, "Yellow", "yellow");
    });

    it("should call callback func when onOptionHover", () => {
      const onMouseOverMock = vi.fn();
      const { getByLabelText } = render(<Combobox onOptionHover={onMouseOverMock} options={mockOptions} />);

      fireEvent.mouseOver(getByLabelText("Yellow"));
      expect(onMouseOverMock.mock.calls.length).toBe(1);
    });

    it("should call callback func when onOptionLeave", () => {
      const onMouseLeaveMock = vi.fn();
      const { getByLabelText } = render(<Combobox onOptionLeave={onMouseLeaveMock} options={mockOptions} />);

      fireEvent.mouseLeave(getByLabelText("Yellow"));
      expect(onMouseLeaveMock.mock.calls.length).toBe(1);
    });

    it("should call callback func when noResultsRenderer", async () => {
      const noResRendereMock = vi.fn();
      const { getByLabelText } = render(<Combobox noResultsRenderer={noResRendereMock} options={mockOptions} />);
      const input = getByLabelText("Search for content");
      expect(noResRendereMock.mock.calls.length).toBe(0);
      fireEvent.change(input, { target: { value: "No text in option" } });
      vi.runAllTimers();
      await waitFor(() => expect(noResRendereMock.mock.calls.length).toBe(1));
    });

    it("should display no results message", async () => {
      const noRes = "NO MESSAGE";
      const { getByLabelText } = render(<Combobox options={mockOptions} noResultsMessage={noRes} />);
      const input = getByLabelText("Search for content");
      fireEvent.change(input, { target: { value: "No text in option" } });
      vi.runAllTimers();
      await waitFor(() => expect(screen.getByText(noRes)).toBeInstanceOf(Node));
    });

    it("should support default filter", async () => {
      const defaultFilter = "Orange";
      const { getByTestId, getByLabelText, getByRole } = render(
        <Combobox options={mockOptions} defaultFilter={defaultFilter} />
      );
      const input = getByTestId("search_combobox-search");
      expect(input.value).toBe(defaultFilter);
      const listbox = getByRole("listbox");
      expect(listbox.childElementCount).toBe(1);
      const orangeOption = getByLabelText(mockOptions[0].label);
      expect(orangeOption).toBeTruthy();
    });

    it("should call onAddNew func when add new", async () => {
      const onAddMock = vi.fn();

      const { getByLabelText } = render(<Combobox onAddNew={onAddMock} options={mockOptions} />);
      const input = getByLabelText("Search for content");
      fireEvent.change(input, { target: { value: "No text in option" } });
      vi.runAllTimers();

      await waitFor(() => {
        fireEvent.click(screen.getByText("Add new"));
        expect(onAddMock.mock.calls.length).toBe(1);
      });
    });

    it("should not call onClick for disabled option", () => {
      const onClickMock = vi.fn();
      const { getByLabelText } = render(<Combobox onClick={onClickMock} options={mockOptions} />);

      fireEvent.click(getByLabelText("Red"));
      expect(onClickMock).not.toHaveBeenCalled();
    });

    it("should NOT trigger hover event on disabled options", () => {
      const onHoverMock = vi.fn();
      const { getByLabelText } = render(<Combobox onOptionHover={onHoverMock} options={mockOptions} />);

      fireEvent.mouseOver(getByLabelText("Red"));
      expect(onHoverMock).not.toHaveBeenCalled();
    });
  });

  describe("With categories", () => {
    const options = [
      { id: "item 1", label: "item 1", categoryId: "third", value: "item 1" },
      { id: "item 2", label: "item 2", categoryId: "second", value: "item 2" },
      { id: "item 3", label: "item 3", categoryId: "first", value: "item 3" },
      { id: "item 4", label: "item 4", categoryId: "third", value: "item 4" },
      { id: "item 5", label: "item 5", categoryId: "first", value: "item 5" },
      { id: "item 6", label: "item 6", categoryId: "second", value: "item 6" },
      { id: "item 7", label: "item 7", categoryId: "third", value: "item 7" }
    ];
    const categories = {
      first: { id: "first", label: "first", color: "red" },
      second: { id: "second", label: "second", color: "blue" },
      third: { id: "third", label: "third", color: "orange" }
    };

    // eslint-disable-next-line vitest/expect-expect
    it("Should trigger the on click callback on the correct item with regular categories", () => {
      const onClickMock = vi.fn();
      const { getByLabelText } = render(<Combobox onClick={onClickMock} options={options} categories={categories} />);
      clickValueCheckCallback(getByLabelText, onClickMock, "item 1", "item 1");
      clickValueCheckCallback(getByLabelText, onClickMock, "item 2", "item 2", 2);
      clickValueCheckCallback(getByLabelText, onClickMock, "item 3", "item 3", 3);
      clickValueCheckCallback(getByLabelText, onClickMock, "item 4", "item 4", 4);
      clickValueCheckCallback(getByLabelText, onClickMock, "item 5", "item 5", 5);
    });

    // eslint-disable-next-line vitest/expect-expect
    it("Should trigger the on click callback on the correct item with divided categories", () => {
      const onClickMock = vi.fn();
      const { getByLabelText } = render(
        <Combobox onClick={onClickMock} options={options} categories={categories} withCategoriesDivider />
      );
      clickValueCheckCallback(getByLabelText, onClickMock, "item 1", "item 1");
      clickValueCheckCallback(getByLabelText, onClickMock, "item 2", "item 2", 2);
      clickValueCheckCallback(getByLabelText, onClickMock, "item 3", "item 3", 3);
      clickValueCheckCallback(getByLabelText, onClickMock, "item 4", "item 4", 4);
      clickValueCheckCallback(getByLabelText, onClickMock, "item 5", "item 5", 5);
    });
  });
});
