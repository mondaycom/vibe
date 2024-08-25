import transform from "../menu-button-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { MenuButton } from "monday-ui-react-core";
    ${source}
  `;
}

describe("MenuButton component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(
      `<MenuButton componentClassName="old-class" closeDialogOnContentClick disabledReason="Reason Text"/>`
    ),
    prependImport(`<MenuButton className="old-class" closeMenuOnItemClick tooltipContent="Reason Text"/>`),
    "should update 'componentClassName' to 'className' & 'closeDialogOnContentClick' to 'closeMenuOnItemClick' & 'disabledReason' to 'tooltipContent'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuButton closeDialogOnContentClick={false} />`),
    prependImport(`<MenuButton closeMenuOnItemClick={false} />`),
    "should update 'closeDialogOnContentClick' to 'closeMenuOnItemClick'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuButton disabledReason="reason" />`),
    prependImport(`<MenuButton tooltipContent="reason" />`),
    "should update 'disabledReason' to 'tooltipContent"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><MenuButton componentClassName="old-class" /></div>`),
    prependImport(`<div><MenuButton className="old-class" /></div>`),
    "should update 'componentClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `<MenuButton componentClassName="old-class" closeDialogOnContentClick disabledReason="Reason Text" ariaLabel="Menu Button" />`
    ),
    prependImport(
      `<MenuButton className="old-class" closeMenuOnItemClick tooltipContent="Reason Text" ariaLabel="Menu Button" />`
    ),
    "should update new props while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <MenuButton componentClassName="old-class" />
        <MenuButton componentClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <MenuButton className="old-class" />
        <MenuButton className="another-class" />
      </>`),
    "should handle multiple instances of MenuButton each with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuButton componentClassName="class-one" className="class-two" />`),
    prependImport(`<MenuButton componentClassName="class-one" className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuButton componentClassName={styles.something} className="class-two" />`),
    prependImport(`<MenuButton componentClassName={styles.something} className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuButton componentClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<MenuButton componentClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuButton componentClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<MenuButton className={styles.classOne} />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuButton componentClassName="class-one" className="class-one" />`),
    prependImport(`<MenuButton className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<MenuButton componentClassName={"class-one"} className="class-one" />`),
    prependImport(`<MenuButton className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<MenuButton componentClassName="old-class" />`,
    `<MenuButton componentClassName="old-class" />`,
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
      import { MenuButton } from "other-library";
      <MenuButton componentClassName="old-class" />
    `,
    `
      import { MenuButton } from "other-library";
      <MenuButton componentClassName="old-class" />
    `,
    "should not change when 'MenuButton' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuButton } from "other-library";
      <MenuButton componentClassName="old-class" closeDialogOnContentClick disabledReason="Reason Text"/>
    `,
    `
      import { OtherComponent as MenuButton } from "other-library";
      <MenuButton componentClassName="old-class" closeDialogOnContentClick disabledReason="Reason Text"/>
    `,
    "should not change when 'MenuButton' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as MenuButton } from "monday-ui-react-core";
      <MenuButton componentClassName="old-class" closeDialogOnContentClick disabledReason="Reason Text"/>
    `,
    `
      import { OtherComponent as MenuButton } from "monday-ui-react-core";
      <MenuButton componentClassName="old-class" closeDialogOnContentClick disabledReason="Reason Text"/>
    `,
    "should not change when 'MenuButton' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { MenuButton as VibeComponent } from "monday-ui-react-core";
      <VibeComponent componentClassName="old-class" closeDialogOnContentClick disabledReason="Reason Text"/>
    `,
    `
      import { MenuButton as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" closeMenuOnItemClick tooltipContent="Reason Text"/>
    `,
    "should change when 'MenuButton' is imported with alias from vibe"
  );
});
