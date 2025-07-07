import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AttentionBoxContent from "../AttentionBoxContent";

describe("AttentionBoxContent", () => {
  describe("Content Rendering", () => {
    it("renders content", () => {
      render(<AttentionBoxContent content="Test content" />);
      expect(screen.getByText("Test content")).toBeInTheDocument();
    });

    it("renders content with inline link", () => {
      render(<AttentionBoxContent content="Test content" link={{ href: "/test", text: "Test Link" }} isLinkInline />);

      expect(screen.getByText("Test content")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Test Link" })).toBeInTheDocument();
    });

    it("renders content without link when link exists but isLinkInline is false", () => {
      render(
        <AttentionBoxContent content="Test content" link={{ href: "/test", text: "Test Link" }} isLinkInline={false} />
      );

      expect(screen.getByText("Test content")).toBeInTheDocument();
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
  });

  describe("Multiline Behavior", () => {
    it("applies multiline styles when multiline is true", () => {
      render(<AttentionBoxContent content="Test content" multiline />);

      const textElement = screen.getByText("Test content");
      expect(textElement).toHaveClass("multilineText");
    });

    it("does not apply multiline styles when multiline is false", () => {
      render(<AttentionBoxContent content="Test content" multiline={false} />);

      const textElement = screen.getByText("Test content");
      expect(textElement).not.toHaveClass("multilineText");
    });
  });

  describe("Compact Mode Spacing", () => {
    it("applies spacing when not in compact mode", () => {
      render(
        <AttentionBoxContent
          content="Test content"
          link={{ href: "/test", text: "Test Link" }}
          isLinkInline
          compact={false}
        />
      );

      const linkContainer = screen.getByRole("link").parentElement;
      expect(linkContainer).toHaveClass("spacing");
    });

    it("does not apply spacing when in compact mode and not multiline", () => {
      render(
        <AttentionBoxContent
          content="Test content"
          link={{ href: "/test", text: "Test Link" }}
          isLinkInline
          compact
          multiline={false}
        />
      );

      const linkContainer = screen.getByRole("link").parentElement;
      expect(linkContainer).not.toHaveClass("spacing");
    });

    it("applies spacing when in compact mode and multiline is true", () => {
      render(
        <AttentionBoxContent
          content="Test content"
          link={{ href: "/test", text: "Test Link" }}
          isLinkInline
          compact
          multiline
        />
      );

      const linkContainer = screen.getByRole("link").parentElement;
      expect(linkContainer).toHaveClass("spacing");
    });
  });
});
