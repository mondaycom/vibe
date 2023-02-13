import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ModalButtons from "../ModalButtons";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";

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
    const cancel = getTestId(ComponentDefaultTestId.MODAL_BUTTONS, "cancel");
    fireEvent.click(cancel);
    expect(mock.mock.calls.length).toBe(1);
  });

  it("should trigger confirm callback when clicked", async () => {
    const mock = jest.fn();
    renderComponent({ onCancel: mock });
    const confirm = getTestId(ComponentDefaultTestId.MODAL_BUTTONS, "confirm");
    fireEvent.click(confirm);
    expect(mock.mock.calls.length).toBe(1);
  });
});
