import React from "react";
import { cleanup } from "@testing-library/react-hooks";
import { fireEvent, render } from "@testing-library/react";
import { Avatar } from "../..";
import { ELEMENT_TYPES } from "../../../__tests__/interactions-helper";

const renderComponent = props => {
  return render(<Avatar {...props} />);
};

describe("avatar", () => {
  afterEach(() => {
    cleanup();
  });

  it("onClick callback should be called after clicking the element", () => {
    const onClickCallback = jest.fn();
    const { getByTestId } = renderComponent({ onClick: onClickCallback });
    const component = getByTestId(ELEMENT_TYPES.CLICKABLE);
    fireEvent.click(component);
    expect(onClickCallback.mock.calls.length).toBe(1);
  });
});
