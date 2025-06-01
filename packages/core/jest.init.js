import ReactDOM from "react-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

ReactDOM.createPortal = node => node;
const { testing } = process.env;
const TESTING_STORYBOOK = testing === "storybook";

if (TESTING_STORYBOOK) {
  vi.mock("react-transition-group", () => {
    const FakeTransition = vi.fn(({ children }) => children);
    const FakeCSSTransition = vi.fn(props => (props.in ? <FakeTransition>{props.children}</FakeTransition> : null));
    return { CSSTransition: FakeCSSTransition, Transition: FakeTransition, SwitchTransition: FakeTransition };
  });
  vi.mock("consolidated-events", () => {
    return { addEventListener: vi.fn() };
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

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserver;
