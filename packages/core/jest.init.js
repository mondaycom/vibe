import ReactDOM from "react-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

ReactDOM.createPortal = node => node;
const { testing } = process.env;
const TESTING_STORYBOOK = testing === "storybook";

if (TESTING_STORYBOOK) {
  jest.mock("react-transition-group", () => {
    const FakeTransition = jest.fn(({ children }) => children);
    const FakeCSSTransition = jest.fn(props => (props.in ? <FakeTransition>{props.children}</FakeTransition> : null));
    return { CSSTransition: FakeCSSTransition, Transition: FakeTransition, SwitchTransition: FakeTransition };
  });
  jest.mock("consolidated-events", () => {
    return { addEventListener: jest.fn() };
  });
}

const error = console.error;
console.error = function (warning) {
  if (
    /(Invalid prop|Failed prop type)/.test(warning) &&
    !warning.includes("of value `not valid`") &&
    !warning.includes("`ForwardRef`.") &&
    !warning.includes("children")
  ) {
    throw new Error(warning);
  }
  error.apply(console, arguments);
};
