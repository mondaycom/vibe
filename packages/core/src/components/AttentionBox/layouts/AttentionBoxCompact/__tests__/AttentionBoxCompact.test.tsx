import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AttentionBoxCompact from "../AttentionBoxCompact";
import type { AttentionBoxCompactProps } from "../AttentionBoxCompact";

const renderWithProps = (props: Partial<AttentionBoxCompactProps> = {}) => {
  return render(<AttentionBoxCompact content="Test content" {...props} />);
};

describe("AttentionBoxCompact", () => {
  it("renders action button when action is provided", () => {
    const action = { text: "Action", onClick: vi.fn() };
    renderWithProps({ action });

    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
  });

  it("renders link button when link is provided", () => {
    const link = { href: "/test", text: "Test Link" };
    renderWithProps({ link });

    expect(screen.getByRole("link", { name: "Test Link" })).toBeInTheDocument();
  });

  it("renders link and action when both exist", () => {
    const action = { text: "Action", onClick: vi.fn() };
    const link = { href: "/test", text: "Test Link" };
    renderWithProps({ action, link });

    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Test Link" })).toBeInTheDocument();
  });
});
