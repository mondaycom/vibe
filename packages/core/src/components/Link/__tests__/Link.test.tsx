import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Link from "../Link";

describe("Link", () => {
  const ariaLabel = "Read more about the interesting article";
  const text = "Read More";
  const href = "https://www.monday.com";

  let onClickMock: jest.Mock;

  beforeEach(() => {
    onClickMock = jest.fn();
    render(<Link text={text} onClick={onClickMock} href={href} ariaLabelDescription={ariaLabel} />);
  });

  describe("default props", () => {
    it("should open link in a new window", () => {
      const element = screen.getByText(text).closest("a");
      expect(element.target).toBe("_blank");
    });

    it("should open link to have noreferrer attribute", () => {
      const element = screen.getByText(text).closest("a");
      expect(element.rel).toBe("noreferrer");
    });
  });

  it("should call onClick", () => {
    const element = screen.getByText(text).closest("a");
    fireEvent.click(element);
    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it("should have the correct href", () => {
    const element = screen.getByText(text).closest("a");
    expect(element.href).toBe(`${href}/`);
  });

  it("should have the correct target", () => {
    const { getByText } = render(<Link href="#" text="test text" target="_self" />);
    const element = getByText("test text").closest("a");
    expect(element.target).toBe("_self");
  });

  it("should apply aria label correctly", () => {
    const element = screen.getByLabelText(ariaLabel);
    expect(element).toBeTruthy();
  });
});
