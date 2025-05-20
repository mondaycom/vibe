# Storybook Code Examples

## Colors eligible for theming

```tsx
<ColorsEligibleForThemingTemplate />
```

## With systemTheme

```tsx
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
return <Flex direction="row" gap="large">
        <ThemeProvider themeConfig={{
    name: "with-system-theme",
    colors: {
      dark: {
        "primary-color": "var(--positive-color)",
        "primary-hover-color": "var(--positive-color-hover)"
      }
    }
  }} systemTheme={systemTheme}>
          <Button onClick={onToggleButtonClick} data-testid={"system-theme-toggle-button"}>
            Themed
          </Button>
        </ThemeProvider>
      </Flex>;
```

## monday.com SDK integration

```tsx
return <Source code={MondaySdkIntegrationSourceCode}></Source>;
```

