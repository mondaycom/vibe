import * as components from "../components/index";

describe("exports", () => {
  it("should export all components", () => {
    expect(Object.keys(components).sort()).toMatchSnapshot();
  });
});
