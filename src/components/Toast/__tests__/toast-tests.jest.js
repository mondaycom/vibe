import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Toast from "../Toast";

const renderComponent = props => {
  return render(<Toast {...props} />);
};

describe("Toast tests", () => {
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
    jest.useFakeTimers();
    expect(onCloseMock.mock.calls.length).toHaveBeenCalledTimes;
  });

  it("calls onClick when clicking on attached button to the toast", () => {
    const onClickMock = jest.fn();
    renderComponent({
      open: true,
      actions: [{ type: Toast.actionTypes.BUTTON, key: 1, content: "Button", onClick: onClickMock }]
    });
    expect(onClickMock.mock.calls.length).toHaveBeenCalledTimes;
  });
});
