import transform from "../toggle-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Toggle } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Toggle component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Toggle componentClassName="old-class" isDisabled />`),
    prependImport(`<Toggle className="old-class" disabled />`),
    "should update 'componentClassName' to 'className' and 'isDisabled' to 'disabled'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Toggle componentClassName="old-class" isDisabled /></div>`),
    prependImport(`<div><Toggle className="old-class" disabled /></div>`),
    "should update 'componentClassName' to 'className' and 'isDisabled' to 'disabled' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Toggle componentClassName="old-class" type="info" />`),
    prependImport(`<Toggle className="old-class" type="info" />`),
    "should update 'componentClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Toggle componentClassName="old-class" isDisabled />
        <Toggle componentClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <Toggle className="old-class" disabled />
        <Toggle className="another-class" />
      </>`),
    "should handle multiple instances of Toggle each with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Toggle componentClassName="class-one" className="class-two" />`),
    prependImport(`<Toggle componentClassName="class-one" className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Toggle componentClassName={styles.something} className="class-two" />`),
    prependImport(`<Toggle componentClassName={styles.something} className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Toggle componentClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<Toggle componentClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Toggle componentClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<Toggle className={styles.classOne} />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Toggle componentClassName="class-one" className="class-one" />`),
    prependImport(`<Toggle className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Toggle componentClassName={"class-one"} className="class-one" />`),
    prependImport(`<Toggle className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Toggle componentClassName="old-class" />`,
    `<Toggle componentClassName="old-class" />`,
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
      import { Toggle } from "other-library";
      <Toggle componentClassName="old-class" />
    `,
    `
      import { Toggle } from "other-library";
      <Toggle componentClassName="old-class" />
    `,
    "should not change when 'Toggle' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Toggle } from "other-library";
      <Toggle wrapperClassName="old-class" isDisabled />
    `,
    `
      import { OtherComponent as Toggle } from "other-library";
      <Toggle wrapperClassName="old-class" isDisabled />
    `,
    "should not change when 'Toggle' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Toggle } from "monday-ui-react-core";
      <Toggle componentClassName="old-class" isDisabled />
    `,
    `
      import { OtherComponent as Toggle } from "monday-ui-react-core";
      <Toggle componentClassName="old-class" isDisabled />
    `,
    "should not change when 'Toggle' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Toggle as VibeComponent } from "monday-ui-react-core";
      <VibeComponent componentClassName="old-class" isDisabled/>
    `,
    `
      import { Toggle as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" disabled/>
    `,
    "should change when 'Toggle' is imported with alias from vibe"
  );
});
