import React from "react";
import { cleanup } from "@testing-library/react-hooks";
import { fireEvent, render } from "@testing-library/react";
import Avatar, { AvatarProps } from "../Avatar";
import { ComponentDefaultTestId } from "../../../tests/constants";

const renderComponent = (props: AvatarProps) => {
  return render(<Avatar {...props} />);
};

describe("avatar", () => {
  afterEach(() => {
    cleanup();
  });

  it("onClick callback should be called after clicking the element", () => {
    const onClickCallback = jest.fn();
    const { getByTestId } = renderComponent({ onClick: onClickCallback });
    const component = getByTestId(ComponentDefaultTestId.CLICKABLE);
    fireEvent.click(component);
    expect(onClickCallback.mock.calls.length).toBe(1);
  });
});
