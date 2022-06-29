import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Combobox from "../Combobox";

describe("Combobox tests", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const mockOptions = [
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" }
  ];

  it("should call item on click callback func when onClick", () => {
    const onClickMock = jest.fn();
    const { getByLabelText } = render(<Combobox onClick={onClickMock} options={mockOptions} />);

    fireEvent.click(getByLabelText("Yellow"));
    expect(onClickMock.mock.calls.length).toBe(1);
    expect(onClickMock).toHaveBeenCalledWith(expect.objectContaining({ value: "yellow", label: "Yellow" }));
  });

  it("should call callback func when onOptionHover", () => {
    const onMouseOverMock = jest.fn();
    const { getByLabelText } = render(<Combobox onOptionHover={onMouseOverMock} options={mockOptions} />);

    fireEvent.mouseOver(getByLabelText("Yellow"));
    expect(onMouseOverMock.mock.calls.length).toBe(1);
  });

  it("should call callback func when onOptionLeave", () => {
    const onMouseLeaveMock = jest.fn();
    const { getByLabelText } = render(<Combobox onOptionLeave={onMouseLeaveMock} options={mockOptions} />);

    fireEvent.mouseLeave(getByLabelText("Yellow"));
    expect(onMouseLeaveMock.mock.calls.length).toBe(1);
  });

  it("should call callback func when noResultsRenderer", async () => {
    const noResRendereMock = jest.fn();
    const { getByLabelText } = render(<Combobox noResultsRenderer={noResRendereMock} options={mockOptions} />);
    const input = getByLabelText("Search for content");
    expect(noResRendereMock.mock.calls.length).toBe(0);
    fireEvent.change(input, { target: { value: "No text in option" } });
    await waitFor(() => expect(noResRendereMock.mock.calls.length).toBe(1));
  });

  it("should display no results message", async () => {
    const noRes = "NO MESSAGE";
    const { getByLabelText } = render(<Combobox options={mockOptions} noResultsMessage={noRes} />);
    const input = getByLabelText("Search for content");
    fireEvent.change(input, { target: { value: "No text in option" } });
    await waitFor(() => expect(screen.getByText(noRes)).toBeInstanceOf(Node));
  });

  it("should call onAddNew func when add new", async () => {
    const onAddMock = jest.fn();

    const { getByLabelText } = render(<Combobox onAddNew={onAddMock} options={mockOptions} />);
    const input = getByLabelText("Search for content");
    fireEvent.change(input, { target: { value: "No text in option" } });

    await waitFor(() => {
      fireEvent.click(screen.getByText("Add new"));
      expect(onAddMock.mock.calls.length).toBe(1);
    });
  });
});
