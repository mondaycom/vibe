import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AttentionBoxCompact, { AttentionBoxCompactProps } from "../AttentionBoxCompact";

const renderWithProps = (props: Partial<AttentionBoxCompactProps> = {}) => {
  return render(<AttentionBoxCompact content="Test content" isLinkInline={false} {...props} />);
};

describe("AttentionBoxCompact", () => {
  it("renders action button when action is provided", () => {
    const action = { text: "Action", onClick: vi.fn() };
    renderWithProps({ action });

    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
  });

  it("renders block link when link exists and is not inline", () => {
    const link = { href: "/test", text: "Test Link" };
    renderWithProps({ link, isLinkInline: false });

    expect(screen.getByRole("link", { name: "Test Link" })).toBeInTheDocument();
  });

  it("renders block link when link is inline", () => {
    const link = { href: "/test", text: "Test Link" };
    renderWithProps({ link, isLinkInline: true });

    expect(screen.getByRole("link", { name: "Test Link" })).toBeInTheDocument();
  });

  it("renders link and action when both exist", () => {
    const action = { text: "Action", onClick: vi.fn() };
    const link = { href: "/test", text: "Test Link" };
    renderWithProps({ action, link, isLinkInline: false });

    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Test Link" })).toBeInTheDocument();
  });
});
