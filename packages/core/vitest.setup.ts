import { vi } from "vitest";
import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";
import ReactDOM from "react-dom";
import React from "react";

// Extend Vitest's expect with custom matchers
expect.extend(toHaveNoViolations);

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
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

// Mock ReactDOM createPortal
(ReactDOM.createPortal as any) = (node: React.ReactNode) => node;

// Conditional mocking for Storybook testing
const { testing } = process.env;
const TESTING_STORYBOOK = testing === "storybook";

if (TESTING_STORYBOOK) {
  vi.mock("react-transition-group", () => {
    const FakeTransition = vi.fn(({ children }: { children: React.ReactNode }) => children);
    const FakeCSSTransition = vi.fn((props: { in: boolean; children: React.ReactNode }) =>
      props.in ? React.createElement(FakeTransition, { children: props.children }) : null
    );
    return { CSSTransition: FakeCSSTransition, Transition: FakeTransition, SwitchTransition: FakeTransition };
  });
  vi.mock("consolidated-events", () => {
    return { addEventListener: vi.fn() };
  });
}

// Override console.error to throw on prop type warnings
const error = console.error;
console.error = function (warning: any, ...args: any[]) {
  if (
    /(Invalid prop|Failed prop type)/.test(warning) &&
    !warning.includes("of value `not valid`") &&
    !warning.includes("`ForwardRef`.") &&
    !warning.includes("children")
  ) {
    throw new Error(warning);
  }
  error.apply(console, [warning, ...args]);
};

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(global as any).ResizeObserver = ResizeObserver;

// // Global mocks
vi.mock("react-inlinesvg", () => ({
  default: ({ src, ...props }: any) =>
    React.createElement("div", {
      "data-testid": "mock-svg",
      "data-src": src,
      ...props
    })
}));
