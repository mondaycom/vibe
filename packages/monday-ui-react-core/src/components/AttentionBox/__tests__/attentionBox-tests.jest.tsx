import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AttentionBox from "../AttentionBox";

describe("AttentionBox tests", () => {
  const title = "title";
  const text = "text";

  it("should call onClose callback when close button clicked", () => {
    const onCloseMock = jest.fn();
    render(<AttentionBox onClose={onCloseMock} title={title} text={text} />);
    fireEvent.click(screen.getByLabelText("Close"));
    expect(onCloseMock.mock.calls.length).toBe(1);
  });
});
