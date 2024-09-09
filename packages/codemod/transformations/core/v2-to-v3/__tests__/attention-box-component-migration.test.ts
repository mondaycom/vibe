import transform from "../attention-box-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { AttentionBox } from "monday-ui-react-core";
    ${source}
  `;
}

describe("AttentionBox component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="old-class" />`),
    prependImport(`<AttentionBox className="old-class" />`),
    "should update 'componentClassName' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><AttentionBox componentClassName="old-class" /></div>`),
    prependImport(`<div><AttentionBox className="old-class" /></div>`),
    "should update 'componentClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="old-class" type="info" />`),
    prependImport(`<AttentionBox className="old-class" type="info" />`),
    "should update 'componentClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <AttentionBox componentClassName="old-class" />
        <AttentionBox componentClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <AttentionBox className="old-class" />
        <AttentionBox className="another-class" />
      </>`),
    "should handle multiple instances of AttentionBox each with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="class-one" className="class-two" />`),
    prependImport(`<AttentionBox componentClassName="class-one" className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName={styles.something} className="class-two" />`),
    prependImport(`<AttentionBox componentClassName={styles.something} className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<AttentionBox componentClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<AttentionBox className={styles.classOne} />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="class-one" className="class-one" />`),
    prependImport(`<AttentionBox className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName={"class-one"} className="class-one" />`),
    prependImport(`<AttentionBox className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  it.todo("nested identical components", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(
        `<AttentionBox componentClassName="old-class"><AttentionBox className="new class" /></AttentionBox>`
      ),
      prependImport(`<AttentionBox className="old-class"><AttentionBox className="new class" /></AttentionBox>`),
      "should update 'componentClassName' to 'className' only on parent element"
    );
  });

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="old-class"><div className="new class" /></AttentionBox>`),
    prependImport(`<AttentionBox className="old-class"><div className="new class" /></AttentionBox>`),
    "should update 'componentClassName' to 'className' when exists in child component with different value"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `<AttentionBox componentClassName="old-class"><div><AttentionBoxItem className="new class"></AttentionBoxItem></div></AttentionBox>`
    ),
    prependImport(
      `<AttentionBox className="old-class"><div><AttentionBoxItem className="new class"></AttentionBoxItem></div></AttentionBox>`
    ),
    "should update 'componentClassName' to 'className' with inner nested children"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="old-class"><div componentClassName="new class" /></AttentionBox>`),
    prependImport(`<AttentionBox className="old-class"><div componentClassName="new class" /></AttentionBox>`),
    "should update 'componentClassName' to 'className' only on parent element and not on child"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="old-class" nestedElement={<div className="other-class" />} />`),
    prependImport(`<AttentionBox className="old-class" nestedElement={<div className="other-class" />} />`),
    "should update 'componentClassName' to 'className2'"
  );

  defineInlineTest(
    transform,
    {},
    `<AttentionBox componentClassName="old-class" />`,
    `<AttentionBox componentClassName="old-class" />`,
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
      import { OtherComponent } from "monday-ui-react-core";
      <AttentionBox componentClassName="old-class" />
    `,
    `
      import { OtherComponent } from "monday-ui-react-core";
      <AttentionBox componentClassName="old-class" />
    `,
    "should not change when 'AttentionBox' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as AttentionBox } from "monday-ui-react-core";
      <AttentionBox componentClassName="old-class" />
    `,
    `
      import { OtherComponent as AttentionBox } from "monday-ui-react-core";
      <AttentionBox componentClassName="old-class" />
    `,
    "should not change when 'AttentionBox' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { AttentionBox as VibeComponent } from "monday-ui-react-core";
      <VibeComponent componentClassName="old-class" />
    `,
    `
      import { AttentionBox as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'AttentionBox' is imported with alias from vibe"
  );
});
