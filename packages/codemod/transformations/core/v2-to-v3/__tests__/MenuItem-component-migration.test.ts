import transform from "../MenuItem-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { MenuItem } from "monday-ui-react-core";
    ${source}
  `;
}

describe("MenuItem component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItem classname="old-class" />`),
    prependImport(`<MenuItem className="old-class" />`),
    "should update 'classname' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><MenuItem classname="old-class" /></div>`),
    prependImport(`<div><MenuItem className="old-class" /></div>`),
    "should update 'classname' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItem classname="old-class" data-testid="menu" />`),
    prependImport(`<MenuItem className="old-class" data-testid="menu" />`),
    "should update 'classname' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <MenuItem classname="old-class" />
        <MenuItem classname="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <MenuItem className="old-class" />
        <MenuItem className="another-class" />
      </>`),
    "should handle multiple instances of MenuItem each with 'classname'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItem classname="class-one" className="class-two" />`),
    prependImport(`<MenuItem classname="class-one" className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItem classname={styles.something} className="class-two" />`),
    prependImport(`<MenuItem classname={styles.something} className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItem classname={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<MenuItem classname={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'classname' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItem classname={styles.classOne} className={styles.classOne} />`),
    prependImport(`<MenuItem className={styles.classOne} />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItem classname="class-one" className="class-one" />`),
    prependImport(`<MenuItem className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItem classname={"class-one"} className="class-one" />`),
    prependImport(`<MenuItem className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<MenuItem classname="old-class" />`,
    `<MenuItem classname="old-class" />`,
    "should not change when no import even if 'classname' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent classname="old-class" />`),
    prependImport(`<OtherComponent classname="old-class" />`),
    "should not affect other components with 'classname'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { MenuItem } from "other-library";
      <MenuItem classname="old-class" />
    `,
    `
      import { MenuItem } from "other-library";
      <MenuItem classname="old-class" />
    `,
    "should not change when 'MenuItem' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuItem } from "other-library";
      <MenuItem classname="old-class" />
    `,
    `
      import { OtherComponent as MenuItem } from "other-library";
      <MenuItem classname="old-class" />
    `,
    "should not change when 'MenuItem' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuItem } from "monday-ui-react-core";
      <MenuItem classname="old-class" />
    `,
    `
      import { OtherComponent as MenuItem } from "monday-ui-react-core";
      <MenuItem classname="old-class" />
    `,
    "should not change when 'MenuItem' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { MenuItem as VibeComponent } from "monday-ui-react-core";
      <VibeComponent classname="old-class" />
    `,
    `
      import { MenuItem as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'MenuItem' is imported with alias from vibe"
  );
});
