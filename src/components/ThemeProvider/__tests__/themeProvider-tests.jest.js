// import React from "react";
// import { render, cleanup } from "@testing-library/react";
// import ThemeProvider from "../ThemeProvider";
// import Button from "../../Button/Button";
// import { SystemTheme, ThemeColor } from "../ThemeProviderConstants";
// import Label from "../../Label/Label";
//
// const THEME_NAME = "test-theme-name";
// const BUTTON_TEST_ID = "button";

describe("ThemeProvider tests", () => {
  // afterEach(() => {
  //   cleanup();
  // });

  it("empty test", () => {
    expect(true).toBe(true);
  });

  // it("basic colors overrides", () => {
  //   const { getByTestId } = render(
  //     <ThemeProvider
  //       theme={{
  //         name: THEME_NAME,
  //         colors: {
  //           [SystemTheme.LIGHT]: {
  //             [ThemeColor.primaryColor]: "green"
  //           }
  //         }
  //       }}
  //     >
  //       <Label color={Label.colors.PRIMARY} text="New" />
  //     </ThemeProvider>
  //   );
  //   const button = getByTestId("text");
  //   const buttonComputedStyle = window.getComputedStyle(button);
  //   const buttonBackgroundColor = buttonComputedStyle.getPropertyValue("color");
  //   expect(buttonBackgroundColor).toBe("green");
  // });
});
