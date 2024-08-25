import transform from "../button-group-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { ButtonGroup } from "monday-ui-react-core";
    ${source}
  `;
}

describe("ButtonGroup component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<ButtonGroup componentClassName="old-class" />`),
    prependImport(`<ButtonGroup className="old-class" />`),
    "should update 'componentClassName' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><ButtonGroup componentClassName="old-class" /></div>`),
    prependImport(`<div><ButtonGroup className="old-class" /></div>`),
    "should update 'componentClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ButtonGroup componentClassName="old-class" type="info" />`),
    prependImport(`<ButtonGroup className="old-class" type="info" />`),
    "should update 'componentClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <ButtonGroup componentClassName="old-class" />
        <ButtonGroup componentClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <ButtonGroup className="old-class" />
        <ButtonGroup className="another-class" />
      </>`),
    "should handle multiple instances of ButtonGroup each with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ButtonGroup componentClassName="class-one" className="class-two" />`),
    prependImport(`<ButtonGroup componentClassName="class-one" className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ButtonGroup componentClassName={styles.something} className="class-two" />`),
    prependImport(`<ButtonGroup componentClassName={styles.something} className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ButtonGroup componentClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<ButtonGroup componentClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ButtonGroup componentClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<ButtonGroup className={styles.classOne} />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ButtonGroup componentClassName="class-one" className="class-one" />`),
    prependImport(`<ButtonGroup className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ButtonGroup componentClassName={"class-one"} className="class-one" />`),
    prependImport(`<ButtonGroup className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<ButtonGroup componentClassName="old-class" />`,
    `<ButtonGroup componentClassName="old-class" />`,
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
      import { ButtonGroup } from "other-library";
      <ButtonGroup componentClassName="old-class" />
    `,
    `
      import { ButtonGroup } from "other-library";
      <ButtonGroup componentClassName="old-class" />
    `,
    "should not change when 'ButtonGroup' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as ButtonGroup } from "other-library";
      <ButtonGroup wrapperClassName="old-class" />
    `,
    `
      import { OtherComponent as ButtonGroup } from "other-library";
      <ButtonGroup wrapperClassName="old-class" />
    `,
    "should not change when 'ButtonGroup' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as ButtonGroup } from "monday-ui-react-core";
      <ButtonGroup componentClassName="old-class" />
    `,
    `
      import { OtherComponent as ButtonGroup } from "monday-ui-react-core";
      <ButtonGroup componentClassName="old-class" />
    `,
    "should not change when 'ButtonGroup' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { ButtonGroup as VibeComponent } from "monday-ui-react-core";
      <VibeComponent componentClassName="old-class" />
    `,
    `
      import { ButtonGroup as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'ButtonGroup' is imported with alias from vibe"
  );
});
