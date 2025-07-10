import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { Robot } from "@vibe/icons";
import AttentionBox from "../AttentionBox";
import userEvent from "@testing-library/user-event";
import { AttentionBoxType } from "../AttentionBox.types";

describe("AttentionBox", () => {
  beforeEach(() => {
    vi.clearAllTimers();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe("Core Functionality", () => {
    it("renders in default mode with title and text", () => {
      render(<AttentionBox title="Test Title" text="Test text" />);

      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByText("Test text")).toBeInTheDocument();
    });

    it("renders all variant types with correct class styling", () => {
      const variants: AttentionBoxType[] = ["primary", "success", "danger", "warning", "dark"];

      variants.forEach(variant => {
        const { unmount } = render(<AttentionBox type={variant} text="Test" />);
        const container = screen.getByRole(variant === "danger" ? "alert" : "status");
        expect(container).toHaveClass(`${variant}`);
        unmount();
      });
    });

    it("renders danger variant with alert role", () => {
      render(<AttentionBox type="danger" text="Error message" />);
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("renders non-danger variants with status role", () => {
      render(<AttentionBox type="primary" text="Info message" />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });

  describe("Icon Control", () => {
    it("renders default icon when no icon is provided", () => {
      render(<AttentionBox type="primary" text="Test" />);
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("renders custom icon when provided", () => {
      render(<AttentionBox text="Test" icon={Robot} />);
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("hides icon when hideIcon is true", () => {
      render(<AttentionBox text="Test" hideIcon />);
      expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    });
  });

  describe("Dismiss Control", () => {
    it("renders close button when onClose is provided", () => {
      const onClose = vi.fn();
      render(<AttentionBox text="Test" onClose={onClose} />);

      const closeButton = screen.getByRole("button", { name: /close/i });
      expect(closeButton).toBeInTheDocument();
    });

    it("does not render close button when onClose is not provided", () => {
      render(<AttentionBox text="Test" />);
      expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", () => {
      const onClose = vi.fn();
      render(<AttentionBox text="Test" onClose={onClose} />);

      const closeButton = screen.getByRole("button", { name: /close/i });
      fireEvent.click(closeButton);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("Action Button", () => {
    it("renders action button when provided", () => {
      const onClick = vi.fn();
      render(<AttentionBox text="Test" action={{ text: "Action", onClick }} />);

      const actionButton = screen.getByRole("button", { name: "Action" });
      expect(actionButton).toBeInTheDocument();
    });

    it("calls action onClick when button is clicked", () => {
      const onClick = vi.fn();
      render(<AttentionBox text="Test" action={{ text: "Action", onClick }} />);

      const actionButton = screen.getByRole("button", { name: "Action" });
      fireEvent.click(actionButton);

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Link", () => {
    it("renders link when provided", () => {
      render(<AttentionBox text="Test" link={{ href: "/test", text: "Test Link" }} />);

      const link = screen.getByRole("link", { name: "Test Link" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/test");
    });

    it("renders link as inline when inlineText is true in default mode", () => {
      render(<AttentionBox text="Test text" link={{ href: "/test", text: "Test Link", inlineText: true }} />);

      const link = screen.getByRole("link", { name: "Test Link" });
      expect(link).toHaveClass("inlineText");
    });

    it("renders link as block when inlineText is false in default mode", () => {
      render(<AttentionBox text="Test text" link={{ href: "/test", text: "Test Link", inlineText: false }} />);

      const link = screen.getByRole("link", { name: "Test Link" });
      expect(link).not.toHaveClass("inlineText");
    });

    it("renders link as inline when inlineText is true in compact mode", () => {
      render(<AttentionBox compact text="Test text" link={{ href: "/test", text: "Test Link", inlineText: true }} />);

      const link = screen.getByRole("link", { name: "Test Link" });
      expect(link).toHaveClass("inlineText");
    });

    it("renders link as block when inlineText is false in compact mode", () => {
      render(<AttentionBox compact text="Test text" link={{ href: "/test", text: "Test Link", inlineText: false }} />);

      const link = screen.getByRole("link", { name: "Test Link" });
      expect(link).not.toHaveClass("inlineText");
    });

    it("forces link to be inline when action exists in default mode", () => {
      const onClick = vi.fn();
      render(
        <AttentionBox
          text="Test text"
          link={{ href: "/test", text: "Test Link" }}
          action={{ text: "Action", onClick }}
        />
      );

      const link = screen.getByRole("link", { name: "Test Link" });
      expect(link).toHaveClass("inlineText");
    });

    it("forces link to be inline when action and link exists in compact mode", () => {
      const onClick = vi.fn();
      render(
        <AttentionBox
          compact
          text="Test text"
          link={{ href: "/test", text: "Test Link" }}
          action={{ text: "Action", onClick }}
        />
      );

      const link = screen.getByRole("link", { name: "Test Link" });
      expect(link).toHaveClass("inlineText");
    });

    it("defaults to block link when no inlineText prop is provided", () => {
      render(<AttentionBox text="Test text" link={{ href: "/test", text: "Test Link" }} />);

      const link = screen.getByRole("link", { name: "Test Link" });
      expect(link).not.toHaveClass("inlineText");
    });
  });

  describe("Animation", () => {
    it("applies animation classes when animate is true", () => {
      render(<AttentionBox text="Test" animate />);

      vi.advanceTimersByTime(200);

      const container = screen.getByRole("status");
      expect(container).toHaveClass("animate");
    });
  });

  describe("Children Override", () => {
    it("renders children instead of text when provided", () => {
      render(
        <AttentionBox text="Original text">
          <span>Custom children</span>
        </AttentionBox>
      );

      expect(screen.getByText("Custom children")).toBeInTheDocument();
      expect(screen.queryByText("Original text")).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has correct tab order", () => {
      const onClose = vi.fn();
      const actionClick = vi.fn();

      render(
        <AttentionBox
          text="Test"
          onClose={onClose}
          link={{ href: "/test", text: "Link" }}
          action={{ text: "Action", onClick: actionClick }}
        />
      );

      const closeButton = screen.getByRole("button", { name: /close/i });
      const link = screen.getByRole("link");
      const actionButton = screen.getByRole("button", { name: "Action" });

      userEvent.tab();
      expect(closeButton).toHaveFocus();
      userEvent.tab();
      expect(link).toHaveFocus();
      userEvent.tab();
      expect(actionButton).toHaveFocus();
    });
  });
});
