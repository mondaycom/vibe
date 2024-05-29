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
  component: ThemeProvider,
  enumPropNamesArray: [],
  iconPropNamesArray: [],
  actionPropsArray: []
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
        [ThemeProvider.systemThemes.LIGHT]: {
          [ThemeProvider.colors.primaryColor]: "green",
          [ThemeProvider.colors.primaryHoverColor]: "darkgreen"
        },
        [ThemeProvider.systemThemes.DARK]: {
          [ThemeProvider.colors.primaryColor]: "salmon",
          [ThemeProvider.colors.primaryHoverColor]: "darksalmon"
        },
        [ThemeProvider.systemThemes.BLACK]: {
          [ThemeProvider.colors.primaryColor]: "slateblue",
          [ThemeProvider.colors.primaryHoverColor]: "darkslateblue"
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
        case ThemeProvider.systemThemes.LIGHT:
          setSystemTheme(ThemeProvider.systemThemes.DARK);
          break;
        case ThemeProvider.systemThemes.DARK:
          setSystemTheme(ThemeProvider.systemThemes.LIGHT);
          break;
        default:
          setSystemTheme(ThemeProvider.systemThemes.DARK);
      }
    };

    return (
      <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE}>
        <ThemeProvider
          themeConfig={{
            name: "with-system-theme",
            colors: {
              [ThemeProvider.systemThemes.DARK]: {
                [ThemeProvider.colors.primaryColor]: "var(--positive-color)",
                [ThemeProvider.colors.primaryHoverColor]: "var(--positive-color-hover)"
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
