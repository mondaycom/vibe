import React from "react";
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Counter from "../Counter";

jest.useFakeTimers();

jest.mock("react-transition-group", () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeSwitchTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn(({ children }) => children);
  return {
    CSSTransition: FakeCSSTransition,
    Transition: FakeTransition,
    SwitchTransition: FakeSwitchTransition
  };
});

const text = "Click Me!";
const className = "test-class";

const getComponentToRender = ({ count = 1, ...props } = {}) => {
  return (
    <Counter {...props} className={className} count={count}>
      {text}
    </Counter>
  );
};

const renderComponent = ({ ...props } = {}) => {
  return render(getComponentToRender(props));
};

describe("<Counter />", () => {
  afterEach(() => {
    cleanup();
  });

  it("Shows the right count", () => {
    const counterComponent = renderComponent({ count: 1 });
    const counterText = counterComponent.getByText("1");
    expect(counterText).toBeTruthy();
  });

  it("Shows 999+ if count is above limit", () => {
    const counterComponent = renderComponent({ count: 1000, maxDigits: 3 });
    const counterText = counterComponent.getByText("999+");
    expect(counterText).toBeTruthy();
  });

  it("shows the new number on count change", async () => {
    const counterComponent = renderComponent({ count: 1 });
    counterComponent.rerender(getComponentToRender({ count: 2 }));
    jest.advanceTimersByTime(20000);
    const counterText = counterComponent.getByText("2");
    expect(counterText).toBeTruthy();
  });

  it("shows the 999+ count change", () => {
    const counterComponent = renderComponent({ count: 999, maxDigits: 3 });
    counterComponent.rerender(getComponentToRender({ count: 1000 }));
    const counterText = counterComponent.getByText("999+");
    expect(counterText).toBeTruthy();
  });
});

describe("Snapshots", () => {
  it("renders correctly with count below the limit", () => {
    const tree = renderer.create(<Counter count={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with count above limit", () => {
    const tree = renderer.create(<Counter count={1000} maxDigits={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
