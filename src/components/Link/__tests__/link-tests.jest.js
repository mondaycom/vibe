import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import Link from "../Link";


const renderComponent = props => {
  return render(<Link {...props} />);
};

describe("Link tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls on click when clikcing the component", () => {
    const onClick = jest.fn();
    const text = "Link"
    const { getByText } = renderComponent({ text, onClick });
    const link = getByText(text);
    fireEvent.click(link);
    expect(onClick.mock.calls.length).toEqual(1);

  });

  it("should do  x when y", () => {
    const onClick = jest.fn();
    const ariaLabelDescription = "Link"
    const { getByLabelText } = renderComponent({ ariaLabelDescription, onClick });
    const link = getByLabelText(ariaLabelDescription);
    fireEvent.click(link);
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
