import React, { useState } from "react";
import ThemeProvider, { ThemeProviderProps } from "../ThemeProvider";
import Button from "../../Button/Button";
import Dropdown from "../../Dropdown/Dropdown";
import Flex from "../../Flex/Flex";
import { productTheme1, productTheme2, productTheme3, productTheme4 } from "./product-themes";
import ColorsDescription from "../../../storybook/stand-alone-documentaion/colors/colors-description/colors-description";
import { ThemeColor } from "../ThemeProviderConstants";
import { Tip, UsageGuidelines } from "vibe-storybook-components";
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
        theme={{
          name: "theming-scope-theme",
          colors: {
            [ThemeProvider.systemThemes.LIGHT]: {
              [ThemeProvider.colors.primaryColor]: "green",
              [ThemeProvider.colors.primaryHoverColor]: "darkgreen"
            },
            [ThemeProvider.systemThemes.DARK]: {
              [ThemeProvider.colors.primaryColor]: "slateblue",
              [ThemeProvider.colors.primaryHoverColor]: "darkslateblue"
            },
            [ThemeProvider.systemThemes.BLACK]: {
              [ThemeProvider.colors.primaryColor]: "salmon",
              [ThemeProvider.colors.primaryHoverColor]: "darksalmon"
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
      theme={{
        name: "outer-theme",
        colors: {
          [ThemeProvider.systemThemes.LIGHT]: {
            [ThemeProvider.colors.primaryColor]: "red",
            [ThemeProvider.colors.primaryHoverColor]: "darkred"
          }
        }
      }}
    >
      <div>
        <ThemeProvider
          theme={{
            name: "inner-theme",
            colors: {
              [ThemeProvider.systemThemes.LIGHT]: {
                [ThemeProvider.colors.primaryColor]: "green",
                [ThemeProvider.colors.primaryHoverColor]: "darkgreen"
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
    <ThemeProvider theme={selectedTheme?.value}>
      <Flex gap={Flex.gaps.LARGE} align={Flex.align.START} wrap className={styles.productThemingContainer}>
        <Dropdown
          // @ts-ignore
          placeholder={"No theme selected"}
          options={dropdownOptions}
          value={selectedTheme}
          onClear={() => setSelectedTheme(null)}
          onOptionSelect={(option: any) => setSelectedTheme(option)}
          className={styles.productThemingDropdown}
        />
        <Button>Themed</Button>
        <div className="brand-colors">
          <Button color={Button.colors.BRAND}>Themed branded</Button>
        </div>
      </Flex>
    </ThemeProvider>
  );
};

export const ThemeProviderCustomClassTemplate = (_args: JSX.IntrinsicAttributes & ThemeProviderProps) => {
  return (
    <ThemeProvider
      theme={{
        name: "theme-with-custom-class-selector",
        colors: {
          [ThemeProvider.systemThemes.LIGHT]: {
            [ThemeProvider.colors.primaryColor]: "green",
            [ThemeProvider.colors.primaryHoverColor]: "darkgreen",
            "custom-class": {
              [ThemeProvider.colors.primaryColor]: "slateblue",
              [ThemeProvider.colors.primaryHoverColor]: "darkslateblue"
            }
          }
        }
      }}
    >
      <Flex gap={Flex.gaps.LARGE} direction={Flex.directions.ROW}>
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
      theme={{
        name: "positive-example-theme",
        colors: {
          [ThemeProvider.systemThemes.LIGHT]: {
            [ThemeProvider.colors.primaryColor]: "green",
            [ThemeProvider.colors.primaryHoverColor]: "darkgreen"
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
      theme={{
        name: "negative-example-theme",
        colors: {
          [ThemeProvider.systemThemes.LIGHT]: {
            [ThemeProvider.colors.primaryColor]: "green"
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
        <code>body</code> and render everything else inside it
      </>,
      <>
        In most common case ThemeProvider should be rendered only once on the root level of the application - below the{" "}
        <code>body</code>
      </>,
      <>
        ThemeProvider is populating theme name <code>className</code> to {"it's child, so don't put "}
        <code>{"<Fragment>"}</code> (<code>{"<>"}</code>) inside - {` it's not accepting `}
        <code>className</code> prop
      </>
    ]}
  />
);
