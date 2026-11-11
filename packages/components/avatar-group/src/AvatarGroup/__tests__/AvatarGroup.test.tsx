import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import AvatarGroup from "../AvatarGroup";
import { Avatar } from "@vibe/avatar";

describe("AvatarGroup", () => {
  describe("counterAriaLabel", () => {
    const counterAriaLabel = "3 more agents";

    it("uses the custom counterAriaLabel as the counter accessible name", () => {
      render(
        <AvatarGroup max={1} counterAriaLabel={counterAriaLabel}>
          <Avatar text="P1" />
          <Avatar text="P2" />
          <Avatar text="P3" />
        </AvatarGroup>
      );

      expect(screen.getByLabelText(counterAriaLabel)).toHaveAttribute("aria-label", counterAriaLabel);
    });

    it("uses the custom counterAriaLabel as the counter accessible name when disabled", () => {
      render(
        <AvatarGroup max={1} counterAriaLabel={counterAriaLabel} disabled>
          <Avatar text="P1" />
          <Avatar text="P2" />
          <Avatar text="P3" />
        </AvatarGroup>
      );

      expect(screen.getByLabelText(counterAriaLabel)).toHaveAttribute("aria-label", counterAriaLabel);
    });

    it("uses the custom counterAriaLabel as the menu button accessible name when avatars are clickable", () => {
      render(
        <AvatarGroup max={1} counterAriaLabel={counterAriaLabel}>
          <Avatar text="P1" onClick={() => {}} />
          <Avatar text="P2" onClick={() => {}} />
          <Avatar text="P3" onClick={() => {}} />
        </AvatarGroup>
      );

      expect(screen.getByRole("button", { name: counterAriaLabel })).toHaveAttribute("aria-label", counterAriaLabel);
    });
  });
});
