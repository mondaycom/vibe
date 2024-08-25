import transform from "../checkbox-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Checkbox } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Checkbox component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Checkbox componentClassName="old-class" />`),
    prependImport(`<Checkbox className="old-class" />`),
    "should update 'componentClassName' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Checkbox componentClassName="old-class" /></div>`),
    prependImport(`<div><Checkbox className="old-class" /></div>`),
    "should update 'componentClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Checkbox componentClassName="old-class" CheckboxColor="dark" />`),
    prependImport(`<Checkbox className="old-class" CheckboxColor="dark" />`),
    "should update 'componentClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Checkbox componentClassName="old-class" />
        <Checkbox componentClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <Checkbox className="old-class" />
        <Checkbox className="another-class" />
      </>`),
    "should handle multiple instances of Checkbox each with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Checkbox componentClassName="class-one" className="class-two" />`),
    prependImport(`<Checkbox componentClassName="class-one" className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Checkbox componentClassName={styles.something} className="class-two" />`),
    prependImport(`<Checkbox componentClassName={styles.something} className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Checkbox componentClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<Checkbox componentClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Checkbox componentClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<Checkbox className={styles.classOne} />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Checkbox componentClassName="class-one" className="class-one" />`),
    prependImport(`<Checkbox className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Checkbox componentClassName={"class-one"} className="class-one" />`),
    prependImport(`<Checkbox className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Checkbox componentClassName="old-class" />`,
    `<Checkbox componentClassName="old-class" />`,
    "should not change when no import even if 'componentClassName' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent componentClassName="old-class" />`),
    prependImport(`<OtherComponent componentClassName="old-class" />`),
    "should not affect other components with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Checkbox } from "other-library";
      <Checkbox componentClassName="old-class" />
    `,
    `
      import { Checkbox } from "other-library";
      <Checkbox componentClassName="old-class" />
    `,
    "should not change when 'Checkbox' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Checkbox } from "other-library";
      <Checkbox componentClassName="old-class" />
    `,
    `
      import { OtherComponent as Checkbox } from "other-library";
      <Checkbox componentClassName="old-class" />
    `,
    "should not change when 'Checkbox' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Checkbox } from "monday-ui-react-core";
      <Checkbox componentClassName="old-class" />
    `,
    `
      import { OtherComponent as Checkbox } from "monday-ui-react-core";
      <Checkbox componentClassName="old-class" />
    `,
    "should not change when 'Checkbox' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Checkbox as VibeComponent } from "monday-ui-react-core";
      <VibeComponent componentClassName="old-class" />
    `,
    `
      import { Checkbox as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'Checkbox' is imported with alias from vibe"
  );
});
