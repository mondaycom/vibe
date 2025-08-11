import { describe, it, expect } from "vitest";
import * as components from "../components/index";
import * as nextComponents from "../components/next";
import * as hooks from "../hooks";

describe("exports", () => {
  it("should export all components", () => {
    expect(Object.keys(components).sort()).toMatchSnapshot();
  });

  it("should export next all components", () => {
    expect(Object.keys(nextComponents).sort()).toMatchSnapshot();
  });

  it("should export all hooks", () => {
    expect(Object.keys(hooks).sort()).toMatchSnapshot();
  });
});
