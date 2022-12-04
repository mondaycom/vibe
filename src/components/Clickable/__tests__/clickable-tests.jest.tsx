import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import Clickable from "../Clickable";
import userEvent from "@testing-library/user-event";
import { ClickableProps } from "../Clickable";

const renderComponent = (props: ClickableProps) => {
  return render(<Clickable {...props} />);
};

describe("Clickable tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("should call the onClick callback when clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });
    const component = getByTestId(Clickable.defaultTestId);
    fireEvent.click(component);
    expect(onClick.mock.calls.length).toBe(1);
  });

  it("should call the onClick callback when focused and enter pressed", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });
    const component = getByTestId(Clickable.defaultTestId);
    component.focus();
    userEvent.keyboard("{enter}");
    expect(onClick.mock.calls.length).toBe(1);
  });

  it("should call the onClick callback when focused and space pressed", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });
    const component = getByTestId(Clickable.defaultTestId);
    component.focus();
    userEvent.keyboard("{space}");
    expect(onClick.mock.calls.length).toBe(1);
  });

  describe("a11y", () => {
    it("should add the label", () => {
      const ariaLabel = "Lable Name";
      const { getByLabelText } = renderComponent({ ariaLabel });
      const element = getByLabelText(ariaLabel);
      expect(element).toBeTruthy();
    });
  });
});
