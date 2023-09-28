import cx from "classnames";
import React from "react";
import ThemeProvider, { ThemeProviderProps } from "../ThemeProvider";
import Button from "../../Button/Button";
import { SystemTheme, ThemeColor } from "../ThemeProviderConstants";
import Dropdown from "../../Dropdown/Dropdown";
import Flex from "../../Flex/Flex";
import {
  crmProductTheme,
  marketingProductTheme,
  projectManagementProductTheme,
  softwareProductTheme
} from "./product-themes";
import styles from "./ThemeProvider.stories.module.scss";

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
            [SystemTheme.LIGHT]: {
              [ThemeColor.primaryColor]: "green"
            },
            [SystemTheme.DARK]: {
              [ThemeColor.primaryColor]: "red"
            },
            black: {
              "primary-color": "orange"
            },
            hacker: {
              "primary-color": "#ff9191"
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
          [SystemTheme.LIGHT]: {
            [ThemeColor.primaryColor]: "red",
            [ThemeColor.primaryHoverColor]: "red"
          }
        }
      }}
    >
      <div>
        <ThemeProvider
          theme={{
            name: "inner-theme",
            colors: {
              [SystemTheme.LIGHT]: {
                [ThemeColor.primaryColor]: "green"
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
    { value: crmProductTheme, label: "CRM" },
    { value: projectManagementProductTheme, label: "Project Management" },
    { value: softwareProductTheme, label: "Software (dev)" },
    { value: marketingProductTheme, label: "Marketing" }
  ];
  const [selectedTheme, setSelectedTheme] = React.useState(null);

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
          [SystemTheme.LIGHT]: {
            [ThemeColor.primaryColor]: "green",
            [ThemeColor.primaryHoverColor]: "green",
            "custom-class": {
              [ThemeColor.primaryColor]: "orange",
              [ThemeColor.primaryHoverColor]: "orange"
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
          [SystemTheme.LIGHT]: {
            [ThemeColor.primaryColor]: "green",
            [ThemeColor.primaryHoverColor]: "darkgreen"
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
          [SystemTheme.LIGHT]: {
            [ThemeColor.primaryColor]: "green"
          }
        }
      }}
    >
      <Button>Hover me</Button>
    </ThemeProvider>
  );
};
