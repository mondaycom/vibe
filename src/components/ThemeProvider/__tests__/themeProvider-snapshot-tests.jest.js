import React from "react";
import renderer from "react-test-renderer";
import ThemeProvider from "../ThemeProvider";

describe("ThemeProvider renders correctly", () => {
  it("with theme name", () => {
    const tree = renderer
      .create(
        <ThemeProvider
          theme={{
            name: "test-theme-name"
          }}
        >
          <div />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
