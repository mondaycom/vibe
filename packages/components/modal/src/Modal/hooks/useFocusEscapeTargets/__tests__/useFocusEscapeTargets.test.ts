import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { renderHook, cleanup } from "@testing-library/react-hooks";
import { createRef } from "react";
import useFocusEscapeTargets from "../useFocusEscapeTargets";
import type { FocusEscapeTarget } from "../useFocusEscapeTargets.types";

describe("useFocusEscapeTargets", () => {
  let container: HTMLDivElement;
  let childElement: HTMLDivElement;
  let siblingElement: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    container.className = "test-container";

    childElement = document.createElement("div");
    childElement.className = "test-child";

    siblingElement = document.createElement("div");
    siblingElement.className = "test-sibling";

    container.appendChild(childElement);
    document.body.appendChild(container);
    document.body.appendChild(siblingElement);
  });

  afterEach(() => {
    container.remove();
    siblingElement.remove();
    cleanup();
  });

  describe("no targets", () => {
    it("should return false when no targets provided", () => {
      const { result } = renderHook(() => useFocusEscapeTargets());
      expect(result.current(childElement)).toBe(false);
    });

    it("should return false when element is undefined", () => {
      const { result } = renderHook(() => useFocusEscapeTargets([".test-container"]));
      expect(result.current(undefined)).toBe(false);
    });
  });

  describe("string selectors", () => {
    it("should match element by CSS selector", () => {
      const { result } = renderHook(() => useFocusEscapeTargets([".test-child"]));
      expect(result.current(childElement)).toBe(true);
    });

    it("should match nested element using closest", () => {
      const nestedChild = document.createElement("span");
      childElement.appendChild(nestedChild);

      const { result } = renderHook(() => useFocusEscapeTargets([".test-child"]));
      expect(result.current(nestedChild)).toBe(true);
    });

    it("should not match unrelated elements", () => {
      const { result } = renderHook(() => useFocusEscapeTargets([".test-child"]));
      expect(result.current(siblingElement)).toBe(false);
    });
  });

  describe("HTMLElement targets", () => {
    it("should match element directly", () => {
      const { result } = renderHook(() => useFocusEscapeTargets([childElement]));
      expect(result.current(childElement)).toBe(true);
    });

    it("should match children via contains", () => {
      const nestedChild = document.createElement("span");
      childElement.appendChild(nestedChild);

      const { result } = renderHook(() => useFocusEscapeTargets([childElement]));
      expect(result.current(nestedChild)).toBe(true);
    });

    it("should not match parent elements", () => {
      const { result } = renderHook(() => useFocusEscapeTargets([childElement]));
      expect(result.current(container)).toBe(false);
    });
  });

  describe("RefObject targets", () => {
    it("should match ref element", () => {
      const ref = createRef<HTMLDivElement>();
      Object.defineProperty(ref, "current", {
        writable: true,
        value: childElement
      });

      const { result } = renderHook(() => useFocusEscapeTargets([ref]));
      expect(result.current(childElement)).toBe(true);
    });

    it("should match children of ref element", () => {
      const ref = createRef<HTMLDivElement>();
      Object.defineProperty(ref, "current", {
        writable: true,
        value: container
      });

      const { result } = renderHook(() => useFocusEscapeTargets([ref]));
      expect(result.current(childElement)).toBe(true);
    });

    it("should handle null ref gracefully", () => {
      const ref = createRef<HTMLDivElement>();
      const { result } = renderHook(() => useFocusEscapeTargets([ref]));
      expect(result.current(childElement)).toBe(false);
    });
  });

  describe("mixed targets", () => {
    it("should handle combination of all target types", () => {
      const ref = createRef<HTMLDivElement>();
      Object.defineProperty(ref, "current", {
        writable: true,
        value: container
      });

      const extraElement = document.createElement("div");
      document.body.appendChild(extraElement);

      const targets: FocusEscapeTarget[] = [".test-sibling", extraElement, ref];
      const { result } = renderHook(() => useFocusEscapeTargets(targets));

      expect(result.current(siblingElement)).toBe(true);
      expect(result.current(extraElement)).toBe(true);
      expect(result.current(childElement)).toBe(true);

      extraElement.remove();
    });
  });
});
