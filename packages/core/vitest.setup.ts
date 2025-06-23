import { vi } from "vitest";
import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";
import ReactDOM from "react-dom";
import React from "react";

expect.extend(toHaveNoViolations);

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(global as any).ResizeObserver = ResizeObserver;

// Mock react-inlinesvg
vi.mock("react-inlinesvg", () => ({
  default: ({ src, ...props }: any) =>
    React.createElement("div", {
      "data-testid": "mock-svg",
      "data-src": src,
      ...props
    })
}));
