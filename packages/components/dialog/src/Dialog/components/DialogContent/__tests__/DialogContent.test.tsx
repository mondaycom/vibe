import React from "react";
import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import DialogContent from "../DialogContent";

const TRANSITION_DELAY = 100;

describe("DialogContent declarative animation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it.each(["expand", "opacity-and-slide"] as const)(
    "keeps content classes stable through %s opening and closing",
    animationType => {
      const { rerender } = render(
        <DialogContent position="bottom" isOpen animationType={animationType} showDelay={TRANSITION_DELAY}>
          <button type="button">Content</button>
        </DialogContent>
      );
      const content = screen.getByRole("button", { name: "Content" }).parentElement!;
      const originalClasses = content.className;

      expect(content.getAttribute("data-vibe-dialog-animation")).toBe(`${animationType}-entering`);
      act(() => vi.advanceTimersByTime(TRANSITION_DELAY));
      expect(content.getAttribute("data-vibe-dialog-animation")).toBe(`${animationType}-entered`);
      expect(content.className).toBe(originalClasses);

      rerender(
        <DialogContent position="bottom" isOpen={false} animationType={animationType} showDelay={TRANSITION_DELAY}>
          <button type="button">Content</button>
        </DialogContent>
      );
      expect(content.getAttribute("data-vibe-dialog-animation")).toBe(`${animationType}-exiting`);
      expect(content.className).toBe(originalClasses);
      act(() => vi.advanceTimersByTime(TRANSITION_DELAY));
      expect(content.getAttribute("data-vibe-dialog-animation")).toBe(`${animationType}-exited`);
      expect(content.className).toBe(originalClasses);
    }
  );

  it("recovers from interrupted opening and closing without a stale phase", () => {
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
    expect(content.getAttribute("data-vibe-dialog-animation")).toBe("expand-exiting");

    rerender(
      <DialogContent position="bottom" isOpen showDelay={TRANSITION_DELAY}>
        <button type="button">Content</button>
      </DialogContent>
    );
    expect(content.getAttribute("data-vibe-dialog-animation")).toBe("expand-entered");
    act(() => vi.advanceTimersByTime(TRANSITION_DELAY));
    expect(content.getAttribute("data-vibe-dialog-animation")).toBe("expand-entered");
    expect(content.className).toBe(originalClasses);
    expect(screen.getByRole("button", { name: "Content" })).toBeVisible();
  });
});
