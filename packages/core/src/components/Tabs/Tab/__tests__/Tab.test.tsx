import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tab from "../Tab";

describe("Tab tests", () => {
  const onClickMock = jest.fn();
  const text = "tab";

  beforeEach(() => {
    render(<Tab onClick={onClickMock}>{text}</Tab>);
  });

  it("should call the click callback when clicked", () => {
    fireEvent.click(screen.queryByText(text));
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
