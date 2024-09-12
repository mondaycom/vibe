import transform from "../RadioButton-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { RadioButton } from "monday-ui-react-core";
    ${source}
  `;
}

describe("RadioButton component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<RadioButton componentClassName="old-class" />`),
    prependImport(`<RadioButton className="old-class" />`),
    "should update 'componentClassName' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><RadioButton componentClassName="old-class" /></div>`),
    prependImport(`<div><RadioButton className="old-class" /></div>`),
    "should update 'componentClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<RadioButton componentClassName="old-class" type="info" />`),
    prependImport(`<RadioButton className="old-class" type="info" />`),
    "should update 'componentClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <RadioButton componentClassName="old-class" />
        <RadioButton componentClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <RadioButton className="old-class" />
        <RadioButton className="another-class" />
      </>`),
    "should handle multiple instances of RadioButton each with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<RadioButton componentClassName="class-one" className="class-two" />`),
    prependImport(`<RadioButton componentClassName="class-one" className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<RadioButton componentClassName={styles.something} className="class-two" />`),
    prependImport(`<RadioButton componentClassName={styles.something} className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<RadioButton componentClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<RadioButton componentClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<RadioButton componentClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<RadioButton className={styles.classOne} />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<RadioButton componentClassName="class-one" className="class-one" />`),
    prependImport(`<RadioButton className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<RadioButton componentClassName={"class-one"} className="class-one" />`),
    prependImport(`<RadioButton className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<RadioButton componentClassName="old-class" />`,
    `<RadioButton componentClassName="old-class" />`,
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
      import { RadioButton } from "other-library";
      <RadioButton componentClassName="old-class" />
    `,
    `
      import { RadioButton } from "other-library";
      <RadioButton componentClassName="old-class" />
    `,
    "should not change when 'RadioButton' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as RadioButton } from "other-library";
      <RadioButton wrapperClassName="old-class" />
    `,
    `
      import { OtherComponent as RadioButton } from "other-library";
      <RadioButton wrapperClassName="old-class" />
    `,
    "should not change when 'RadioButton' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as RadioButton } from "monday-ui-react-core";
      <RadioButton componentClassName="old-class" />
    `,
    `
      import { OtherComponent as RadioButton } from "monday-ui-react-core";
      <RadioButton componentClassName="old-class" />
    `,
    "should not change when 'RadioButton' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { RadioButton as VibeComponent } from "monday-ui-react-core";
      <VibeComponent componentClassName="old-class" />
    `,
    `
      import { RadioButton as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'RadioButton' is imported with alias from vibe"
  );
});
