import { vi, expect } from "vitest";
import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";
import React from "react";

expect.extend(toHaveNoViolations);

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserver;

// Mock react-inlinesvg
vi.mock("react-inlinesvg", () => ({
  default: ({ src, ...props }) =>
    React.createElement("div", {
      "data-testid": "mock-svg",
      "data-src": src,
      ...props
    })
}));
