// @vitest-environment jsdom
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, waitFor } from "@testing-library/react";
import CustomSvgIcon from "../CustomSvgIcon";

const mockFetchSvg = (svg: string) =>
  vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    text: () => Promise.resolve(svg),
    headers: new Headers({ "content-type": "image/svg+xml" })
  });

describe("CustomSvgIcon", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetchSvg('<svg viewBox="0 0 1 1"><path d="M0 0h1v1z"/></svg>'));
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("inlines and sanitizes a plain svg", async () => {
    const { container } = render(<CustomSvgIcon src="https://cdn.test/plain.svg" data-testid="icon" />);
    await waitFor(() => expect(container.querySelector("svg")).not.toBeNull());
    expect(container.querySelector("img")).toBeNull();
  });

  it("strips script from an inlined svg", async () => {
    vi.stubGlobal("fetch", mockFetchSvg('<svg viewBox="0 0 1 1"><script>alert(1)</script><path d="M0 0h1v1z"/></svg>'));
    const { container } = render(<CustomSvgIcon src="https://cdn.test/script.svg" data-testid="icon" />);
    await waitFor(() => expect(container.querySelector("svg")).not.toBeNull());
    expect(container.querySelector("script")).toBeNull();
  });

  it("renders an svg containing foreignObject as an img instead of inlining it", async () => {
    vi.stubGlobal(
      "fetch",
      mockFetchSvg('<svg viewBox="0 0 1 1"><foreignObject width="1" height="1"><div/></foreignObject></svg>')
    );
    const src = "https://cdn.test/gradient.svg";
    const { container } = render(<CustomSvgIcon src={src} data-testid="icon" />);
    await waitFor(() => expect(container.querySelector("img")).not.toBeNull());
    expect(container.querySelector("img")?.getAttribute("src")).toBe(src);
    expect(container.querySelector("svg")).toBeNull();
    expect(container.querySelector("foreignObject")).toBeNull();
  });

  it("does not render for an unsafe src scheme", () => {
    const { container } = render(<CustomSvgIcon src="javascript:alert(1)" data-testid="icon" />);
    expect(container.firstChild).toBeNull();
  });
});
