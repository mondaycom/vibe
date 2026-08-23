import { vi } from "vitest";
import React from "react";

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
