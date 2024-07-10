import React, { useEffect } from "react";
import { Decorator } from "@storybook/react";

const WithDarkTheme: Decorator = (Story, { viewMode }) => {
  // for "docs" mode use the Canvas with theme="dark"
  useEffect(() => {
    if (viewMode === "story") {
      document.body.classList.add("dark-app-theme");
    }
    return () => {
      document.body.classList.remove("dark-app-theme");
    };
  }, [viewMode]);
  return <Story />;
};

export default WithDarkTheme;
