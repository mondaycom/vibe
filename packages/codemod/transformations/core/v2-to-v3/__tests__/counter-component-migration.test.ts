import transform from "../Counter-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Counter } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Counter component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Counter wrapperClassName="old-class" />`),
    prependImport(`<Counter className="old-class" />`),
    "should update 'wrapperClassName' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Counter wrapperClassName="old-class" /></div>`),
    prependImport(`<div><Counter className="old-class" /></div>`),
    "should update 'wrapperClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Counter wrapperClassName="old-class" CounterColor="dark" />`),
    prependImport(`<Counter className="old-class" CounterColor="dark" />`),
    "should update 'wrapperClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Counter wrapperClassName="old-class" />
        <Counter wrapperClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <Counter className="old-class" />
        <Counter className="another-class" />
      </>`),
    "should handle multiple instances of Counter each with 'wrapperClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Counter wrapperClassName="class-one" className="class-two" />`),
    prependImport(`<Counter wrapperClassName="class-one" className="class-two" />`),
    "should not change when when both 'wrapperClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Counter wrapperClassName={styles.something} className="class-two" />`),
    prependImport(`<Counter wrapperClassName={styles.something} className="class-two" />`),
    "should not change when when both 'wrapperClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Counter wrapperClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<Counter wrapperClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'wrapperClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Counter wrapperClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<Counter className={styles.classOne} />`),
    "should remove 'wrapperClassName' when when both 'wrapperClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Counter wrapperClassName="class-one" className="class-one" />`),
    prependImport(`<Counter className="class-one" />`),
    "should remove 'wrapperClassName' when when both 'wrapperClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Counter wrapperClassName={"class-one"} className="class-one" />`),
    prependImport(`<Counter className="class-one" />`),
    "should remove 'wrapperClassName' when when both 'wrapperClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Counter wrapperClassName="old-class" />`,
    `<Counter wrapperClassName="old-class" />`,
    "should not change when no import even if 'wrapperClassName' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent wrapperClassName="old-class" />`),
    prependImport(`<OtherComponent wrapperClassName="old-class" />`),
    "should not affect other components with 'wrapperClassName'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Counter } from "other-library";
      <Counter wrapperClassName="old-class" />
    `,
    `
      import { Counter } from "other-library";
      <Counter wrapperClassName="old-class" />
    `,
    "should not change when 'Counter' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Counter } from "other-library";
      <Counter wrapperClassName="old-class" />
    `,
    `
      import { OtherComponent as Counter } from "other-library";
      <Counter wrapperClassName="old-class" />
    `,
    "should not change when 'Counter' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Counter } from "monday-ui-react-core";
      <Counter wrapperClassName="old-class" />
    `,
    `
      import { OtherComponent as Counter } from "monday-ui-react-core";
      <Counter wrapperClassName="old-class" />
    `,
    "should not change when 'Counter' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Counter as VibeComponent } from "monday-ui-react-core";
      <VibeComponent wrapperClassName="old-class" />
    `,
    `
      import { Counter as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'Counter' is imported with alias from vibe"
  );
});
