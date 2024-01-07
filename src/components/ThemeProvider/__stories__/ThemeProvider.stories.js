import ThemeProvider from "../ThemeProvider";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import {
  ColorsEligibleForThemingTemplate,
  ThemeProviderCustomClassTemplate,
  ThemeProviderFoldedThemingTemplate,
  ThemeProviderProductThemingTemplate,
  ThemeProviderTemplateOverview,
  ThemeProviderThemingScopeTemplate
} from "./ThemeProvider.stories.helpers";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ThemeProvider,
  enumPropNamesArray: [], // List enum props here
  iconPropNamesArray: [], // List props that are typed as icons here
  actionPropsArray: [] // List the component's actions here
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
    theme: {
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
