import * as components from "../components/index";
import * as nextComponents from "../next";

describe("exports", () => {
  it("should export all components", () => {
    expect(Object.keys(components).sort()).toMatchSnapshot();
  });

  it("should export next all components", () => {
    expect(Object.keys(nextComponents).sort()).toMatchSnapshot();
  });
});
