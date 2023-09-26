import React from "react";
import ThemeProvider, { ThemeProviderProps } from "../ThemeProvider";
import Button from "../../Button/Button";
import { Color, SystemTheme } from "../ThemeProviderConstants";
import { crmProductTheme } from "./product-themes/crm-product-theme";
import Dropdown from "../../Dropdown/Dropdown";
import Flex from "../../Flex/Flex";
import styles from "./ThemeProvider.stories.module.scss";
import { projectManagementProductTheme } from "./product-themes/project_management-product-theme";
import { softwareProductTheme } from "./product-themes/software-product-theme";
import { marketingProductTheme } from "./product-themes/marketing-product-theme";

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
            [Color.primaryColor]: "red"
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
    <Flex gap={Flex.gaps.LARGE} align={Flex.align.START} wrap className={styles.productThemingContainer}>
      <Dropdown
        placeholder="No theme selected"
        options={dropdownOptions}
        value={selectedTheme}
        onClear={() => setSelectedTheme(null)}
        onOptionSelect={option => setSelectedTheme(option)}
        className={styles.productThemingDropdown}
      />
      <ThemeProvider theme={selectedTheme?.value}>
        <Button>Themed</Button>
      </ThemeProvider>
    </Flex>
  );
};
