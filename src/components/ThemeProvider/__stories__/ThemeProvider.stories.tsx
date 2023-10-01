import React from "react";
import ThemeProvider, { ThemeProviderProps } from "../ThemeProvider";
import Button from "../../Button/Button";
import { SystemTheme, ThemeColor } from "../ThemeProviderConstants";
import Dropdown from "../../Dropdown/Dropdown";
import Flex from "../../Flex/Flex";
import { productTheme1, productTheme4, productTheme2, productTheme3 } from "./product-themes";
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
              [ThemeColor.primaryColor]: "green",
              [ThemeColor.primaryHoverColor]: "darkgreen"
            },
            [SystemTheme.DARK]: {
              [ThemeColor.primaryColor]: "slateblue",
              [ThemeColor.primaryHoverColor]: "darkslateblue"
            },
            black: {
              [ThemeColor.primaryColor]: "salmon",
              [ThemeColor.primaryHoverColor]: "darksalmon"
            },
            hacker: {
              [ThemeColor.primaryColor]: "slateblue",
              [ThemeColor.primaryHoverColor]: "darkslateblue"
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
            [ThemeColor.primaryHoverColor]: "darkred"
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
                [ThemeColor.primaryColor]: "green",
                [ThemeColor.primaryHoverColor]: "darkgreen"
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
            [ThemeColor.primaryHoverColor]: "darkgreen",
            "custom-class": {
              [ThemeColor.primaryColor]: "slateblue",
              [ThemeColor.primaryHoverColor]: "darkslateblue"
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
