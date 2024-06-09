import React from "react";
import { cleanup } from "@testing-library/react-hooks";
import { fireEvent, render } from "@testing-library/react";
import { Refable } from "../Refable";

describe("Refable", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render nothing if an invalid child is passed", () => {
    const { container } = render(<Refable>{`invalid`}</Refable>);

    expect(container.innerHTML).toBe("");
  });

  it("should be able to render an intractable single JSX element", () => {
    const onClickCallback = jest.fn();

    const { getAllByTestId } = render(
      <Refable data-testid="ref-component" onClick={onClickCallback}>
        <span>test</span>
      </Refable>
    );

    const components = getAllByTestId("ref-component");
    expect(components.length).toBe(1);
    const [component] = components;
    expect(component.innerHTML).toBe("test");
    expect(component.getAttribute("data-testid")).toBe("ref-component");
    fireEvent.click(component);
    expect(onClickCallback.mock.calls.length).toBe(1);
  });

  it("should be able to render multiple intractable JSX elements", () => {
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

  it("should be able to render an intractable function component", () => {
    const onClickCallback = jest.fn();
    const InlineComponent = () => {
      return <div>test</div>;
    };

    const { getByTestId } = render(
      <Refable data-testid="ref-component" onClick={onClickCallback}>
        <InlineComponent />
      </Refable>
    );

    const component = getByTestId("ref-component");
    expect(component.innerHTML).toBe("<div>test</div>");
    fireEvent.click(component);
    expect(onClickCallback.mock.calls.length).toBe(1);
  });

  it("should wrap a function component with a span", () => {
    const onClickCallback = jest.fn();
    const InlineComponent = () => {
      return <div>test</div>;
    };

    const { container } = render(
      <Refable data-testid="ref-component" onClick={onClickCallback}>
        <InlineComponent />
      </Refable>
    );

    expect(container.innerHTML).toBe('<span data-testid="ref-component"><div>test</div></span>');
  });
});
