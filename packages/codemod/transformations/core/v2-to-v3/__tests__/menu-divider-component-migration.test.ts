import transform from "../menu-divider-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { MenuDivider } from "monday-ui-react-core";
    ${source}
  `;
}

describe("MenuDivider component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuDivider classname="old-class" />`),
    prependImport(`<MenuDivider className="old-class" />`),
    "should update 'classname' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><MenuDivider classname="old-class" /></div>`),
    prependImport(`<div><MenuDivider className="old-class" /></div>`),
    "should update 'classname' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuDivider classname="old-class" data-testid="menu" />`),
    prependImport(`<MenuDivider className="old-class" data-testid="menu" />`),
    "should update 'classname' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <MenuDivider classname="old-class" />
        <MenuDivider classname="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <MenuDivider className="old-class" />
        <MenuDivider className="another-class" />
      </>`),
    "should handle multiple instances of MenuDivider each with 'classname'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuDivider classname="class-one" className="class-two" />`),
    prependImport(`<MenuDivider classname="class-one" className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuDivider classname={styles.something} className="class-two" />`),
    prependImport(`<MenuDivider classname={styles.something} className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuDivider classname={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<MenuDivider classname={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'classname' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuDivider classname={styles.classOne} className={styles.classOne} />`),
    prependImport(`<MenuDivider className={styles.classOne} />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuDivider classname="class-one" className="class-one" />`),
    prependImport(`<MenuDivider className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuDivider classname={"class-one"} className="class-one" />`),
    prependImport(`<MenuDivider className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<MenuDivider classname="old-class" />`,
    `<MenuDivider classname="old-class" />`,
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
      import { MenuDivider } from "other-library";
      <MenuDivider classname="old-class" />
    `,
    `
      import { MenuDivider } from "other-library";
      <MenuDivider classname="old-class" />
    `,
    "should not change when 'MenuDivider' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuDivider } from "other-library";
      <MenuDivider classname="old-class" />
    `,
    `
      import { OtherComponent as MenuDivider } from "other-library";
      <MenuDivider classname="old-class" />
    `,
    "should not change when 'MenuDivider' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuDivider } from "monday-ui-react-core";
      <MenuDivider classname="old-class" />
    `,
    `
      import { OtherComponent as MenuDivider } from "monday-ui-react-core";
      <MenuDivider classname="old-class" />
    `,
    "should not change when 'MenuDivider' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { MenuDivider as VibeComponent } from "monday-ui-react-core";
      <VibeComponent classname="old-class" />
    `,
    `
      import { MenuDivider as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'MenuDivider' is imported with alias from vibe"
  );
});
