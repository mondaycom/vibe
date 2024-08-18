import transform from "../menu-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Menu } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Menu component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Menu classname="old-class" />`),
    prependImport(`<Menu className="old-class" />`),
    "should update 'classname' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Menu classname="old-class" /></div>`),
    prependImport(`<div><Menu className="old-class" /></div>`),
    "should update 'classname' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Menu classname="old-class" ariaLabel="Menu" />`),
    prependImport(`<Menu className="old-class" ariaLabel="Menu" />`),
    "should update 'classname' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Menu classname="old-class" />
        <Menu classname="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <Menu className="old-class" />
        <Menu className="another-class" />
      </>`),
    "should handle multiple instances of Menu each with 'classname'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Menu classname="class-one" className="class-two" />`),
    prependImport(`<Menu classname="class-one" className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Menu classname={styles.something} className="class-two" />`),
    prependImport(`<Menu classname={styles.something} className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Menu classname={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<Menu classname={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'classname' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Menu classname={styles.classOne} className={styles.classOne} />`),
    prependImport(`<Menu className={styles.classOne} />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Menu classname="class-one" className="class-one" />`),
    prependImport(`<Menu className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Menu classname={"class-one"} className="class-one" />`),
    prependImport(`<Menu className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Menu classname="old-class" />`,
    `<Menu classname="old-class" />`,
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
      import { Menu } from "other-library";
      <Menu classname="old-class" />
    `,
    `
      import { Menu } from "other-library";
      <Menu classname="old-class" />
    `,
    "should not change when 'Menu' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Menu } from "other-library";
      <Menu classname="old-class" />
    `,
    `
      import { OtherComponent as Menu } from "other-library";
      <Menu classname="old-class" />
    `,
    "should not change when 'Menu' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Menu } from "monday-ui-react-core";
      <Menu classname="old-class" />
    `,
    `
      import { OtherComponent as Menu } from "monday-ui-react-core";
      <Menu classname="old-class" />
    `,
    "should not change when 'Menu' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Menu as VibeComponent } from "monday-ui-react-core";
      <VibeComponent classname="old-class" />
    `,
    `
      import { Menu as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'Menu' is imported with alias from vibe"
  );
});
