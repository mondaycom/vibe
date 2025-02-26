import transform from "../ThemeProvider-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { ThemeProvider } from "monday-ui-react-core";
    ${source}
  `;
}

describe("ThemeProvider component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<ThemeProvider theme={context.themeConfig} systemTheme={context.theme}><div /></ThemeProvider>`),
    prependImport(
      `<ThemeProvider themeConfig={context.themeConfig} systemTheme={context.theme}><div /></ThemeProvider>`
    ),
    "should update 'theme' to 'themeConfig'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><ThemeProvider theme={context.themeConfig} /></div>`),
    prependImport(`<div><ThemeProvider themeConfig={context.themeConfig} /></div>`),
    "should update 'theme' to 'themeConfig' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ThemeProvider theme={context.themeConfig} ThemeProviderColor="dark" />`),
    prependImport(`<ThemeProvider themeConfig={context.themeConfig} ThemeProviderColor="dark" />`),
    "should update 'theme' to 'themeConfig' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <ThemeProvider theme={context.themeConfig} />
        <ThemeProvider theme="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <ThemeProvider themeConfig={context.themeConfig} />
        <ThemeProvider themeConfig="another-class" />
      </>`),
    "should handle multiple instances of ThemeProvider each with 'theme'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ThemeProvider theme="class-one" themeConfig="class-two" />`),
    prependImport(`<ThemeProvider theme="class-one" themeConfig="class-two" />`),
    "should not change when when both 'theme' and 'themeConfig' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ThemeProvider theme={styles.something} themeConfig="class-two" />`),
    prependImport(`<ThemeProvider theme={styles.something} themeConfig="class-two" />`),
    "should not change when when both 'theme' and 'themeConfig' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ThemeProvider theme={styles.classOne} themeConfig={styles.classTwo} />`),
    prependImport(`<ThemeProvider theme={styles.classOne} themeConfig={styles.classTwo} />`),
    "should not change when when both 'theme' and 'themeConfig' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ThemeProvider theme={styles.classOne} themeConfig={styles.classOne} />`),
    prependImport(`<ThemeProvider themeConfig={styles.classOne} />`),
    "should remove 'theme' when when both 'theme' and 'themeConfig' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ThemeProvider theme="class-one" themeConfig="class-one" />`),
    prependImport(`<ThemeProvider themeConfig="class-one" />`),
    "should remove 'theme' when when both 'theme' and 'themeConfig' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ThemeProvider theme={"class-one"} themeConfig="class-one" />`),
    prependImport(`<ThemeProvider themeConfig="class-one" />`),
    "should remove 'theme' when when both 'theme' and 'themeConfig' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<ThemeProvider theme={context.themeConfig} />`,
    `<ThemeProvider theme={context.themeConfig} />`,
    "should not change when no import even if 'theme' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent theme={context.themeConfig} />`),
    prependImport(`<OtherComponent theme={context.themeConfig} />`),
    "should not affect other components with 'theme'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { ThemeProvider } from "other-library";
      <ThemeProvider theme={context.themeConfig} />
    `,
    `
      import { ThemeProvider } from "other-library";
      <ThemeProvider theme={context.themeConfig} />
    `,
    "should not change when 'ThemeProvider' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as ThemeProvider } from "other-library";
      <ThemeProvider theme={context.themeConfig} />
    `,
    `
      import { OtherComponent as ThemeProvider } from "other-library";
      <ThemeProvider theme={context.themeConfig} />
    `,
    "should not change when 'ThemeProvider' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as ThemeProvider } from "monday-ui-react-core";
      <ThemeProvider theme={context.themeConfig} />
    `,
    `
      import { OtherComponent as ThemeProvider } from "monday-ui-react-core";
      <ThemeProvider theme={context.themeConfig} />
    `,
    "should not change when 'ThemeProvider' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { ThemeProvider as VibeComponent } from "monday-ui-react-core";
      <VibeComponent theme={context.themeConfig} />
    `,
    `
      import { ThemeProvider as VibeComponent } from "monday-ui-react-core";
      <VibeComponent themeConfig={context.themeConfig} />
    `,
    "should change when 'ThemeProvider' is imported with alias from vibe"
  );
});
