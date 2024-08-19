import transform from "../menu-item-button-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { MenuItemButton } from "monday-ui-react-core";
    ${source}
  `;
}

describe("MenuItemButton component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItemButton classname="old-class" />`),
    prependImport(`<MenuItemButton className="old-class" />`),
    "should update 'classname' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><MenuItemButton classname="old-class" /></div>`),
    prependImport(`<div><MenuItemButton className="old-class" /></div>`),
    "should update 'classname' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItemButton classname="old-class" data-testid="menu" />`),
    prependImport(`<MenuItemButton className="old-class" data-testid="menu" />`),
    "should update 'classname' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <MenuItemButton classname="old-class" />
        <MenuItemButton classname="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <MenuItemButton className="old-class" />
        <MenuItemButton className="another-class" />
      </>`),
    "should handle multiple instances of MenuItemButton each with 'classname'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItemButton classname="class-one" className="class-two" />`),
    prependImport(`<MenuItemButton classname="class-one" className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItemButton classname={styles.something} className="class-two" />`),
    prependImport(`<MenuItemButton classname={styles.something} className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItemButton classname={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<MenuItemButton classname={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'classname' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItemButton classname={styles.classOne} className={styles.classOne} />`),
    prependImport(`<MenuItemButton className={styles.classOne} />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItemButton classname="class-one" className="class-one" />`),
    prependImport(`<MenuItemButton className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuItemButton classname={"class-one"} className="class-one" />`),
    prependImport(`<MenuItemButton className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<MenuItemButton classname="old-class" />`,
    `<MenuItemButton classname="old-class" />`,
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
      import { MenuItemButton } from "other-library";
      <MenuItemButton classname="old-class" />
    `,
    `
      import { MenuItemButton } from "other-library";
      <MenuItemButton classname="old-class" />
    `,
    "should not change when 'MenuItemButton' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuItemButton } from "other-library";
      <MenuItemButton classname="old-class" />
    `,
    `
      import { OtherComponent as MenuItemButton } from "other-library";
      <MenuItemButton classname="old-class" />
    `,
    "should not change when 'MenuItemButton' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuItemButton } from "monday-ui-react-core";
      <MenuItemButton classname="old-class" />
    `,
    `
      import { OtherComponent as MenuItemButton } from "monday-ui-react-core";
      <MenuItemButton classname="old-class" />
    `,
    "should not change when 'MenuItemButton' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { MenuItemButton as VibeComponent } from "monday-ui-react-core";
      <VibeComponent classname="old-class" />
    `,
    `
      import { MenuItemButton as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'MenuItemButton' is imported with alias from vibe"
  );
});
