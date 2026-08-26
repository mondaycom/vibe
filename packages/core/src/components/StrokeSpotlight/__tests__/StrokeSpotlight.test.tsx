import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, it, expect, vi } from "vitest";
import StrokeSpotlight from "../StrokeSpotlight";
import { STROKE_NO_PULSE_ATTR } from "../useStrokeSpotlight";

describe("StrokeSpotlight", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
      }))
    });
  });

  it("renders children and default test id / data-vibe", () => {
    render(
      <StrokeSpotlight>
        <button type="button">Compose</button>
      </StrokeSpotlight>
    );

    const root = screen.getByTestId("stroke-spotlight");
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute("data-vibe", "StrokeSpotlight");
    expect(screen.getByRole("button", { name: "Compose" })).toBeInTheDocument();
  });

  it("applies palette class and exports no-pulse attr", () => {
    render(
      <StrokeSpotlight palette="sidekick" data-testid="spotlight">
        <button type="button" {...{ [STROKE_NO_PULSE_ATTR]: true }}>
          Attach
        </button>
      </StrokeSpotlight>
    );

    expect(screen.getByTestId("spotlight")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Attach" })).toHaveAttribute(STROKE_NO_PULSE_ATTR);
  });
});
