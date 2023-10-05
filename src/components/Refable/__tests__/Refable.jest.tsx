import { cleanup } from "@testing-library/react-hooks";
import { fireEvent, render } from "@testing-library/react";
import { Refable } from "../Refable";

describe("Refable", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to render a string child", () => {
    const onClickCallback = jest.fn();
    const { getByTestId } = render(
      <Refable data-testid="ref-component" onClick={onClickCallback}>
        test
      </Refable>
    );

    const component = getByTestId("ref-component");

    expect(component).toHaveTextContent("test");

    fireEvent.click(component);
    expect(onClickCallback.mock.calls.length).toBe(1);
  });

  it("onClick callback should be called after clicking the element", () => {
    const onClickCallback = jest.fn();
    const { getByTestId } = render(
      <Refable data-testid="ref-component" onClick={onClickCallback}>
        <span>test</span>
      </Refable>
    );
    const component = getByTestId("ref-component");
    fireEvent.click(component);
    expect(onClickCallback.mock.calls.length).toBe(1);
  });
});
