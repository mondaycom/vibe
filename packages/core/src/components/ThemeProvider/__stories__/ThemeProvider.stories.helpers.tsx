import React, { useState } from "react";
import ThemeProvider, { ThemeProviderProps } from "../ThemeProvider";
import Button from "../../Button/Button";
import Dropdown from "../../Dropdown/Dropdown";
import Flex from "../../Flex/Flex";
import { productTheme1, productTheme2, productTheme3, productTheme4 } from "./product-themes";
import ColorsDescription from "../../../storybook/stand-alone-documentaion/colors/colors-description/colors-description";
import { ThemeColor } from "../ThemeProviderConstants";
import { Link, Tip, UsageGuidelines } from "vibe-storybook-components";
import styles from "./ThemeProvider.stories.module.scss";

export const ColorsEligibleForThemingTemplate = () => <ColorsDescription colorNames={Object.values(ThemeColor)} />;

export const ThemeProviderTemplateOverview = (args: JSX.IntrinsicAttributes & ThemeProviderProps) => {
  return (
    <>
      <ThemeProvider {...args}>
        <Button>Themed</Button>
      </ThemeProvider>
    </>
  );
};

export const ThemeProviderThemingScopeTemplate = (_args: JSX.IntrinsicAttributes & ThemeProviderProps) => {
  return (
    <>
      <ThemeProvider
        themeConfig={{
          name: "theming-scope-theme",
          colors: {
            light: {
              "primary-color": "green",
              "primary-hover-color": "darkgreen"
            },
            dark: {
              "primary-color": "slateblue",
              "primary-hover-color": "darkslateblue"
            },
            black: {
              "primary-color": "salmon",
              "primary-hover-color": "darksalmon"
            }
          }
        }}
      >
        <Button>Themed</Button>
      </ThemeProvider>
      <Button>Not themed</Button>
    </>
  );
};

export const ThemeProviderFoldedThemingTemplate = (_args: JSX.IntrinsicAttributes & ThemeProviderProps) => {
  return (
    <ThemeProvider
      themeConfig={{
        name: "outer-theme",
        colors: {
          light: {
            "primary-color": "red",
            "primary-hover-color": "darkred"
          }
        }
      }}
    >
      <div>
        <ThemeProvider
          themeConfig={{
            name: "inner-theme",
            colors: {
              light: {
                "primary-color": "green",
                "primary-hover-color": "darkgreen"
              }
            }
          }}
        >
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
};

export const ThemeProviderProductThemingTemplate = (_args: JSX.IntrinsicAttributes & ThemeProviderProps) => {
  const dropdownOptions = [
    { value: productTheme1, label: "Product 1" },
    { value: productTheme2, label: "Product 2" },
    { value: productTheme3, label: "Product 3" },
    { value: productTheme4, label: "Product 4" }
  ];
  const [selectedTheme, setSelectedTheme] = useState(null);

  return (
    <ThemeProvider themeConfig={selectedTheme?.value}>
      <Flex gap="large" align="start" wrap className={styles.productThemingContainer}>
        <Dropdown
          placeholder={"No theme selected"}
          options={dropdownOptions}
          value={selectedTheme}
          onClear={() => setSelectedTheme(null)}
          onOptionSelect={(option: any) => setSelectedTheme(option)}
          className={styles.productThemingDropdown}
        />
        <Button>Themed</Button>
        <div className="brand-colors">
          <Button color="brand">Themed branded</Button>
        </div>
      </Flex>
    </ThemeProvider>
  );
};

export const ThemeProviderCustomClassTemplate = (_args: JSX.IntrinsicAttributes & ThemeProviderProps) => {
  return (
    <ThemeProvider
      themeConfig={{
        name: "theme-with-custom-class-selector",
        colors: {
          light: {
            "primary-color": "green",
            "primary-hover-color": "darkgreen",
            "custom-class": {
              "primary-color": "slateblue",
              "primary-hover-color": "darkslateblue"
            }
          }
        }
      }}
    >
      <Flex gap="large" direction="row">
        <Button>Themed</Button>
        <div className={"custom-class"}>
          <Button>Themed by custom class</Button>
        </div>
      </Flex>
    </ThemeProvider>
  );
};

export const ThemeProviderPositiveExampleTemplate = () => {
  return (
    <ThemeProvider
      themeConfig={{
        name: "positive-example-theme",
        colors: {
          light: {
            "primary-color": "green",
            "primary-hover-color": "darkgreen"
          }
        }
      }}
    >
      <Button>Hover me</Button>
    </ThemeProvider>
  );
};

export const ThemeProviderNegativeExampleTemplate = () => {
  return (
    <ThemeProvider
      themeConfig={{
        name: "negative-example-theme",
        colors: {
          light: {
            "primary-color": "green"
          }
        }
      }}
    >
      <Button>Hover me</Button>
    </ThemeProvider>
  );
};

export const TipDev = () => (
  <Tip title="Dev tip">
    Use <code>ThemeProvider.systemThemes</code> and <code>ThemeProvider.colors</code> enums to unleash the power of
    auto-completion
  </Tip>
);

export const UsageGuidelinesThemeProvider = () => (
  <UsageGuidelines
    guidelines={[
      <>
        Control themes in your application by setting theme classes (e.g. <code>.light-app-theme</code>) on your{" "}
        <code>body</code> and render everything else inside it. Or use <code>systemTheme</code> prop to make
        ThemeProvider set the theme class on the <code>body</code> for you.
      </>,
      <>
        In most common case ThemeProvider should be rendered only once on the root level of the application - below the{" "}
        <code>body</code>.
      </>,
      <>
        ThemeProvider is populating theme name <code>className</code> to the new added <code>div</code> container which
        wraps the children.
      </>
    ]}
  />
);

export const DescriptionWithLinkMondaySdkIntegration = () => (
  <>
    When developing an external application for monday.com (iframe). You can use <code>ThemeProvider</code> in
    combination with the{" "}
    <Link
      href="https://developer.monday.com/apps/docs/mondayget#sample-context-objects-for-each-feature-type"
      withoutSpacing
    >
      monday.com SDK
    </Link>
    , to apply monday.com <b>system</b> and <b>product</b> themes to your application. This will allow your application
    to be consistent with the monday.com UI.
  </>
);

export const MondaySdkIntegrationSourceCode = `
import { ThemeProvider } from "@vibe/core";
import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

const useGetContext = () => {
  const [context, setContext] = useState({});
  
  useEffect(() => {
    monday.listen("context", (res) => {
      setContext(res.data);
    });
  }, []);
  
  return context;
};

const AppWrapper = () => {
  const context = useGetContext();

  return (
    <ThemeProvider themeConfig={context.themeConfig} systemTheme={context.theme}>
      <App />
    </ThemeProvider>
  );
};
`;
