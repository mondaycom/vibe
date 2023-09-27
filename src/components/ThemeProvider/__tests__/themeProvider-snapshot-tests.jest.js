import React from "react";
import renderer from "react-test-renderer";
import ThemeProvider from "../ThemeProvider";

const THEME_NAME = "test-theme-name";

describe("ThemeProvider renders correctly", () => {
  it("with theme name", () => {
    const tree = renderer
      .create(
        <ThemeProvider
          theme={{
            name: THEME_NAME
          }}
        >
          <div />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
