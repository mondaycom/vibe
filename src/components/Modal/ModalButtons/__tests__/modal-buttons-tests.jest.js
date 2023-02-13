import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import ModalButtons from "../ModalButtons";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { getTestId } from "../../../../tests/test-ids-utils";

const renderComponent = (props = {}) => {
  return render(<ModalButtons {...props} />);
};

describe("Modal buttons tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("should trigger cancel callback when clicked", async () => {
    const mock = jest.fn();
    renderComponent({ onCancel: mock });
    const cancelTestId = getTestId(ComponentDefaultTestId.MODAL_BUTTONS, "cancel");
    fireEvent.click(screen.getByTestId(cancelTestId));
    expect(mock.mock.calls.length).toBe(1);
  });

  it("should trigger confirm callback when clicked", async () => {
    const mock = jest.fn();
    renderComponent({ onConfirm: mock });
    const confirmTestId = getTestId(ComponentDefaultTestId.MODAL_BUTTONS, "confirm");
    fireEvent.click(screen.getByTestId(confirmTestId));
    expect(mock.mock.calls.length).toBe(1);
  });
});
