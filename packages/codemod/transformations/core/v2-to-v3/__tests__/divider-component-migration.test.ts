import transform from "../divider-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Divider } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Divider component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Divider classname="old-class" />`),
    prependImport(`<Divider className="old-class" />`),
    "should update 'classname' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Divider classname="old-class" /></div>`),
    prependImport(`<div><Divider className="old-class" /></div>`),
    "should update 'classname' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Divider classname="old-class" direction="vertical" />`),
    prependImport(`<Divider className="old-class" direction="vertical" />`),
    "should update 'classname' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Divider classname="old-class" />
        <Divider classname="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <Divider className="old-class" />
        <Divider className="another-class" />
      </>`),
    "should handle multiple instances of Divider each with 'classname'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Divider classname="class-one" className="class-two" />`),
    prependImport(`<Divider classname="class-one" className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Divider classname={styles.something} className="class-two" />`),
    prependImport(`<Divider classname={styles.something} className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Divider classname={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<Divider classname={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'classname' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Divider classname={styles.classOne} className={styles.classOne} />`),
    prependImport(`<Divider className={styles.classOne} />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Divider classname="class-one" className="class-one" />`),
    prependImport(`<Divider className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Divider classname={"class-one"} className="class-one" />`),
    prependImport(`<Divider className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Divider classname="old-class" />`,
    `<Divider classname="old-class" />`,
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
      import { OtherComponent } from "monday-ui-react-core";
      <Divider classname="old-class" />
    `,
    `
      import { OtherComponent } from "monday-ui-react-core";
      <Divider classname="old-class" />
    `,
    "should not change when 'Divider' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Divider } from "monday-ui-react-core";
      <Divider classname="old-class" />
    `,
    `
      import { OtherComponent as Divider } from "monday-ui-react-core";
      <Divider classname="old-class" />
    `,
    "should not change when 'Divider' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Divider as VibeComponent } from "monday-ui-react-core";
      <VibeComponent classname="old-class" />
    `,
    `
      import { Divider as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'Divider' is imported with alias from vibe"
  );
});
