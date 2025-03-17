import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmptyState from "../EmptyState";
import { Upgrade, Warning, WhatsNew } from "@vibe/icons/.";

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

  it("renders with title and description", () => {
    render(<EmptyState title="Empty State Title" description="This is a description" />);

    expect(screen.getByRole("heading", { name: "Empty State Title" })).toBeInTheDocument();
    expect(screen.getByText("This is a description")).toBeInTheDocument();
  });

  it("renders with main action button", () => {
    render(
      <EmptyState
        description="This is a description"
        mainAction={{
          text: "Main Action",
          onClick: mockOnClick
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Main Action" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with supporting link action", () => {
    render(
      <EmptyState
        description="This is a description"
        supportingAction={{
          text: "Read more",
          href: "https://example.com",
          onClick: mockOnClick
        }}
      />
    );

    const link = screen.getByText("Read more");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "https://example.com");

    fireEvent.click(link);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with supporting button action", () => {
    render(
      <EmptyState
        description="This is a description"
        supportingAction={{
          type: "button",
          text: "Secondary Action",
          onClick: mockOnClick
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Secondary Action" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with compact layout", () => {
    render(
      <EmptyState
        description="This is a description"
        layout="compact"
        data-testid="compact-empty-state"
      />
    );

    const emptyState = screen.getByTestId("compact-empty-state");
    expect(emptyState).toHaveClass("compact");
  });

  it("renders with custom image", () => {
    render(
      <EmptyState
        description="This is a description"
        illustration={<img src="https://example.com/image.png" alt="Empty state illustration" />}
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://example.com/image.png");
  });

  it("renders with custom React node as image", () => {
    render(
      <EmptyState description="This is a description" illustration={<div data-testid="custom-icon">Custom Icon</div>} />
    );

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <EmptyState description="This is a description" className="custom-class" data-testid="custom-empty-state" />
    );

    const emptyState = screen.getByTestId("custom-empty-state");
    expect(emptyState).toHaveClass("custom-class");
  });

  // Additional tests for better coverage

  it("renders main action button with custom kind", () => {
    render(
      <EmptyState
        description="This is a description"
        mainAction={{
          text: "Main Action",
          kind: "primary",
          onClick: mockOnClick
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Main Action" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("kindPrimary"); // Assuming Button applies kind as a class
  });

  it("renders main action button with icons", () => {
    render(
      <EmptyState
        description="This is a description"
        mainAction={{
          text: "Main Action",
          leftIcon: WhatsNew,
          rightIcon: Upgrade,
          onClick: mockOnClick
        }}
      />
    );

    expect(screen.getAllByTestId("icon")).toHaveLength(2);
  });

  it("renders disabled main action button", () => {
    render(
      <EmptyState
        description="This is a description"
        mainAction={{
          text: "Main Action",
          disabled: true,
          onClick: mockOnClick
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Main Action" });
    expect(button).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("renders loading main action button", () => {
    render(
      <EmptyState
        description="This is a description"
        mainAction={{
          text: "Main Action",
          loading: true,
          onClick: mockOnClick
        }}
      />
    );

    const button = screen.getByTestId("button");
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(screen.getByText("Main Action")).toBeInTheDocument();
  });

  it("renders supporting link action with default href when not provided", () => {
    render(
      <EmptyState
        description="This is a description"
        supportingAction={{
          text: "Read more",
          onClick: mockOnClick
        }}
      />
    );

    const link = screen.getByText("Read more");
    expect(link.closest("a")).toHaveAttribute("href", "#");
  });

  it("renders with custom ID", () => {
    render(<EmptyState description="This is a description" id="custom-id" />);

    const emptyState = screen.getByTestId("empty-state");
    expect(emptyState).toHaveAttribute("id", "custom-id");
  });

  it("renders supporting button action with icons", () => {
    render(
      <EmptyState
        description="This is a description"
        supportingAction={{
          type: "button",
          text: "Secondary Action",
          leftIcon: Warning,
          rightIcon: WhatsNew,
          onClick: mockOnClick
        }}
      />
    );

    const icons = screen.getAllByTestId("icon");
    expect(icons).toHaveLength(2);
    expect(icons[0]).toHaveClass("leftIcon");
    expect(icons[1]).toHaveClass("rightIcon");
  });

  it("renders disabled supporting button action", () => {
    render(
      <EmptyState
        description="This is a description"
        supportingAction={{
          type: "button",
          text: "Secondary Action",
          disabled: true,
          onClick: mockOnClick
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Secondary Action" });
    expect(button).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("renders loading supporting button action", () => {
    render(
      <EmptyState
        description="This is a description"
        supportingAction={{
          type: "button",
          text: "Secondary Action",
          loading: true,
          onClick: mockOnClick
        }}
      />
    );

    const button = screen.getByTestId("button");
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(screen.getByText("Secondary Action")).toBeInTheDocument();
  });

  it("renders with both main and supporting actions", () => {
    render(
      <EmptyState
        description="This is a description"
        mainAction={{
          text: "Main Action",
          onClick: mockOnClick
        }}
        supportingAction={{
          text: "Read more",
          href: "https://example.com"
        }}
      />
    );

    expect(screen.getByRole("button", { name: "Main Action" })).toBeInTheDocument();
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });
});
