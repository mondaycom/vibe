import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmptyState from "../EmptyState";

describe("EmptyState", () => {
  it("renders with description only", () => {
    render(<EmptyState description="No data available" />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("renders with title and description", () => {
    render(<EmptyState title="No Messages" description="You have no messages" />);
    expect(screen.getByText("No Messages")).toBeInTheDocument();
    expect(screen.getByText("You have no messages")).toBeInTheDocument();
  });

  it("renders with visual element", () => {
    const visual = <div data-testid="custom-visual">Visual</div>;
    render(<EmptyState visual={visual} description="No data" />);
    expect(screen.getByTestId("custom-visual")).toBeInTheDocument();
  });

  it("renders primary action as button", () => {
    const onClick = jest.fn();
    render(
      <EmptyState
        description="No data"
        primaryAction={{
          text: "Add Item",
          onClick
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Add Item" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders primary action as link when href is provided", () => {
    render(
      <EmptyState
        description="No data"
        primaryAction={{
          text: "Learn More",
          href: "/learn"
        }}
      />
    );

    const link = screen.getByRole("link", { name: "Learn More" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/learn");
  });

  it("renders secondary action", () => {
    const onClick = jest.fn();
    render(
      <EmptyState
        description="No data"
        secondaryAction={{
          text: "Cancel",
          onClick
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Cancel" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies compact variant", () => {
    const { container } = render(<EmptyState description="No data" compact />);

    const emptyState = container.firstChild;
    expect(emptyState).toHaveClass("compact");
  });

  it("renders with both primary and secondary actions", () => {
    render(
      <EmptyState
        description="No data"
        primaryAction={{
          text: "Primary",
          onClick: jest.fn()
        }}
        secondaryAction={{
          text: "Secondary",
          onClick: jest.fn()
        }}
      />
    );

    expect(screen.getByRole("button", { name: "Primary" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Secondary" })).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    render(
      <EmptyState
        description="No data"
        primaryAction={{
          text: "Submit",
          onClick: jest.fn(),
          disabled: true
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeDisabled();
  });

  it("handles loading state", () => {
    render(
      <EmptyState
        description="No data"
        primaryAction={{
          text: "Submit",
          onClick: jest.fn(),
          loading: true
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeInTheDocument();
    // The button should have loading state (implementation specific)
  });

  it("renders with rich description content", () => {
    const richDescription = (
      <span>
        Try <strong>adding</strong> new content.
      </span>
    );

    render(<EmptyState description={richDescription} />);
    expect(screen.getByText("adding")).toBeInTheDocument();
  });

  it("passes through custom props", () => {
    render(<EmptyState description="No data" data-testid="custom-empty-state" id="empty-state-id" />);

    const emptyState = screen.getByTestId("custom-empty-state");
    expect(emptyState).toBeInTheDocument();
    expect(emptyState).toHaveAttribute("id", "empty-state-id");
  });
});
