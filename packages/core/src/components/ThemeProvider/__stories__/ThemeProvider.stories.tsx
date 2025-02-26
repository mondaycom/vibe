import React, { useState } from "react";
import { Source } from "@storybook/blocks";
import ThemeProvider from "../ThemeProvider";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import {
  ColorsEligibleForThemingTemplate,
  MondaySdkIntegrationSourceCode,
  ThemeProviderCustomClassTemplate,
  ThemeProviderFoldedThemingTemplate,
  ThemeProviderProductThemingTemplate,
  ThemeProviderTemplateOverview,
  ThemeProviderThemingScopeTemplate
} from "./ThemeProvider.stories.helpers";
import Flex from "../../Flex/Flex";
import Button from "../../Button/Button";
import { themeProviderSystemThemeSuite } from "../__tests__/ThemeProvider.interactions";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ThemeProvider
});

export default {
  title: "Theming/ThemeProvider [alpha]",
  component: ThemeProvider,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: ThemeProviderTemplateOverview.bind({}),
  name: "Overview",

  args: {
    themeConfig: {
      name: "overview-theme",
      colors: {
        light: {
          "primary-color": "green",
          "primary-hover-color": "darkgreen"
        },
        dark: {
          "primary-color": "salmon",
          "primary-hover-color": "darksalmon"
        },
        black: {
          "primary-color": "slateblue",
          "primary-hover-color": "darkslateblue"
        }
      }
    }
  }
};

export const ColorsEligibleForTheming = {
  render: () => <ColorsEligibleForThemingTemplate />,
  name: "Colors eligible for theming"
};

export const ThemingScope = {
  render: ThemeProviderThemingScopeTemplate.bind({}),
  name: "Theming scope"
};

export const FoldedTheming = {
  render: ThemeProviderFoldedThemingTemplate.bind({}),
  name: "Folded theming"
};

export const ProductTheming = {
  render: ThemeProviderProductThemingTemplate.bind({}),
  name: "Product theming"
};

export const CustomClassSelector = {
  render: ThemeProviderCustomClassTemplate.bind({}),
  name: "Custom class selector"
};

export const WithSystemTheme = {
  render: () => {
    const [systemTheme, setSystemTheme] = useState(null);

    const onToggleButtonClick = () => {
      switch (systemTheme) {
        case "light":
          setSystemTheme("dark");
          break;
        case "dark":
          setSystemTheme("light");
          break;
        default:
          setSystemTheme("dark");
      }
    };

    return (
      <Flex direction="row" gap="large">
        <ThemeProvider
          themeConfig={{
            name: "with-system-theme",
            colors: {
              dark: {
                "primary-color": "var(--positive-color)",
                "primary-hover-color": "var(--positive-color-hover)"
              }
            }
          }}
          systemTheme={systemTheme}
        >
          <Button onClick={onToggleButtonClick} data-testid={"system-theme-toggle-button"}>
            Themed
          </Button>
        </ThemeProvider>
      </Flex>
    );
  },
  name: "With systemTheme",
  play: themeProviderSystemThemeSuite
};

export const MondaySdkIntegration = {
  render: () => {
    return <Source code={MondaySdkIntegrationSourceCode}></Source>;
  },
  name: "monday.com SDK integration"
};
