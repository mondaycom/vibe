import { vi } from "vitest";
import React from "react";
import "@testing-library/jest-dom";

// eslint-disable-next-line no-undef
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

vi.mock("react-inlinesvg", async () => {
  return {
    __esModule: true,
    default: vi.fn().mockImplementation(({ src, ...props }) =>
      React.createElement("div", {
        "data-testid": "mock-svg",
        "data-src": src,
        ...props
      })
    )
  };
});
