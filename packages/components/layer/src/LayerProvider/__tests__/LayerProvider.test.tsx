import { describe, it, expect } from "vitest";
import React, { useContext, useRef } from "react";
import { render, screen } from "@testing-library/react";
import LayerProvider from "../LayerProvider";
import LayerContext from "../LayerContext";

const TestComponent = () => {
  const { layerRef } = useContext(LayerContext);
  return <div data-testid="test-component">Layer ref: {layerRef ? "provided" : "not provided"}</div>;
};

describe("LayerProvider", () => {
  it("should render children correctly", () => {
    render(
      <LayerProvider layerRef={null}>
        <div data-testid="child">Test Child</div>
      </LayerProvider>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("should provide layerRef to context when ref is provided", () => {
    const TestWrapper = () => {
      const layerRef = useRef<HTMLDivElement>(null);

      return (
        <LayerProvider layerRef={layerRef}>
          <TestComponent />
        </LayerProvider>
      );
    };

    render(<TestWrapper />);

    expect(screen.getByTestId("test-component")).toBeInTheDocument();
    expect(screen.getByText(/Layer ref: provided/)).toBeInTheDocument();
  });

  it("should provide null layerRef to context when ref is null", () => {
    render(
      <LayerProvider layerRef={null}>
        <TestComponent />
      </LayerProvider>
    );

    expect(screen.getByTestId("test-component")).toBeInTheDocument();
    expect(screen.getByText(/Layer ref: not provided/)).toBeInTheDocument();
  });

  it("should render multiple children correctly", () => {
    render(
      <LayerProvider layerRef={null}>
        <div data-testid="child1">Child 1</div>
        <div data-testid="child2">Child 2</div>
        <div data-testid="child3">Child 3</div>
      </LayerProvider>
    );

    expect(screen.getByTestId("child1")).toBeInTheDocument();
    expect(screen.getByTestId("child2")).toBeInTheDocument();
    expect(screen.getByTestId("child3")).toBeInTheDocument();
  });
});
