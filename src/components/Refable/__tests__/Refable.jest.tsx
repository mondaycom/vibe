import { cleanup } from "@testing-library/react-hooks";
import { fireEvent, render } from "@testing-library/react";
import { Refable } from "../Refable";

describe("Refable", () => {
  afterEach(() => {
    cleanup();
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
