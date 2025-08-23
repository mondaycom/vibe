import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AttentionBoxDefault from "../AttentionBoxDefault";
import type { AttentionBoxDefaultProps } from "../AttentionBoxDefault";

const renderWithProps = (props: Partial<AttentionBoxDefaultProps> = {}) => {
  return render(<AttentionBoxDefault content="Test content" {...props} />);
};

describe("AttentionBoxDefault", () => {
  describe("Layout Structure", () => {
    it("renders title section with title", () => {
      renderWithProps({ title: "Test Title" });

      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders content section", () => {
      renderWithProps();
      expect(screen.getByText("Test content")).toBeInTheDocument();
    });
  });

  describe("Action Section", () => {
    it("renders action section with action button when action is provided", () => {
      const action = { text: "Action", onClick: vi.fn() };
      renderWithProps({ action });

      expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
    });

    it("renders action section with block link when link exists and no action", () => {
      const link = { href: "/test", text: "Test Link" };
      renderWithProps({ link });

      expect(screen.getByRole("link", { name: "Test Link" })).toBeInTheDocument();
    });

    it("does not render action section when no action and no link", () => {
      const { container } = renderWithProps();

      expect(container.querySelector('[class*="actionSection"]')).not.toBeInTheDocument();
    });
  });
});
