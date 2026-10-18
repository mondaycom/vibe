import { vi, afterEach, describe, it, expect } from "vitest";
import React from "react";
import { cleanup } from "@testing-library/react-hooks";
import { fireEvent, render } from "@testing-library/react";
import Avatar, { type AvatarProps } from "../Avatar";
import { ComponentDefaultTestId } from "@vibe/shared";

const renderComponent = (props: AvatarProps) => {
  return render(<Avatar {...props} />);
};

describe("avatar", () => {
  afterEach(() => {
    cleanup();
  });

  it("onClick callback should be called after clicking the element", () => {
    const onClickCallback = vi.fn();
    const { getByTestId } = renderComponent({ onClick: onClickCallback });
    const component = getByTestId(ComponentDefaultTestId.CLICKABLE);
    fireEvent.click(component);
    expect(onClickCallback.mock.calls.length).toBe(1);
  });

  it("renders badge src as an img so the SVG is not inlined or sanitized", () => {
    const src = "https://cdn.monday.com/images/sidekick.svg";
    const { getByTestId } = renderComponent({ bottomRightBadgeProps: { src } });
    const badge = getByTestId(ComponentDefaultTestId.AVATAR_BADGE);
    expect(badge.tagName).toBe("IMG");
    expect(badge.getAttribute("src")).toBe(src);
  });
});
