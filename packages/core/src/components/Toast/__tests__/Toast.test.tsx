import { vi, describe, it, expect } from "vitest";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Toast, { type ToastProps } from "../Toast";
import { ComponentDefaultTestId } from "../../../tests/constants";

const renderComponent = (props: ToastProps) => {
  return render(<Toast {...props} />);
};

describe("Toast tests", () => {
  it("calls onClose when click on close button", () => {
    const onCloseMock = vi.fn();
    const toast = renderComponent({
      open: true,
      onClose: onCloseMock
    });
    const closeButton = toast.getByTestId(ComponentDefaultTestId.TOAST_CLOSE_BUTTON);

    act(() => {
      fireEvent.click(closeButton);
    });

    expect(onCloseMock.mock.calls.length).toBe(1);
  });

  it("calls onClose after 1S when autoHideDuration=1000", () => {
    const onCloseMock = vi.fn();
    vi.useFakeTimers();
    renderComponent({
      onClose: onCloseMock,
      autoHideDuration: 1000,
      open: true
    });

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(onCloseMock).toHaveBeenCalledOnce();
    vi.useRealTimers();
  });

  it("calls onClick when clicking on attached button to the toast", () => {
    const onClickMock = vi.fn();
    const toast = renderComponent({
      open: true,
      actions: [{ type: "button", key: 1, content: "Button", onClick: onClickMock }]
    });

    const button = toast.getByText("Button");
    act(() => {
      fireEvent.click(button);
    });

    expect(onClickMock).toHaveBeenCalledOnce();
  });
});
