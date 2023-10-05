import { cleanup } from "@testing-library/react-hooks";
import { fireEvent, render } from "@testing-library/react";
import { Refable } from "../Refable";

describe("Refable", () => {
  afterEach(() => {
    cleanup();
  });

  // TODO: add tests for string children and

  it("should be able to render multiple JSX elements", () => {
    const onClickCallback = jest.fn();
    const { getAllByTestId } = render(
      <Refable data-testid="ref-component" onClick={onClickCallback}>
        <span>test</span>
        <span>test</span>
      </Refable>
    );

    const components = getAllByTestId("ref-component");

    expect(components.length).toBe(2);

    components.forEach(component => {
      expect(component.innerHTML).toBe("test");
      expect(component.getAttribute("data-testid")).toBe("ref-component");
      fireEvent.click(component);
    });
    expect(onClickCallback.mock.calls.length).toBe(2);
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
