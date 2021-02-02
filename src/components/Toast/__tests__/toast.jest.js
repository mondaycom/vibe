import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Toast from "../Toast";

jest.useFakeTimers();

const renderComponent = ({ ...props } = {}, contenct = "") => {
  return render(<Toast {...props}>{contenct}</Toast>);
};

describe("<Toast />", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders nothing when open=false", () => {
    const toast = renderComponent({}, "text");
    expect(toast.queryByText("text")).toBeNull();
  });

  it("renders toast when open=true", () => {
    const toast = renderComponent({ open: true }, "text");
    expect(toast.queryByText("text")).not.toBeNull();
  });

  it("rendres action", () => {
    const action = <div>my action</div>;
    const toast = renderComponent({ open: true, action }, "text");
    expect(toast.queryByText("my action")).not.toBeNull();
  });

  it("don't renders close button if closeable=false", () => {
    const toast = renderComponent({ open: true, closeable: false }, "text");
    expect(toast.queryByLabelText("close-toast")).toBeNull();
  });

  it("calls onClose when click on close button", () => {
    const onCloseMock = jest.fn();
    const toast = renderComponent({
      open: true,
      onClose: onCloseMock
    });
    const closeButton = toast.getByLabelText("close-toast");

    act(() => {
      fireEvent.click(closeButton);
    });

    expect(onCloseMock.mock.calls.length).toBe(1);
  });

  it("calls onClose after 1S when autoHideDuration=1000", () => {
    const onCloseMock = jest.fn();
    renderComponent({
      onClose: onCloseMock,
      autoHideDuration: 1000,
      open: true
    });
    jest.advanceTimersByTime(1000);
    expect(onCloseMock.mock.calls.length).toBe(1);
  });
});
