import { vi, afterEach, describe, it, expect } from "vitest";
import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Clickable, { ClickableProps } from "../Clickable";
import userEvent from "@testing-library/user-event";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

const renderComponent = (props: ClickableProps) => {
  return render(<Clickable {...props} />);
};

describe("Clickable tests", () => {
  const defaultTestId = getTestId(ComponentDefaultTestId.CLICKABLE);
  afterEach(() => {
    cleanup();
  });

  it("should call the onClick callback when clicked", () => {
    const onClick = vi.fn();
    const { getByTestId } = renderComponent({ onClick });
    const component = getByTestId(defaultTestId);
    fireEvent.click(component);
    expect(onClick.mock.calls.length).toBe(1);
  });

  it("should call the onClick callback when focused and enter pressed", () => {
    const onClick = vi.fn();
    const { getByTestId } = renderComponent({ onClick });
    const component = getByTestId(defaultTestId);
    component.focus();
    userEvent.keyboard("{enter}");
    expect(onClick.mock.calls.length).toBe(1);
  });

  it("should call the onClick callback when focused and space pressed", () => {
    const onClick = vi.fn();
    const { getByTestId } = renderComponent({ onClick });
    const component = getByTestId(defaultTestId);
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
