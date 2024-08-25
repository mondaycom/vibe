import transform from "../menu-title-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { MenuTitle } from "monday-ui-react-core";
    ${source}
  `;
}

describe("MenuTitle component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuTitle classname="old-class" />`),
    prependImport(`<MenuTitle className="old-class" />`),
    "should update 'classname' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><MenuTitle classname="old-class" /></div>`),
    prependImport(`<div><MenuTitle className="old-class" /></div>`),
    "should update 'classname' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuTitle classname="old-class" data-testid="menu" />`),
    prependImport(`<MenuTitle className="old-class" data-testid="menu" />`),
    "should update 'classname' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <MenuTitle classname="old-class" />
        <MenuTitle classname="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <MenuTitle className="old-class" />
        <MenuTitle className="another-class" />
      </>`),
    "should handle multiple instances of MenuTitle each with 'classname'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuTitle classname="class-one" className="class-two" />`),
    prependImport(`<MenuTitle classname="class-one" className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuTitle classname={styles.something} className="class-two" />`),
    prependImport(`<MenuTitle classname={styles.something} className="class-two" />`),
    "should not change when when both 'classname' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuTitle classname={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<MenuTitle classname={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'classname' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuTitle classname={styles.classOne} className={styles.classOne} />`),
    prependImport(`<MenuTitle className={styles.classOne} />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuTitle classname="class-one" className="class-one" />`),
    prependImport(`<MenuTitle className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuTitle classname={"class-one"} className="class-one" />`),
    prependImport(`<MenuTitle className="class-one" />`),
    "should remove 'classname' when when both 'classname' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<MenuTitle classname="old-class" />`,
    `<MenuTitle classname="old-class" />`,
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
      import { MenuTitle } from "other-library";
      <MenuTitle classname="old-class" />
    `,
    `
      import { MenuTitle } from "other-library";
      <MenuTitle classname="old-class" />
    `,
    "should not change when 'MenuTitle' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuTitle } from "other-library";
      <MenuTitle classname="old-class" />
    `,
    `
      import { OtherComponent as MenuTitle } from "other-library";
      <MenuTitle classname="old-class" />
    `,
    "should not change when 'MenuTitle' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuTitle } from "monday-ui-react-core";
      <MenuTitle classname="old-class" />
    `,
    `
      import { OtherComponent as MenuTitle } from "monday-ui-react-core";
      <MenuTitle classname="old-class" />
    `,
    "should not change when 'MenuTitle' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { MenuTitle as VibeComponent } from "monday-ui-react-core";
      <VibeComponent classname="old-class" />
    `,
    `
      import { MenuTitle as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'MenuTitle' is imported with alias from vibe"
  );
});
