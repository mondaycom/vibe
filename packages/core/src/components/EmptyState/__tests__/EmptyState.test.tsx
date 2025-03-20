import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmptyState from "../EmptyState";
import { Button } from "../../../components/Button";
import Link from "../../../components/Link/Link";

describe("EmptyState component", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with required props only", () => {
    render(<EmptyState description="This is a description" />);

    expect(screen.getByText("This is a description")).toBeInTheDocument();
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();

    // Verify default test ID is applied
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });

  it("renders with all props", () => {
    render(
      <EmptyState
        title="Empty State Title"
        description="This is a description"
        className="custom-class"
        mainAction={<Button onClick={mockOnClick}> Main Action</Button>}
        supportingAction={<Link href="https://example.com" text="Read more" />}
        id="custom-id"
        data-testid="custom-test-id"
      />
    );

    // Check title and description
    expect(screen.getByRole("heading", { name: "Empty State Title" })).toBeInTheDocument();
    expect(screen.getByText("This is a description")).toBeInTheDocument();

    // Check main action button
    const button = screen.getByRole("button", { name: "Main Action" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    
    // Check supporting link action
    const link = screen.getByText("Read more");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "https://example.com");
    fireEvent.click(link);
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    // Check custom className
    const emptyState = screen.getByTestId("custom-test-id");
    expect(emptyState).toHaveClass("custom-class");

    // Check custom ID
    expect(emptyState).toHaveAttribute("id", "custom-id");
  });

  it("renders with supporting button action", () => {
    render(
      <EmptyState
        description="This is a description"
        supportingAction={
          <Button
            type="button"
            onClick={mockOnClick}
          >
            Secondary Action
          </Button>
        }
      />
    );

    const button = screen.getByRole("button", { name: "Secondary Action" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with compact layout", () => {
    render(<EmptyState description="This is a description" layout="compact" data-testid="compact-empty-state" />);

    const emptyState = screen.getByTestId("compact-empty-state");
    expect(emptyState).toHaveClass("compact");
  });

  it("renders with custom image", () => {
    render(
      <EmptyState
        description="This is a description"
        visual={<img src="https://example.com/image.png" alt="Empty state illustration" />}
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://example.com/image.png");
  });

  it("renders with custom React node as image", () => {
    render(
      <EmptyState description="This is a description" visual={<div data-testid="empty-state-visual">Custom Icon</div>} />
    );

    expect(screen.getByTestId("empty-state-visual")).toBeInTheDocument();
  });

  it("renders with description as a React element", () => {
    render(
      <EmptyState 
        description={<span data-testid="custom-description">Custom description with <strong>formatting</strong></span>}
      />
    );

    expect(screen.getByTestId("custom-description")).toBeInTheDocument();
    expect(screen.getByText("formatting")).toBeInTheDocument();
  });
});
