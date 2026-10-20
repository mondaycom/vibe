import React from "react";
import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import DialogContent from "src/Dialog/components/DialogContent/DialogContent";

const TRANSITION_DELAY = 100;

describe("DialogContent animation phases", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it.each(["expand", "opacity-and-slide"] as const)(
    "preserves the content classes throughout the %s animation",
    animationType => {
      const { rerender } = render(
        <DialogContent position="bottom" isOpen animationType={animationType} showDelay={TRANSITION_DELAY}>
          <button type="button">Content</button>
        </DialogContent>
      );
      const content = screen.getByRole("button", { name: "Content" }).parentElement!;
      const originalClasses = content.className;
      const phase = animationType === "expand" ? "expand" : "opacity-slide";

      expect(content.hasAttribute(`data-vibe-dialog-${phase}-appear`)).toBe(true);
      expect(content.hasAttribute(`data-vibe-dialog-${phase}-appear-active`)).toBe(true);
      act(() => vi.advanceTimersByTime(TRANSITION_DELAY));
      expect(content.className).toBe(originalClasses);
      expect(content.hasAttribute(`data-vibe-dialog-${phase}-appear`)).toBe(false);
      expect(content.hasAttribute(`data-vibe-dialog-${phase}-appear-active`)).toBe(false);

      rerender(
        <DialogContent position="bottom" isOpen={false} animationType={animationType} showDelay={TRANSITION_DELAY}>
          <button type="button">Content</button>
        </DialogContent>
      );
      expect(content.className).toBe(originalClasses);
      expect(content.hasAttribute("data-vibe-dialog-expand-exit")).toBe(animationType === "expand");
      act(() => vi.advanceTimersByTime(TRANSITION_DELAY));
      expect(content.className).toBe(originalClasses);
      expect(content.hasAttribute("data-vibe-dialog-expand-exit")).toBe(false);
    }
  );

  it("clears appear and exit phases when a transition is interrupted", () => {
    const { rerender } = render(
      <DialogContent position="bottom" isOpen showDelay={TRANSITION_DELAY}>
        <button type="button">Content</button>
      </DialogContent>
    );
    const content = screen.getByRole("button", { name: "Content" }).parentElement!;
    const originalClasses = content.className;

    rerender(
      <DialogContent position="bottom" isOpen={false} showDelay={TRANSITION_DELAY}>
        <button type="button">Content</button>
      </DialogContent>
    );
    expect(content.hasAttribute("data-vibe-dialog-expand-appear")).toBe(false);
    expect(content.hasAttribute("data-vibe-dialog-expand-appear-active")).toBe(false);
    expect(content.hasAttribute("data-vibe-dialog-expand-exit")).toBe(true);

    rerender(
      <DialogContent position="bottom" isOpen showDelay={TRANSITION_DELAY}>
        <button type="button">Content</button>
      </DialogContent>
    );
    expect(content.hasAttribute("data-vibe-dialog-expand-exit")).toBe(false);
    act(() => vi.advanceTimersByTime(TRANSITION_DELAY));
    expect(content.className).toBe(originalClasses);
    expect(screen.getByRole("button", { name: "Content" })).toBeVisible();
  });
});
