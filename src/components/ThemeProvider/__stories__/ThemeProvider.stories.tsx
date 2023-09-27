import cx from "classnames";
import React from "react";
import ThemeProvider, { ThemeProviderProps } from "../ThemeProvider";
import Button from "../../Button/Button";
import { Color, SystemTheme } from "../ThemeProviderConstants";
import Dropdown from "../../Dropdown/Dropdown";
import Flex from "../../Flex/Flex";
import {
  crmProductTheme,
  projectManagementProductTheme,
  softwareProductTheme,
  marketingProductTheme
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
              [Color.primaryColor]: "green"
            },
            [SystemTheme.DARK]: {
              [Color.primaryColor]: "red"
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
            [Color.primaryColor]: "red",
            [Color.primaryHoverColor]: "red"
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
                [Color.primaryColor]: "green"
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
      <Flex
        gap={Flex.gaps.LARGE}
        align={Flex.align.START}
        wrap
        className={cx(styles.productThemingContainer, "brand-colors")}
      >
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
        <Button color={Button.colors.BRAND}>Themed branded</Button>
      </Flex>
    </ThemeProvider>
  );
};
