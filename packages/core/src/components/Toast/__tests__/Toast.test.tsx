import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Toast, { ToastProps } from "../Toast";
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
    renderComponent({
      onClose: onCloseMock,
      autoHideDuration: 1000,
      open: true
    });
    vi.useFakeTimers();
    expect(onCloseMock.mock.calls.length).toHaveBeenCalledTimes;
  });

  it("calls onClick when clicking on attached button to the toast", () => {
    const onClickMock = vi.fn();
    renderComponent({
      open: true,
      actions: [{ type: "button", key: 1, content: "Button", onClick: onClickMock }]
    });
    expect(onClickMock.mock.calls.length).toHaveBeenCalledTimes;
  });
});
