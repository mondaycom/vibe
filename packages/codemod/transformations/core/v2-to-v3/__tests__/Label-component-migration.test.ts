import transform from "../Label-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Label } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Label component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Label wrapperClassName="old-class" isAnimationDisabled/>`),
    prependImport(`<Label className="old-class" />`),
    "should update 'wrapperClassName' to 'className' and remove 'isAnimationDisabled'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Label wrapperClassName="old-class" isAnimationDisabled/></div>`),
    prependImport(`<div><Label className="old-class" /></div>`),
    "should update 'wrapperClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Label wrapperClassName="old-class" color="dark" />`),
    prependImport(`<Label className="old-class" color="dark" />`),
    "should update 'wrapperClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Label wrapperClassName="old-class" isAnimationDisabled/>
        <Label wrapperClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <Label className="old-class" />
        <Label className="another-class" />
      </>`),
    "should handle multiple instances of Label each with 'wrapperClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Label wrapperClassName="class-one" className="class-two" />`),
    prependImport(`<Label wrapperClassName="class-one" className="class-two" />`),
    "should not change when when both 'wrapperClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Label wrapperClassName={styles.something} className="class-two" />`),
    prependImport(`<Label wrapperClassName={styles.something} className="class-two" />`),
    "should not change when when both 'wrapperClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Label wrapperClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<Label wrapperClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'wrapperClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Label wrapperClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<Label className={styles.classOne} />`),
    "should remove 'wrapperClassName' when when both 'wrapperClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Label wrapperClassName="class-one" className="class-one" />`),
    prependImport(`<Label className="class-one" />`),
    "should remove 'wrapperClassName' when when both 'wrapperClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Label wrapperClassName={"class-one"} className="class-one" />`),
    prependImport(`<Label className="class-one" />`),
    "should remove 'wrapperClassName' when when both 'wrapperClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Label wrapperClassName="old-class" />`,
    `<Label wrapperClassName="old-class" />`,
    "should not change when no import even if 'wrapperClassName' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent wrapperClassName="old-class" isAnimationDisabled/>`),
    prependImport(`<OtherComponent wrapperClassName="old-class" isAnimationDisabled/>`),
    "should not affect other components with 'wrapperClassName'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Label } from "other-library";
      <Label wrapperClassName="old-class" />
    `,
    `
      import { Label } from "other-library";
      <Label wrapperClassName="old-class" />
    `,
    "should not change when 'Label' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Label } from "other-library";
      <Label wrapperClassName="old-class" />
    `,
    `
      import { OtherComponent as Label } from "other-library";
      <Label wrapperClassName="old-class" />
    `,
    "should not change when 'Label' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Label } from "monday-ui-react-core";
      <Label wrapperClassName="old-class" />
    `,
    `
      import { OtherComponent as Label } from "monday-ui-react-core";
      <Label wrapperClassName="old-class" />
    `,
    "should not change when 'Label' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Label as VibeComponent } from "monday-ui-react-core";
      <VibeComponent wrapperClassName="old-class" isAnimationDisabled/>
    `,
    `
      import { Label as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'Label' is imported with alias from vibe"
  );
});
